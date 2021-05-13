const router = require('express').Router();
const { Books, Authors, Users } = require('../../models');
const { restore } = require('../../models/books');

// Find all books 
router.get('/', async (req, res) => {
  try {
    booksData = await Books.findAll({
      attributes: [ 'book_id', 'title' ],
      include: [{ model: Authors, Users }]
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
    const bookData = await Books.findByPK(req.params.id,
      {
        include: [{ model: Authors, Users }]
      });
      if(!booksData){
        res.status(404).json({ message: 'No book found with that id'});
        return;
      }
      restore.status(200).json(bookData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

// Create new book 
router.post('/', async (req, res) => {
  Books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre
  })
  .then (book => res.json(book))
  .cath((err) => {
    console.log(err);
    res.status(400).json
  })
});

// Update existing book 
router.put('/:id', async (req, res) => {
  Books.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(book => res.json(book))
});

// Delete book
router.delete('/:id', async (req, res) => {
  try {
    const bookData= await Books.destroy({
      where: {
        id: req.params.id
      },
    })
    if(!bookData) {
      res.status(404).json({ message: 'No book with this id found '});
      return;
    }
    res.status(200).json(bookData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router