const express = require('express');

const router = express.Router();

const messageController = require('./messageCtrl');

// token routes

router.route('/room/message/post').post(messageController.createMessage);
router.route('/room/message/get').post(messageController.getMessage);

router.route('/').get(messageController.home);

module.exports = router;
