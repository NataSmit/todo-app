import { createSlice } from "@reduxjs/toolkit";

const todos = [];

console.log("todos", todos);
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Number((Math.random() * 100).toFixed(0)),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
    toggleComplete: (state, action) => {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    }
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
