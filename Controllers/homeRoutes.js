const router = require('express').Router();
const { Users, My_List, Books, Authors } = require('../models');
const withAuth = require('../utils/auth');

// sign in / sign up 

router.get('/login', (req, res) => {

  res.render('login')
})

router.get('/', (req, res) => {
  res.render('homepage')
})

module.exports = router;

