import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
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

const Personal = () => {
	const myRef = useRef(null);
	const inputRef = useRef(null);
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState(true);

	const [ message, setMessage ] = useState([]);
	const [ room, setRoom ] = useState(useParams().room);
	const room2 = useParams().room;

	//console.log('room2', useParams().room);
	if (room != room2) {
		setRoom(room2);
	}

	const mess = useSelector((s) => s.message.messageArray[room]);
	//console.log(mess);
	const name = localStorage.getItem('name');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();

	//console.log(room);

	const handleSubmit = () => {
		//console.log(state.receiver, 'receiver');
		socket.emit('sendMessageOne', {
			roomName: room,
			message: text,
			senderName: name,
			receiverName: state.receiver,
			socketId: socket.id
		});
		setText('');
		// dispatch(add({ roomName: room, message: text, senderName: name }));
	};

	const handlenameClick = (cname) => {
		//console.log('clicked', cname);
		if (name == cname) return;
		var required_name = cname > name ? cname + name : name + cname;
		navigate('/personal/' + required_name, { state: { receiver: cname } });
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			//event.preventDefault(); // Prevent default form submission behavior
			inputRef.current.blur(); // Remove focus from input
			handleSubmit(); // Simulate button click
		}
	};
	useEffect(
		() => {
			//window.location.reload();
			if (localStorage.getItem('name') == null) navigate('/');

			const url = 'http://localhost:8000/room/message/get';

			socket.emit('joinedMain', { roomName: room, name: localStorage.getItem('name') });
			const fetchData = async () => {
				setLoading(true);
				try {
					const data = await Submit({ roomName: room }, '/room/message/get', 'post');
					//console.log('data = ', data);
					// const data =

					store.dispatch(addMany({ roomName: room, message: data.data.message }));
				} catch (error) {
					console.error(error.message);
				}
				setLoading(false);
			};

			fetchData();
			setRoom(room);
			//console.log('useffect called');
		},
		[ room ]
	);
	return (
		<React.Fragment>
			<MyNavbar />{' '}
			<Wrapper>
				<h6>
					{' '}
					<span class="userInto">
						{name} -> {state.receiver}
					</span>{' '}
				</h6>
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
										<button className="mbtn" onClick={() => handlenameClick(m.senderName)}>
											{m.senderName ? m.senderName : ' no name .... '}
										</button>
									</span>

									{'  ' + m.message}
								</p>
							)
					)}
				<input
					ref={inputRef}
					onKeyDown={handleKeyDown}
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				/>

				<Button onClick={handleSubmit}>send</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default Personal;

const Wrapper = styled.div`
	margin-top: 70px;
	padding: 20px;
	.userInto {
		font-size: 30px;
		color: brown;
	}
	.mbtn {
		background-color: transparent;
		border: none;
	}
`;
