/*
 Store, Tüm reducer'ları içerisinde tutar ve istenilen sayfada kullanılmasını sağlar.
*/


import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
