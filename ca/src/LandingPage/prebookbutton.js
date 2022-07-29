import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CountdownTimer from '../Components/CountdownTimer/CountdownTimer';
const timeremainings = new Date(2021, 8, 18, 12, 33, 30);
const timeremaining = timeremainings.getTime();
console.log(timeremaining, ' ab s', timeremainings);
const PrebookButton2 = ({ timer }) => {
	return (
		<React.Fragment>
			<Link to="/preorder">
				<PreBookButton> PRE - BOOK NOW </PreBookButton> {' '}
			</Link>{' '}
			{timer == 't' ? null : <CountdownTimer countdownTimestampMs={timeremaining} />} {' '}
		</React.Fragment>
	);
};

export default PrebookButton2;

const PreBookButton = styled.button`
	background-color: #425c56;
	border-color: #425c56;
	padding: 5px 15px;
	color: white;
	border: none;
	border-radius: 5px;
	margin-top: 30px;

	&: hover {
		background-color: #35683e !important;
		border-color: #35683e;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;
