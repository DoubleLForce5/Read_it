const router = require('express').Router();
const { Books, Authors, Users, My_List } = require('../../models');

// Find all books 
router.get('/', async (req, res) => {
  try {
    booksData = await Books.findAll({
      attributes: ['book_id', 'title'],
      include: [{
        model: Authors
      }]
    });
    res.status(200).json(booksData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// Find book by id 
router.get('/:id', async (req, res) => {
  try {
    const bookData = await Books.findByPk(req.params.id, {
      include: [{
        model: Authors
      }]
    });
    if (!bookData) {
      res.status(404).json({
        message: 'No book found with that id'
      });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

// // Find book by title 
// router.get('/:title', async (req, res) => {
//   try {
//     const bookData = await Books.findOne({ where: { title: req.params.id }}, {
//       include: [{
//         model: Authors
//       }]
//     });
//     if (!bookData) {
//       res.status(404).json({
//         message: 'No book found with that Title'
//       });
//       return;
//     }
//     res.status(200).json(bookData);
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err)
//   }
// });

// Create new book 
router.post('/', async (req, res) => {
  Books.create({
      isbn: req.body.isbn,
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      author_id: req.body.author_id
    })
    .then(book => res.json(book))
    .catch((err) => {
      console.log(err);
      res.status(400).json
    })
});

// Update existing book 
router.put('/:id', async (req, res) => {
  Books.update(req.body, {
      where: {
        book_id: req.params.id
      },
    })
    .then(book => res.json(book))
});

// Delete book
router.delete('/:id', async (req, res) => {
  try {
    const bookData = await Books.destroy({
      where: {
        book_id: req.params.id
      },
    })
    if (!bookData) {
      res.status(404).json({
        message: 'No book with this id found '
      });
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router