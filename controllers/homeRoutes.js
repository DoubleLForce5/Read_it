const router = require('express').Router();
const { Users, Books, Authors, WillRead } = require('../models');
const withAuth = require('../utils/auth');

// Render home/main page 
router.get('/', (req, res) => {
  res.render('homepage')
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log(req.session)
    const usersData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: Books,  as: 'has_read' }, { model: Books,  as: 'is_reading' }, { model: Books,  as: 'will_read' } ]
    });

    const user = usersData.get({ plain: true });
    console.log(user)

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch(err){
    console.log(err);
    res.status(500).end('broken')
  }
});

// determine if you still need. 
// Render all books on homepage 
router.get('/', withAuth, async (req, res) => {
  try {
    console.log(listData)
    const listData = await My_List.findAll({
      include: [{ model: Users, Books, Authors, My_List}]
    });

    const list = listData.map((list) => list.get({ plain: true }));

    res.render('dashboard', {
      list,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;
