const express = require('express');
const app = express();
const http = require('http');
const axios = require('axios');
const mongoose = require('mongoose');
const server = http.createServer(app);
const { message, addUser } = require('./socketFunctions/functions');

const io = require('socket.io')(server, {
	cors: {
		origin: '*'
	}
});

io.on('connection', (socket) => {
	console.log('a user connected', socket.id);

	socket.on('user', (name) => {
		addUser(name, socket.id);
	});
	socket.on('joinedIndia', (roomId) => {
		console.log('join room request');
		socket.join(roomId);
		io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomId).emit('joinedsuccessful', `${socket.id} joined successfully in room_id = ${roomId}`);
	});
	socket.on('joinedCustom', (roomId) => {
		console.log('join cusotom room request');
		socket.join(roomId);
		io.to(socket.id).emit('alreadyInUser', 'some anount of user in room');
		io.to(roomId).emit('joinedsuccessful', `${socket.id} joined successfully in room_id = ${roomId}`);
	});
	socket.on('sendMessage', (obj) => {
		message(obj);
		io.to(obj.roomId).emit('recieveMessage', obj);
	});
	socket.on('first_message_place', (obj) => {
		socket.emit('server_first_message_place', obj);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected ', socket.id);
	});
});

server.listen(8000, () => {
	console.log('listening on = *:8000');
});

module.exports = { io };
