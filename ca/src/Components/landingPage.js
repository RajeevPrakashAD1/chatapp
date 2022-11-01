import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser } from '../Store/userSlice/userSlice';
import { useDispatch } from 'react-redux';
import { Submit } from '../configApi/function';
import styled from 'styled-components';
import Button from './util/Button';

const LandingPage = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [ name, setName ] = useState('');
	const dispatch = useDispatch();
	const handleClick = async (event) => {
		event.preventDefault();
		//console.log('clicked', name);

		//dispatch(addUser({ name: name }));
		const res = await Submit({ name: name }, '/user/add', 'post');
		//console.log(res);
		if (res == 'error') {
			alert('plz try again with different name');
			return;
		} else {
			const pn = state && state.pv != '' ? state.pv : localStorage.getItem('name');
			//console.log('pv', pn);
			//console.log('pn', pn);
			const res = await Submit({ name: pn }, '/user/remove', 'post');
			localStorage.setItem('name', name);
			//console.log('delete', res);
			navigate('/main');
		}
	};
	useEffect(() => {
		//console.log(localStorage.getItem('name') != null);
		if (localStorage.getItem('name') != null) {
			//dispatch(addUser({ name: localStorage.getItem('name') }));
			navigate('/main');
		}
	});
	return (
		<React.Fragment>
			<PDiv>
				<form className="form">
					<h1>Choose Any Name To Start Chatting</h1>
					<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Kush_123" />
					<Button onClick={handleClick}>Start Chatting</Button>
				</form>
			</PDiv>
		</React.Fragment>
	);
};

export default LandingPage;

const PDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 20px;

	height: 100vh;

	.form {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
	.form > * {
		margin: 20px;
	}

	.form input {
		width: !important;
	}
`;
