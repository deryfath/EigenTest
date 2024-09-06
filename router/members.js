const router = require('express').Router();
const Controller = require('../controller/members');

router.get('/index',  Controller.index);
module.exports = router;