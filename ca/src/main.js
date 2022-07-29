import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import socket from './socket/socketconnection';
import { store } from './Store/Store';
import { add, addMany } from './Store/MessageSlice/MessageSlice';
// import { store } from './Store/Store';
const Main = () => {
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState(true);

	const [ message, setMessage ] = useState([]);

	const mess = useSelector((s) => s.message.messageArray);
	const name = useSelector((s) => s.user.user);
	const dispatch = useDispatch();
	// if (mess['india']) {
	// 	console.log('setmessage called');
	// 	setMessage(mess['india']);
	// }
	// setMessage([ mess['india'] ]);

	// const trigger = () => {
	// 	if (mess['india']) {
	// 		console.log('setmessage called');
	// 		setMessage(mess['india']);
	// 	}
	// console.log('m = ', mess);
	// };
	const handleSubmit = () => {
		socket.emit('sendMessage', { roomId: 'india', roomName: 'india', message: text, senderName: name });
		setText('');
		// dispatch(add({ roomId: 'india', message: text }));
	};
	useEffect(() => {
		const url = 'http://localhost:8080/room/message/get';

		socket.emit('joinedIndia', 'india');
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await axios.get(url, { params: { roomName: 'india' } });
				console.log('data = ', data.data.message);
				// const data =

				store.dispatch(addMany({ roomId: 'india', message: data.data.message }));
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};

		fetchData();
	}, []);
	return (
		<React.Fragment>
			{' '}
			<div> Welcome</div>
			{mess['india'].map((m, i) => (
				<p key={i}>
					<span style={{ color: 'blue' }}>{m.senderName ? m.senderName : 'no name ....  '}</span>

					{m.message}
				</p>
			))}
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={handleSubmit}>send</button>
			<Link to="/custom/bihar"> Bihar</Link>
			<Link to="/custom/delhi"> delhi</Link>
			<Link to="/custom/mumbai"> mumbai</Link>
		</React.Fragment>
	);
};

export default Main;
