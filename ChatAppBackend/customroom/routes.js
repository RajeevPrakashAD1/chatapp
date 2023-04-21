const express = require('express');

const router = express.Router();

const roomController = require('./cntrl');

// token routes

router.route('/customroom/create').post(roomController.createRoom);
router.route('/customroom/get').post(roomController.getRoom);

module.exports = router;
