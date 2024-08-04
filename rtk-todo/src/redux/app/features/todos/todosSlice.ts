import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodosState {
    todos: ITodo[];
}

const initialState : ITodosState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
           state.todos.push({
            id: Date.now(),
            title: action.payload,
            completed: false
           })
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggle: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        }
    }
});


export const {add, remove, toggle} = todosSlice.actions;
export default todosSlice.reducer;