const router = require('express').Router();
const { Users, Books, Authors, WillRead } = require('../models');
const withAuth = require('../utils/auth');
const {format} = require("date-fns"); 


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
    
    const dateOfSignup = format(new Date(user.createdAt), 'MMMM, yyyy');
    console.log(dateOfSignup)

    res.render('dashboard', {
      ...user,
      logged_in: true,
      dateOfSignup: dateOfSignup
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

// router.get('/login', (req, res) => {
//   if(req.session.logged_in){
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login')
// })

module.exports = router;

