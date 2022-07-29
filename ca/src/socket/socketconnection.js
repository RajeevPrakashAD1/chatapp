import io from 'socket.io-client';
// import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../Store/MessageSlice/MessageSlice';
import { store } from '../Store/Store';
//internal

const ip = '172.16.82.227';
const socket = io('http://172.16.82.227:8000');

socket.on('connect', () => {
	console.log('get connected');
});
socket.on('joinedsuccessful', (m) => {
	console.log(m);
});
socket.on('alreadyInUser', (m) => {
	console.log(m);
});

socket.on('recieveMessage', (obj) => {
	console.log(obj);
	store.dispatch(add(obj));
});
socket.on('server_first_message_place', (obj) => {
	console.log('server first message', obj);
	store.dispatch(add(obj));
});
export default socket;
