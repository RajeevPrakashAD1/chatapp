const mongoose = require('mongoose');

const customRoomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}
});

module.exports = mongoose.model('CustomRoom', customRoomSchema);
