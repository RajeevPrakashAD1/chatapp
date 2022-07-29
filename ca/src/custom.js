import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import socket from './socket/socketconnection';
import { store } from './Store/Store';
import { add, addMany } from './Store/MessageSlice/MessageSlice';
const Custom = (props) => {
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState('');
	const [ message, setMessage ] = useState([]);
	const [ room, setroom ] = useState(props.match.params.room);
	console.log('r=', room);

	const mess = useSelector((s) => s.message.messageArray);

	const dispatch = useDispatch();

	const handleSubmit = () => {
		console.log('handleSubmit callwd');
		socket.emit('sendMessage', { roomId: room, roomName: room, senderId: '1', message: text });
		setText('');

		// dispatch(add({ roomId: 'india', message: text }));
	};
	useEffect(() => {
		socket.emit('joinedCustom', room);
		const url = 'http://localhost:8080/room/message/get';
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await axios.get(url, { params: { roomName: room } });
				console.log('data = ', data.data.message);

				store.dispatch(addMany({ roomId: room, message: data.data.message }));
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};

		fetchData();
	}, []);
	return (
		<React.Fragment>
			<div> Welcome to {room}</div>
			{mess.hasOwnProperty(room) ? (
				mess[room].map((m, i) => (
					<p key={i}>
						<span style={{ color: 'blue' }}>{m.senderName ? m.senderName + '....' : 'no name ....  '}</span>

						{m.message}
					</p>
				))
			) : (
				<h1>Welcome</h1>
			)}
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={handleSubmit}>send</button>
			<a href="/custom/bihar"> Bihar</a>
			<a href="/custom/delhi"> delhi</a>
			<a href="/custom/mumbai"> mumbai</a>
		</React.Fragment>
	);
};

export default Custom;
