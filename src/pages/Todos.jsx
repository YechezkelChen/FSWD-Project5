import { useEffect, useState } from "react";

import TodoFilters from "../components/todos/TodoFilters.jsx";
import TodoForm from "../components/todos/TodoForm.jsx";
import TodoList from "../components/todos/TodoList.jsx";

import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";
import { getTodos } from "../utils/Todo";

import "./styles/Todo.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const loggedUser = getLoggedUser();

  // fetch the user from the database using the getUserByUsername function,
  //the function is asynchronous so we need to use the await keyword
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;


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
