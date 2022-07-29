//const { io } = require('../server.js');
const axios = require('axios');

async function message(obj) {
	const url = 'http://localhost:8080/room/message/post';
	console.log('server rec message = ', obj);
	const response = await axios.post(url, obj);
	// console.log('uploading message response = ', response);
}

async function addUser(name, id) {
	const url = 'http://localhost:8080/user/add';
	console.log('server rec user = ', name);
	const response = await axios.post(url, { userName: name, socket_id: id });
	// console.log('uploading message response = ', response);
}

module.exports = { message, addUser };
