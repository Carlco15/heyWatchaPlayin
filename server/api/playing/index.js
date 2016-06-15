'use strict';

var express = require('express');
var controller = require('./playing.controller');

var router = express.Router();

router.get   ('/:userid/playing/',        controller.get);
router.post  ('/:userid/playing/:gameid', controller.addGame);
router.delete('/:userid/playing/:gameid', controller.removeGame);
router.delete('/:userid/playing/',        controller.removeAllGames);

module.exports = router;
