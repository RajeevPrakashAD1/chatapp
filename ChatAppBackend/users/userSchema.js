const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userName: String,

	profile_pic: String,
	role: String,
	socket_id: String,
	roomId: String,
	userId: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
