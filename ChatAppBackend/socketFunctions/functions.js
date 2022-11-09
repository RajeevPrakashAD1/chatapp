//const { io } = require('../server.js');
const axios = require('axios');
const Message = require('../messages/messageSchema');

async function Uploadmessage(obj) {
	try {
		const newMessage = await Message.create(obj);
		//console.log('succesffully uploaded');
	} catch (e) {
		console.log(e.message);
	}
}

async function addUser(name, id) {
	const url = 'http://localhost:8080/user/add';
	console.log('server rec user = ', name);
	const response = await axios.post(url, { userName: name, socket_id: id });
	// console.log('uploading message response = ', response);
}
//const axios = require('axios');

module.exports = { Uploadmessage, addUser };
