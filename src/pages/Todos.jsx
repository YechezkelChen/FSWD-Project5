import { useEffect, useState } from "react";

import TodoFilters from "../components/TodoFilters";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import "./styles/Todo.css";

export default function Todos() {
  const url = "http://localhost:3001/todos";

  const [todos, setTodos] = useState([]);
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;
  // const userId = 1;

  useEffect(() => {
    fetch(`${url}?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        // setFilteredTodos(data);
      })
      .catch((error) => console.error("Error reading todos:", error));
  }, [url, userId]);

  return (
    <div className="main">
      <h1 className="todos-header">Todos</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoFilters todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
