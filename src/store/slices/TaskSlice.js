import { createSlice } from "@reduxjs/toolkit";
import { saveTaskToLS, getTodosFromLS, saveChangedTaskToLS } from '../../utils/utils'

const todos = getTodosFromLS();

console.log("todos", todos);
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos,
    todoInfoBoxVisible: false,
    selectedTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Number((Math.random() * 100).toFixed(0)),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTaskToLS(newTodo)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = getTodosFromLS()
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    handleTodoInfoBoxClick: (state, action) => {
      state.todos = getTodosFromLS()
      state.todoInfoBoxVisible = !state.todoInfoBoxVisible;
      state.selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      //state.selectedTodo = selectedTodo;
     
    },
    changeTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      //console.log("selectedTodo", selectedTodo);
      selectedTodo.title = action.payload.title;
      selectedTodo.completed = action.payload.completed;
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    getTodosFromLS: (state, action) => {
      state.todos = getTodosFromLS()
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  handleTodoInfoBoxClick,
  changeTodo,
} = todoSlice.actions;
