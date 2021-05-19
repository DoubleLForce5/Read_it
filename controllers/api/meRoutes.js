const router = require('express').Router();
const { Books, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {

    const meData = await Users.findByPk( req.session, {
      include: [{ model: Books, as: 'readingList'}]
    });
    
    console.log(meData)
    res.status(200).json(meData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;