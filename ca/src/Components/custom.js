import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import socket from '../socket/socketconnection';
import { store } from '../Store/Store';
import { add, addMany } from '../Store/MessageSlice/MessageSlice';
// import { store } from './Store/Store';
import styled from 'styled-components';
import { Submit } from './../configApi/function';
import MyNavbar from '../navbar/navbar';
import { pink } from '@material-ui/core/colors';
import Button from './util/Button';
import { roomSlice } from '../Store/roomSlice/roomSlice';

const Custom = () => {
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState(true);

	const [ message, setMessage ] = useState([]);
	const { room } = useParams();

	const mess = useSelector((s) => s.message.messageArray[room]);
	//console.log(mess);
	const name = localStorage.getItem('name');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//console.log(room);

	const handleSubmit = () => {
		socket.emit('sendMessage', { roomName: room, message: text, senderName: name });
		setText('');
		// dispatch(add({ roomName: room, message: text, senderName: name }));
	};

	useEffect(() => {
		if (localStorage.getItem('name') == null) navigate('/');

		const url = 'http://localhost:8000/room/message/get';

		socket.emit('joinedMain', { roomName: room, name: localStorage.getItem('name') });
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await Submit({ roomName: room }, '/room/message/get', 'post');
				console.log('data = ', data);
				// const data =

				store.dispatch(addMany({ roomName: room, message: data.data.message }));
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};

		fetchData();
	}, []);
	return (
		<React.Fragment>
			<MyNavbar />{' '}
			<Wrapper>
				<h1>{room}</h1>
				<h3>
					{' '}
					Welcome <span class="userInto">{name}</span>{' '}
				</h3>
				{mess &&
					mess.map(
						(m, i) =>
							m.senderName == 'Admin' ? (
								<div
									key={i}
									style={{
										background: 'pink',
										display: 'inline-block',
										paddingRight: '30px',
										paddingLeft: '10px'
									}}
								>
									<span style={{ color: 'red', background: 'pink' }}>
										{m.senderName ? m.senderName : '  no name ....  '}
									</span>

									{'  ' + m.message}
								</div>
							) : (
								<p key={i}>
									<span style={{ color: 'blue' }}>
										{m.senderName ? m.senderName : '  no name ....  '}
									</span>

									{'  ' + m.message}
								</p>
							)
					)}
				<input value={text} onChange={(e) => setText(e.target.value)} required />

				<Button onClick={handleSubmit}>send</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default Custom;

const Wrapper = styled.div`
	padding: 20px;
	.userInto {
		font-size: 40px;
		color: brown;
	}
`;
