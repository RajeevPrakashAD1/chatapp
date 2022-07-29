import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	messageArray: {
		india: [ { message: 'Feel Free to chat and make friends' } ]
	}
};

export const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		add: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			if (state.messageArray[action.payload.roomId]) {
				state.messageArray[action.payload.roomId].push(action.payload);
			} else {
				state.messageArray[action.payload.roomId] = [ action.payload ];
			}
			// console.log(state);
			// // state.messageArray = [ ...state.messageArray ];
			// if(state.messageArray['india']){
			//     state.messageArray['india'] = state.messageArray['india'].push(action.payload.message)
			// }
		},
		addMany: (state, action) => {
			console.log('action = ', action);
			if (state.messageArray[action.payload.roomId]) {
				state.messageArray[action.payload.roomId] = action.payload.message;
			} else {
				state.messageArray[action.payload.roomId] = [ ...action.payload.message ];
			}
		}
	}
});

// Action creators are generated for each case reducer function
export const { add, addMany } = messageSlice.actions;

export default messageSlice.reducer;
