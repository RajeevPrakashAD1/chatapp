import styled from 'styled-components';

const Button = styled.button`
	background-color: black;
	color: white;
	font-size: 20px;
	padding: 10px 60px;
	border-radius: 5px;
	border: 1px solid white;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
	margin: 10px 0px;
	cursor: pointer;
	&:hover {
		color: black;
		background-color: white;
	}
`;

export default Button;
