const router = require('express').Router();
const Controller = require('../controller/books');

router.get('/index',  Controller.index);
module.exports = router;