import React, { useEffect, useState, useRef } from 'react';
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
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Custom = () => {
	//console.log('Custom');
	const myRef = useRef(null);
	const inputRef = useRef(null);
	const [ text, setText ] = useState('');
	const [ loading, setLoading ] = useState(true);

	const [ message, setMessage ] = useState([]);
	const [ room, setRoom ] = useState(useParams().room);
	const [ vis, setvis ] = useState(0);
	const room2 = useParams().room;
	//console.log('usepara,', useParams());
	//console.log('room2', useParams().room);
	if (room != room2) {
		setRoom(room2);
	}

	const mess = useSelector((s) => s.message.messageArray[room]);
	//console.log(mess);
	const name = localStorage.getItem('name');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//console.log(room);

	const handleSubmit = () => {
		//console.log(room, text, name);
		socket.emit('sendMessage', { roomName: room, message: text, senderName: name });

		setText('');
		// dispatch(add({ roomName: room, message: text, senderName: name }));
	};

	const handlenameClick = (cname) => {
		//console.log('clicked', cname);
		if (name == cname) return;
		var required_name = cname > name ? cname + name : name + cname;
		navigate('/personal/' + required_name, { state: { receiver: cname } });
		//navigate('/', { state: { pv: previous_name } })   ;
	};
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			//event.preventDefault(); // Prevent default form submission behavior
			inputRef.current.blur(); // Remove focus from input
			handleSubmit(); // Simulate button click
		}
	};
	const scrollRef = useRef(null);

	const scrollToBottom = () => {
		console.log('called');
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	};

	useEffect(
		() => {
			//window.location.reload();
			if (localStorage.getItem('name') == null) navigate('/');

			const url = 'http://localhost:8000/room/message/get';

			socket.emit('user', { name: name });

			socket.emit('joinedMain', { roomName: room, name: localStorage.getItem('name') });

			const fetchData = async () => {
				setLoading(true);
				try {
					const data = await Submit({ roomName: room }, '/room/message/get', 'post');
					console.log('data', data);
					store.dispatch(addMany({ roomName: room, message: data.data.message }));
				} catch (error) {
					console.error(error.message);
				}
				setLoading(false);
			};

			fetchData();
			setRoom(room);
		},
		[ room ]
	);
	return (
		<React.Fragment>
			<MyNavbar />{' '}
			<Wrapper>
				<ArrowWrapper>
					<ArrowDownwardIcon onClick={scrollToBottom} />
					<div ref={scrollRef} />
				</ArrowWrapper>
				<h1>{room}</h1>
				<h3>
					{' '}
					Welcome <span class="userInto">{name}</span>{' '}
				</h3>
				{mess &&
					mess.map(
						(m, i) =>
							m.senderName == 'Admin' ? (
								<div>
									<div
										key={i}
										style={{
											background: 'pink',
											display: 'inline-block',
											paddingRight: '30px',
											paddingLeft: '10px',
											margin: '10px'
										}}
									>
										<span style={{ color: 'red', background: 'pink' }}>
											{m.senderName ? m.senderName : '  no name ....  '}
										</span>

										{'  ' + m.message}
									</div>
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
				<div ref={myRef} />
			</Wrapper>
		</React.Fragment>
	);
};

export default Custom;

const Wrapper = styled.div`
	margin-top: 50px;
	padding: 20px;
	.userInto {
		font-size: 40px;
		color: brown;
	}
	.mbtn {
		background-color: transparent;
		border: none;
	}
`;

const ArrowWrapper = styled.div`
	position: fixed;
	top: 120px;
	right: 20px;
	cursor: pointer;

	svg {
		font-size: 40px;
		color: gray;
	}
`;
