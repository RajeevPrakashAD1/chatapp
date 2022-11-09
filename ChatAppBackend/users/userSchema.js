const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, dropDups: true },

	profile_pic: String,
	role: String,
	socket_id: String,
	roomId: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
