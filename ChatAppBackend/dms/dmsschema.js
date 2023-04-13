const mongoose = require('mongoose');

const DmsSchema = new mongoose.Schema({
	senderName: String,
	recieverName: String,
	MDate: Date
});

const Dms = mongoose.model('Dms', DmsSchema);

module.exports = Dms;

// topic:room1,
// category:dkfkd,
// speakerCount:2
