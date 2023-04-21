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
import CancelIcon from '@material-ui/icons/Cancel';
import Custom from './custom';

const CustomRoom = () => {
	const myRef = useRef(null);
	const inputRef = useRef(null);
	const [ text, setText ] = useState('');
	const [ searchText, setSearchText ] = useState('');

	const [ data, setData ] = useState([ { name: 'bazarSamiti' }, { name: 'pallavi colony' } ]);

	const [ vis, setvis ] = useState(false);
	//console.log(mess);
	const name = localStorage.getItem('name');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//console.log(room);

	const handleClick = (name) => {
		navigate('/custom/' + name);
	};

	const handleSubmit = () => {
		//console.log(room, text, name);
		// dispatch(add({ roomName: room, message: text, senderName: name }));
		Submit({ name: text }, '/customroom/create', 'post');
		window.location.reload();
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			//event.preventDefault(); // Prevent default form submission behavior
			inputRef.current.blur(); // Remove focus from input
			handleSubmit(); // Simulate button click
		}
	};

	const handlevis = () => {
		setvis(true);
		console.log(vis);
	};

	const handleSearch = (value) => {
		setSearchText(value);
	};

	useEffect(() => {
		//window.location.reload();
		if (localStorage.getItem('name') == null) navigate('/');

		socket.emit('user', { name: name });

		const fetchData = async () => {
			try {
				const data2 = await Submit({}, '/customroom/get', 'post');
				console.log('data2', data2.data.data);
				if (data2.data.data.length > 0) {
					setData(data2.data.data);
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchData();
		console.log('vis', vis);
	}, []);

	return (
		<React.Fragment>
			<MyNavbar />{' '}
			<Wrapper>
				<Button onClick={handlevis}> create room </Button>
				{vis && (
					<div className="createroom">
						<div onClick={() => setvis(false)}>
							<CancelIcon style={{ fontSize: 40 }} />
						</div>
						<h4>create you own room</h4>
						<input
							ref={inputRef}
							onKeyDown={handleKeyDown}
							value={text}
							onChange={(e) => setText(e.target.value)}
							required
						/>

						<Button onClick={handleSubmit}>send</Button>
						<div ref={myRef} />
					</div>
				)}
				<div className="cdiv">
					<div>
						{' '}
						<p>search for the room</p>
						<input
							ref={inputRef}
							onKeyDown={handleKeyDown}
							value={searchText}
							onChange={(e) => handleSearch(e.target.value)}
							required
						/>
					</div>

					{data.filter((e) => e.name.startsWith(searchText)).map((d) => {
						return (
							<p>
								{' '}
								<a className="aa" onClick={() => handleClick(d.name)}>
									{d.name}{' '}
								</a>
							</p>
						);
					})}
				</div>
			</Wrapper>
		</React.Fragment>
	);
};

export default CustomRoom;

const Wrapper = styled.div`
	margin-top: 100px;
	padding: 20px;
	.userInto {
		font-size: 40px;
		color: brown;
	}
	.mbtn {
		background-color: transparent;
		border: none;
	}

	.createroom {
		height: 300px;
		width: 300px;
		border: 1px solid grey;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 20px;
	}

	.cdiv {
		${'' /* background-color: grey; */} min-height: 300px;
		margin-top: 20px;
	}

	.aa {
		cursor: pointer;
		font-size: 20px;
	}
`;
