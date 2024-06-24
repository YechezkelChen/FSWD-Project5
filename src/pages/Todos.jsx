import { useEffect, useState } from "react";

import TodoFilters from "../components/TodoFilters";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";
import { getTodos } from "../utils/Todo";

import "./styles/Todo.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;
  // const userId = 1;

  useEffect(() => {
    async function fetchTodos() {
      const response = await getTodos(userId);
      setTodos(response.data);
    }

    fetchTodos();
  }, [userId]);

  return (
    <div className="main">
      <h1 className="todos-header">Todos</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoFilters todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
