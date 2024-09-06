const router = require('express').Router();
const borrowRoutes = require('./borrow');
const returnRoutes = require('./return');
const booksRoutes = require('./books');
const membersRoutes = require('./members');

router.use('/borrow', borrowRoutes);
router.use('/return', returnRoutes);
router.use('/books', booksRoutes);
router.use('/members', membersRoutes);

module.exports = router;


