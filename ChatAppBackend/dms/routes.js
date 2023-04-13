const express = require('express');

const router = express.Router();

const dmsController = require('./dmsCtrl');

// token routes

router.route('/room/dms/post').post(dmsController.createDms);
router.route('/room/dms/get').post(dmsController.getDms);

router.route('/').get(dmsController.home);

module.exports = router;
