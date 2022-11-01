import io from 'socket.io-client';
// import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../Store/MessageSlice/MessageSlice';
import { store } from '../Store/Store';
//internal

const ip = '192.168.56.1';
const cs = 'http://' + ip + ':8081';
console.log(cs);
const socket = io(cs);

socket.on('connect', () => {
	console.log('get connected');
});
socket.on('joinedsuccessful', (m) => {
	console.log(m);
	store.dispatch(add({ roomName: m.roomName, senderName: 'Admin', message: m.name + ' has joined the room' }));
});
socket.on('alreadyInUser', (m) => {
	console.log(m);
});

socket.on('recieveMessage', (obj) => {
	//console.log(obj);
	store.dispatch(add(obj));
});
socket.on('server_first_message_place', (obj) => {
	console.log('server first message', obj);
	store.dispatch(add(obj));
});
export default socket;
