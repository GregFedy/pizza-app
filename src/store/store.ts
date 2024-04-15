import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { USER_DATA } from './userSlice';
import { saveState } from '../helpers/storage';

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

store.subscribe(() => {
	saveState(
		{
			jwt: store.getState().users.jwt,
		},
		USER_DATA,
	);
});

// Получаем типы `RootState` и `AppDispatch` из самого store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
