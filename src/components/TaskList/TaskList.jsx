import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import './TaskList.css'

export default function TaskList() {
  const todos = useSelector((state) => state.todos);
  console.log("todos from list", todos);

  return (
    <div>
      <ul className="list">{todos && todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}</ul>
    </div>
  );
}
