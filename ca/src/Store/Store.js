import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './MessageSlice/MessageSlice';
import userReducer from './userSlice/userSlice';
export const store = configureStore({
	reducer: {
		message: messageReducer,
		user: userReducer
	}
});
