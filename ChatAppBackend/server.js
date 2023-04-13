const express = require('express');
const app = express();
const http = require('http');
const axios = require('axios');
const mongoose = require('mongoose');
const server = http.createServer(app);
const { Uploadmessage, addUser, Uploaddms } = require('./socketFunctions/functions');
const { addUserInside, getUserInside } = require('./users/userCtrl');

const io = require('socket.io')(server, {
	cors: {
		origin: '*'
	}
});

io.on('connection', (socket) => {
	console.log('a user connected', socket.id);
	// addUser()

	socket.on('user', ({ name: name }) => {
		console.log('user inside');
		addUserInside(socket.id, name);
	});
	socket.on('joinedMain', ({ roomName, name }) => {
		console.log('join Main room request', roomName, name);
		addUserInside(socket.id, name);
		socket.join(roomName);

		// io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomName).emit('joinedsuccessful', { roomName: roomName, name: name });
	});
	socket.on('joinedCustom', ({ roomName, name }) => {
		console.log('join cusotom room request');
		socket.join(roomName);
		addUserInside(socket.id, name);
		// addUserInside(socket.id, name.name);
		io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomName).emit('joinedsuccessful', `${socket.id} joined successfully in room_id = ${roomName}`);
	});
	socket.on('sendMessage', (obj) => {
		Uploadmessage(obj);
		io.to(obj.roomName).emit('recieveMessage', obj);
	});
	socket.on('sendMessageOne', async (obj) => {
		//console.log('pmr', obj);
		Uploadmessage(obj);
		Uploaddms({ senderName: obj.senderName, recieverName: obj.receiverName });
		const user = await getUserInside(obj.receiverName);

		//console.log('user to mess', user);

		io.to(socket.id).emit('recieveMessageboth', obj);
		//const socket2 = io.sockets.connected[user.socket_id];

		socket.to(user[0].socket_id).emit('recieveMessageOne', obj);
		//io.to(user.socket_id).emit('recieveMessageOne');
	});

	socket.on('first_message_place', (obj) => {
		socket.emit('server_first_message_place', obj);
	});

	socket.on('disconnect', () => {
		// socket.emit("disconnected",socket.id);
		console.log('user disconnected ', socket.id);
	});
});

server.listen(8081, () => {
	console.log('socket listening on = *:8081');
});

module.exports = { io };
