const router = require('express').Router();
const Controller = require('../controller/returnBook');

router.post('/book',  Controller.index);
module.exports = router;