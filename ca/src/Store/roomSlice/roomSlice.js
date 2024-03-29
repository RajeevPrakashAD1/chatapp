import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	stateData: {
		state: [],
		district: []
	}
};

export const roomSlice = createSlice({
	name: 'stateData',
	initialState,
	reducers: {
		addState: (stateData, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			stateData.stateData.state = action.payload;
			// console.log(state);
			// // state.messageArray = [ ...state.messageArray ];
			// if(state.messageArray['india']){
			//     state.messageArray['india'] = state.messageArray['india'].push(action.payload.message)
			// }
		},
		addDistrict: (stateData, action) => {
			stateData.stateData.district = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { addState, addDistrict } = roomSlice.actions;

export default roomSlice.reducer;
