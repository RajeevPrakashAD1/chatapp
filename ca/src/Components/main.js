import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import socket from '../socket/socketconnection';
import { store } from '../Store/Store';
import { add, addMany } from '../Store/MessageSlice/MessageSlice';
// import { store } from './Store/Store';
import styled from 'styled-components';
import { Submit } from './../configApi/function';
import MyNavbar from '../navbar/navbar';
import { pink } from '@material-ui/core/colors';
import Button from './util/Button';

const Main = () => {
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState(true);

	const [ message, setMessage ] = useState([]);

	const mess = useSelector((s) => s.message.messageArray);
	const name = localStorage.getItem('name');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		socket.emit('sendMessage', { roomName: 'main', message: text, senderName: name });
		setText('');
		dispatch(add({ roomName: 'india', message: text, senderName: name }));
	};

	useEffect(() => {
		if (localStorage.getItem('name') == null) navigate('/');

		const url = 'http://localhost:8000/room/message/get';

		socket.emit('joinedMain', { roomName: 'main', name: localStorage.getItem('name') });
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await Submit({ roomName: 'main' }, '/room/message/get', 'post');
				//console.log('data = ', data.data.message);
				// const data =

				store.dispatch(addMany({ roomName: 'main', message: data.data.message }));
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
				<h3>
					{' '}
					Welcome <span class="userInto">{name}</span>{' '}
				</h3>
				{mess['main'] &&
					mess['main'].map(
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

export default Main;
const Wrapper = styled.div`
	padding: 20px;
	.userInto {
		font-size: 40px;
		color: brown;
	}
`;
