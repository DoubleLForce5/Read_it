const router = require('express').Router();
const { Users, My_List, Books, Authors } = require('../models');
const withAuth = require('../utils/auth');

// this renders 

// router.get('/login', (req, res) => {

//   res.render('login')
// })

router.get('/', (req, res) => {
  // if session do a res.re.direct to dashboard whatev. 
  res.render('homepage')
})



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

