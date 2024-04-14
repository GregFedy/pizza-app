import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {},
});

// Получаем типы `RootState` и `AppDispatch` из самого store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
