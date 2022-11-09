const express = require('express');

const router = express.Router();

const roomController = require('./roomCtrl');

// token routes

router.route('/room/create').post(roomController.createRoom);
router.route('/room/get').post(roomController.getRoom);

router.route('/').get(roomController.home);

module.exports = router;
