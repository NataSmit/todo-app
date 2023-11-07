import { createSlice } from "@reduxjs/toolkit";

const todos = []

console.log('todos', todos)
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo !== action.payload)
    }

  }
})

export const { addTodo, deleteTodo } = todoSlice.actions