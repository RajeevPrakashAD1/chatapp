import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dms: []
};

export const dmsSlice = createSlice({
	name: 'dms',
	initialState,
	reducers: {
		addDms: (state, action) => {
			//console.log('state-->', state.dms, 'action-->', action.payload);

			//state.dms = action.payload;
			console.log('action...', action.payload, state.dms);
			for (let i of action.payload) {
				if (state.dms.some((x) => x.senderName === i.senderName)) {
					const index = state.dms.findIndex((x) => x.senderName === i.senderName);
					if (index !== -1) {
						state.dms.splice(index, 1); // Remove the element
						state.dms.unshift(i); // Add the element to the front
					}
				} else {
					state.dms.unshift(i);
				}
			}
		}
	}
});

// Action creators are generated for each case reducer function
export const { addDms } = dmsSlice.actions;

export default dmsSlice.reducer;

// if (state.dms.includes(action.payload.senderName)) {
// 	const index = state.dms.indexOf(action.payload.senderName);
// 	if (index !== -1) {
// 		state.dms.splice(index, 1); // Remove the element
// 		state.dms.unshift(action.payload.senderName); // Add the element to the front
// 	}
// } else {
// 	state.dms.unshift(action.payload.senderName);
// }
