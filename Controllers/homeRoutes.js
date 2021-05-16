const router = require('express').Router();
const { Users, My_List, Books, Authors } = require('../models');
const withAuth = require('../utils/auth');

// sign in / sign up 

router.get('/login', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login')
})

module.exports = router;

