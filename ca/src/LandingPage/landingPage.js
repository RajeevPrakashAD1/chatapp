import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './landingPage.css';
import style from './landingpage.module.css';
import Slider from 'react-slick';
import socket from '../socket/socketconnection';
import { Link } from 'react-router-dom';
import PreBookButton from './prebookbutton';
import ReactPlayer from 'react-player';
import { store } from '../Store/Store';
import { addUser } from '../Store/userSlice/userSlice';
//sdtyled components
import { S2div, H1, P1, S5div, P2, Wrapper7, Wrapper11, Wrapper8, Mynav } from './styledcomponent';

const LandingPage = () => {
	const [ name, setName ] = useState('');
	return (
		<React.Fragment>
			{' '}
			<h3>plz provide any name </h3>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<Link to="/main" onClick={() => socket.emit('user', name)}>
				{' '}
				continue without login
			</Link>
		</React.Fragment>
	);
};

export default LandingPage;
