const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
	roomName: {
		type: String,
		required: true
	},
	senderId: String,
	senderName: String,
	message: String,
	Date: Date
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;

// topic:room1,
// category:dkfkd,
// speakerCount:2
