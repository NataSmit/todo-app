import { createSlice } from "@reduxjs/toolkit";
import { getTodosFromLS, saveTodosToLS } from "../../utils/utils";

const todos = getTodosFromLS();

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
        comment: "",
        dueDate: "",
      };
      state.todos.push(newTodo);
      saveTodosToLS(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.todoInfoBoxVisible = false;
      saveTodosToLS(state.todos);
    },
    toggleComplete: (state, action) => {
      if (state.selectedTodo) {
        state.selectedTodo.completed = !state.selectedTodo.completed;
      }

      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });

      saveTodosToLS(state.todos);
    },
    handleTodoInfoBoxClick: (state, action) => {
      if (!state.todoInfoBoxVisible) {
        state.todoInfoBoxVisible = true;
        state.selectedTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
      } else {
        if (state.selectedTodo.id === action.payload.id) {
          state.todoInfoBoxVisible = false;
        } else {
          state.selectedTodo = state.todos.find(
            (todo) => todo.id === action.payload.id
          );
        }
      }
    },
    changeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            completed: action.payload.completed,
          };
        } else return todo;
      });
      state.selectedTodo = {
        ...state.selectedTodo,
        title: action.payload.title,
        completed: action.payload.completed,
      };
      saveTodosToLS(state.todos);
    },
    getTodosFromLocalStorage: (state) => {
      state.todos = getTodosFromLS();
    },
    closeTodoInfoBox: (state) => {
      state.todoInfoBoxVisible = false;
    },
    addComment: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, comment: action.payload.comment };
        } else return todo;
      });
      state.selectedTodo = {...state.selectedTodo, comment: action.payload.comment}
      saveTodosToLS(state.todos);
    },
    addDueDate: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, dueDate: action.payload.dueDate };
        } else return todo;
      });
      state.selectedTodo = {
        ...state.selectedTodo,
        dueDate: action.payload.dueDate,
      };
      saveTodosToLS(state.todos);
    },
    deleteDueDate: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, dueDate: "" };
        } else return todo;
      });
      state.selectedTodo = { ...state.selectedTodo, dueDate: "" };
      saveTodosToLS(state.todos);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  handleTodoInfoBoxClick,
  changeTodo,
  closeTodoInfoBox,
  addComment,
  addDueDate,
  deleteDueDate,
  getTodosFromLocalStorage,
} = todoSlice.actions;
