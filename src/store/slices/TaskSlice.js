import { createSlice } from "@reduxjs/toolkit";
import { saveTaskToLS, getTodosFromLS, saveChangedTaskToLS } from '../../utils/utils'

const todos = getTodosFromLS();
//const todos = [];

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
        comment: '',
      };
      state.todos.push(newTodo);
      // saveTaskToLS(newTodo)
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action) => {
      console.log('action.payload delete', action.payload)
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.todoInfoBoxVisible = false
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    toggleComplete: (state, action) => {
     
      if (state.selectedTodo) {
        console.log('selectedToDoState change')
        state.selectedTodo.completed = !state.selectedTodo.completed
      }
      
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        } else return todo
      })

      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    handleTodoInfoBoxClick: (state, action) => {
      state.todoInfoBoxVisible = !state.todoInfoBoxVisible;
      state.selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      
    },
    changeTodo: (state, action) => {
      // const selectedTodo = state.todos.find(
      //   (todo) => todo.id === action.payload.id
      // );
      // selectedTodo.title = action.payload.title;
      // selectedTodo.completed = action.payload.completed;

      state.todos = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, title: action.payload.title, completed: action.payload.completed}
        } else return todo
      })
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
    },
    getTodosFromLS: (state, action) => {
      state.todos = getTodosFromLS()
    },
    closeTodoInfoBox: (state) => {
      state.todoInfoBoxVisible = false
    },
    addComment: (state, action) => {
      console.log('action payload comment', action.payload)
      state.todos = state.todos.map((todo) => {
       if (todo.id === action.payload.id) {
        console.log(todo)
        return {...todo, comment: action.payload.comment}
       } else return todo
      })
      localStorage.setItem("todoHistory", JSON.stringify(state.todos))
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
  test
} = todoSlice.actions;
