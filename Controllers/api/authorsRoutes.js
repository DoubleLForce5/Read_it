const router = require('express').Router();
const { Authors, Books, My_List, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const authorsData = await Authors.findAll({
      attributes: ['id', 'name_first', 'name_last'],
      include: [{ model: Books, Users }]
    });
    res.status(200).json(authorsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

