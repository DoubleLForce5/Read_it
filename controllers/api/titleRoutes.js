const router = require('express').Router();
const { Books, Authors, Users, My_List } = require('../../models');

// Find book by title 
router.get('/:title', async (req, res) => {
    try {
      const bookData = await Books.findOne({ where: { title: req.params.title }}, {
        include: [{
          model: Authors
        }]
      });
      if (!bookData) {
        res.status(404).json({
          message: 'No book found with that Title'
        });
        return;
      }
      res.status(200).json(bookData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  });

  module.exports = router