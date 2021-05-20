const router = require('express').Router();
const authorsRoutes = require('./authorsRoutes');
const booksRoutes = require('./booksRoutes');
const myListRoutes = require('./myListRoutes');
const userRoutes = require('./userRoutes');
const meRoutes = require('./meRoutes');
const titleRoutes = require('./titleRoutes');

router.use('/users', userRoutes);
router.use('/myList', myListRoutes);
router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/me', meRoutes);
router.use('/title', titleRoutes);

module.exports = router;