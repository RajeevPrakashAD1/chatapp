//const { io } = require('../server.js');
const axios = require('axios');
const Dms = require('../dms/dmsschema');
const Message = require('../messages/messageSchema');
//const url2 = "localhost";
const url2 = '192.168.43.116';

async function Uploadmessage(obj) {
	try {
		obj['MDate'] = new Date();
		const newMessage = await Message.create(obj);
		//console.log('succesffully uploaded');
	} catch (e) {
		console.log(e.message);
	}
}
async function Uploaddms(obj) {
	var query = { senderName: obj.senderName, recieverName: obj.recieverName },
		update = { MDate: new Date(), senderName: obj.senderName, recieverName: obj.recieverName },
		options = { upsert: true, new: true, setDefaultsOnInsert: true };

	// Find the document
	Dms.findOneAndUpdate(query, update, options, function(error, result) {
		if (error) return;
		console.log('succesffully dmed');
		// do something with the document
	});
	// try {
	// 	obj['MDate'] = new Date();
	// 	const newMessage = await Dms.create(obj);
	// 	//console.log('succesffully uploaded');
	// } catch (e) {
	// 	console.log(e.message);
	// }
}

async function addUser(name, id) {
	const url = 'http://localhost:8080/user/add';
	console.log('server rec user = ', name);
	const response = await axios.post(url, { userName: name, socket_id: id });
	// console.log('uploading message response = ', response);
}
//const axios = require('axios');

module.exports = { Uploadmessage, addUser, Uploaddms };
