const express = require('express');
const app = express();
const http = require('http');
const axios = require('axios');
const mongoose = require('mongoose');
const server = http.createServer(app);
const { Uploadmessage, addUser } = require('./socketFunctions/functions');

const io = require('socket.io')(server, {
	cors: {
		origin: '*'
	}
});

io.on('connection', (socket) => {
	console.log('a user connected', socket.id);

	// socket.on('user', (name) => {
	// 	addUser(name, socket.id);
	// });
	socket.on('joinedMain', ({ roomName, name }) => {
		console.log('join Main room request', roomName, name);
		socket.join(roomName);
		// io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomName).emit('joinedsuccessful', { roomName: roomName, name: name });
	});
	socket.on('joinedCustom', (roomName) => {
		console.log('join cusotom room request');
		socket.join(roomName);
		io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomName).emit('joinedsuccessful', `${socket.id} joined successfully in room_id = ${roomName}`);
	});
	socket.on('sendMessage', (obj) => {
		Uploadmessage(obj);
		io.to(obj.roomName).emit('recieveMessage', obj);
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
