const express = require('express');

const router = express.Router();
const userCtrl = require('./userCtrl');

// token routes
router.get('/user/get', userCtrl.getUser);
router.route('/user/remove').post(userCtrl.removeUser);
router.post('/user/add', userCtrl.addUser);
router.post('/user/updateuser', userCtrl.updateUser);
module.exports = router;
