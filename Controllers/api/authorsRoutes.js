const router = require('express').Router();
const { Authors, Books, My_List, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const authorsData = await Authors.findAll({
      attributes: ['author_id', 'name_first', 'name_last'],
      include: [{ model: Books } ]
    });
    res.status(200).json(authorsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const authorData = await Authors.findByPk(req.params.id, {
      include: [{ model: Books }]
    });
    if(!authorData) {
      res.status(404).json({ message: 'No Author found with that id'});
      return;
    }
    res.status(200).json(authorData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  Authors.create({
    name_first: req.body.name_first,
    name_last: req.body.name_last
  })
  .then(author => res.json(author))
  .catch((err) => {
    console.log(err);
    res.status(400).json
  })
});

router.put('/:id', async (req, res) => {
  Authors.update(req.body, {
    where: {
      author_id: req.params.id
    }
  })
  .then(author => res.json(author))
});

router.delete('/:id', async (req, res) => {
  try{
    const authorData = await Authors.destroy({
      where: {
        author_id: req.params.id
      }
    })
    if(!authorData) {
      res.status(404).json({
        message: 'No author found with this id'
      });
      return;
    }
    res.status(200).json(authorData);
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router