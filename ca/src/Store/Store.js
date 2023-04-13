import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './MessageSlice/MessageSlice';
import userReducer from './userSlice/userSlice';
import roomReducer from './roomSlice/roomSlice';
import dmsReducer from './dmsSlice/dmsSlice';
export const store = configureStore({
	reducer: {
		message: messageReducer,
		user: userReducer,
		room: roomReducer,
		dms: dmsReducer
	}
});
