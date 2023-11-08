export function getTodosFromLS() {
  let todoHistory = [];
  if (localStorage["todoHistory"]) {
    todoHistory =
      JSON.parse(localStorage.getItem("todoHistory") || "") || [];
  }
  return todoHistory;
}

export function saveTaskToLS(todo) {
  const todoHistory = getTodosFromLS();
  todoHistory.push(todo);
  localStorage.setItem("todoHistory", JSON.stringify(todoHistory));
}

export function saveChangedTaskToLS(id, changedTodo) {
  const todoHistory = getTodosFromLS();
  console.log('todoHistory', todoHistory)
  const filteredTodos = todoHistory.filter((todo) => todo.id !== id);
  console.log('filteredTodos 1', filteredTodos)
  filteredTodos.push(changedTodo);
  console.log('filteredTodos 2', filteredTodos)
  localStorage.setItem("todoHistory", JSON.stringify(todoHistory));
}