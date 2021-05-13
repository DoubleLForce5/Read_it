const router = require('express').Router();
const { Books, Authors, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const meData = req.session - so set it up!!!!
    const meData = await Users.findByPk( 2, {
      include: [{ model: Books, as: 'reading_list'}]
    } )
    console.log(meData)
    res.status(200).json(meData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;