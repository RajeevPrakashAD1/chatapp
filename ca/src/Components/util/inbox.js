import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { addDistrict, addState } from '../../Store/roomSlice/roomSlice';
import { Submit } from './../../configApi/function';
import { store } from './../../Store/Store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { addDms } from '../../Store/dmsSlice/dmsSlice';

const MyInbox = () => {
	const [ loading, setLoading ] = useState(true);

	const district = useSelector((s) => s.room.stateData.district);

	const navigate = useNavigate();
	const name = localStorage.getItem('name');
	var options = [];

	const [ selectState, setSelectState ] = React.useState('');
	const [ selectValue, setSelectValue ] = React.useState('');

	const onChange = (event) => {
		const value = event.target.value;
		setSelectState(value);
		setSelectValue(value);
		// fetchDistrict();
	};
	const onChange2 = (event) => {
		const value = event.target.value;
		setSelectValue(value);
		// fetchDistrict();
	};

	const dms = useSelector((s) => s.dms.dms);
	// console.log('dms', dms);

	const handlenameClick = (cname) => {
		console.log('clicked', cname);
		if (name == cname) return;
		var required_name = cname > name ? cname + name : name + cname;
		navigate('/personal/' + required_name, { state: { receiver: cname } });
		//navigate('/', { state: { pv: previous_name } });
	};
	useEffect(() => {
		console.log('dms useeffect called');
		const fetchdata = async () => {
			setLoading(true);
			try {
				const data = await Submit({ receiver: name }, '/room/dms/get', 'post');
				// console.log('fetchdata', data.data.data);
				console.log('data', data.data);
				store.dispatch(addDms(data.data.dms.reverse()));
			} catch (err) {
				console.log('err in filter', err);
			}
			setLoading(false);
		};
		fetchdata();
	}, []);
	return (
		<React.Fragment>
			<Mdiv>
				{/* {console.log('-->dms', dms)} */}
				{dms &&
					dms.map((e) => {
						return (
							<button onClick={() => handlenameClick(e.senderName)}>
								{e.senderName ? e.senderName : ' no name .... '}
							</button>
						);
					})}
			</Mdiv>
		</React.Fragment>
	);
};
export default MyInbox;

const Mdiv = styled.div`
	width: 300px;
	padding: 10px;
	${'' /* margin-top: 30px; */} background-color: red;
	.optionSelect {
		font-size: 22px;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;

	button {
		border: 1px solid black;
		background-color: grey;
		margin: 5px;
	}
`;
