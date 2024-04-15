import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from '../helpers/storage';

export const USER_DATA = 'userData';

interface UserState {
	jwt: string | null;
}

// Определите начальное состояние с использованием этого типа
const initialState: UserState = {
	jwt: loadState<UserState>(USER_DATA)?.jwt ?? null,
};

export const counterSlice = createSlice({
	name: 'user',
	// `createSlice` будет выводить тип состояния из аргумента `initialState`
	initialState,
	reducers: {
		addJwt: (state, action: PayloadAction<string>) => {
			state.jwt = action.payload;
		},
		logout: (state) => {
			state.jwt = null;
		},
	},
});

export const { addJwt, logout } = counterSlice.actions;

export default counterSlice.reducer;
