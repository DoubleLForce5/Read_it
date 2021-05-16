const router = require('express').Router();
const authorsRoutes = require('./authorsRoutes');
const booksRoutes = require('./booksRoutes');
const myListRoutes = require('./myListRoutes');
const userRoutes = require('./userRoutes');
const meRoutes = require('./meRoutes');

router.use('/users', userRoutes);
// router.use('/myListRoutes', myListRoutes);
router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/me', meRoutes);

module.exports = router;