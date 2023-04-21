import io from 'socket.io-client';
// import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../Store/MessageSlice/MessageSlice';
import { store } from '../Store/Store';
import { addDms } from '../Store/dmsSlice/dmsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentParam from '../Components/util/hookUser';

//internal

const ip = '43.205.187.250';
//const ip = 'localhost';
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
socket.on('recieveMessageOne', (obj) => {
	console.log('receive personal message', obj);

	store.dispatch(add(obj));
	store.dispatch(addDms([ obj ]));

	//console.log('room', room);
	const currentPathname = window.location.pathname;
	const roomname = currentPathname.split('/').pop();
	console.log(roomname, obj.roomName);
	if (roomname == obj.roomName) return;

	toast('new message in inbox', {
		autoClose: 100 // Auto close in 0.10 seconds (100 milliseconds)
	});
});

socket.on('recieveMessageboth', (obj) => {
	store.dispatch(add(obj));
	//store.dispatch(addDms([]));
});
socket.on('server_first_message_place', (obj) => {
	console.log('server first message', obj);
	store.dispatch(add(obj));
});
export default socket;
