import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import addState from '../../Store/roomSlice/roomSlice';
import { Submit } from './../../configApi/function';
import { store } from './../../Store/Store';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const fetchdata = async () => {
	try {
		const res = await Submit({ type: 'state' }, '/room/get', 'post');
		store.dispatch(addState(res.data));
	} catch (err) {
		console.log('err in filter', err);
	}
};

const MyFilter = () => {
	const [ state, setState ] = useState([]);

	useEffect(() => {
		const res = fetchdata();
		console.log(res);
		setState(res.data);
	}, []);
	return (
		<React.Fragment>
			{state && state.map((state) => <p>{state}</p>)}
			Choose State
			<Select options={options} />
			Choose District
			<Select options={options} />
		</React.Fragment>
	);
};
export default MyFilter;
