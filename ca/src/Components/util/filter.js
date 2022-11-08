import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { addDistrict, addState } from '../../Store/roomSlice/roomSlice';
import { Submit } from './../../configApi/function';
import { store } from './../../Store/Store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const MyFilter = () => {
	// const [ state, setState ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const state = useSelector((s) => s.room.stateData.state);
	const district = useSelector((s) => s.room.stateData.district);
	//const [ selectedOption, setSelectedOption ] = useState(null);
	//console.log('selected option', selectedOption);

	//console.log('states...', state);
	const navigate = useNavigate();
	var options = [];
	for (let i of state) {
		let rv = { value: i, label: i };
		options.push(rv);
	}
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

	const fetchDistrict = async () => {
		try {
			const data = await Submit({ type: 'district', state: selectState }, '/room/get', 'post');
			console.log('fetchdata', data.data.data);

			store.dispatch(addDistrict(data.data.data));
		} catch (err) {
			console.log('err in filter', err);
		}
	};
	const handleClick = () => {
		navigate('/custom/' + selectValue);
	};
	useEffect(
		() => {
			const fetchdata = async () => {
				setLoading(true);
				try {
					const data = await Submit({ type: 'state' }, '/room/get', 'post');
					// console.log('fetchdata', data.data.data);

					store.dispatch(addState(data.data.data));
				} catch (err) {
					console.log('err in filter', err);
				}
				setLoading(false);
			};
			fetchdata();
			fetchDistrict();
		},
		[ selectState ]
	);
	return (
		<React.Fragment>
			<Mdiv>
				{/* {state && state.map((state) => <p>{state}</p>)} */}
				Choose State
				{/* <Select options={options} onChange={setSelectedOption} /> */}
				<select onChange={onChange} className="form-select optionSelect">
					<option className="optionSelect" defaultValue disabled>
						Select Location
					</option>
					{state.map((s) => (
						<option className="optionSelect" value={s}>
							{s}
						</option>
					))}
				</select>
				Choose District
				<select onChange={onChange2} className="form-select optionSelect">
					{district.map((s) => (
						<option className="optionSelect" value={s}>
							{s}
						</option>
					))}
				</select>
				{<p>{'choosed location  ' + selectValue}</p>}
				{/* Choose District */}
				{/* <Select options={options} /> */}
				<Button onClick={handleClick}>Go there </Button>
			</Mdiv>
		</React.Fragment>
	);
};
export default MyFilter;

const Mdiv = styled.div`
	width: 300px;
	padding: 10px;
	${'' /* background-color: red; */};
	.optionSelect {
		font-size: 22px;
	}
`;
