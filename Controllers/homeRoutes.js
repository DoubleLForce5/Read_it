const router = require('express').Router();
const { Users, My_List, Books, Authors } = require('../models');
const withAuth = require('../utils/auth');

// Render home/main page 
router.get('/', (req, res) => {
  res.render('homepage')
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const usersData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: My_List }]
    });

    const user = usersData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

// determine if you still need. 
// Render all books on homepage 
router.get('/', withAuth, async (req, res) => {
  try {
    console.log(listData)
    const listData = await My_List.findAll({
      include: [{ model: Users, Books, Authors}]
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

