const router = require('express').Router();
const { Users } = require('../../models');


// const daysFromSignup = differenceInDays ();

// sign-up new user 
router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email}});
// console.log(userData)
    if(!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, try again'});
      
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res 
        .status(400)
        .json({ message: 'Incorrect email or password, try again'});
      
      return;
    }

    console.log(userData)
    req.session.save(() => {
      // console.log(userData.id)
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;
      // console.log(req.session)
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  if(req.session.logged_in) {
    console.log("here")
    console.log(req.session.logged_in)
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    res.status(404).end();
  }
});

module.exports = router; 