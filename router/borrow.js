const router = require('express').Router();
const Controller = require('../controller/borrowBook');

router.post('/book',  Controller.index);
module.exports = router;