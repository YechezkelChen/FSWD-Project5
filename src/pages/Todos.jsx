import { useEffect, useState } from "react";

import TodoFilters from "../components/todos/TodoFilters.jsx";
import TodoForm from "../components/todos/TodoForm.jsx";
import TodoList from "../components/todos/TodoList.jsx";

import { getTodos } from "../utils/Todo";
import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import "./styles/Todo.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [userId, setUserId] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      const loggedUser = getLoggedUser();

      if (!loggedUser) {
        // go to the login page
        window.location.href = "/login";
        return;
      }

      // fetch the user from the database using the getUserByUsername function,
      //the function is asynchronous so we need to use the await keyword
      const users = await getUserByUsername(loggedUser.username);
      setUserId(users[0].id);

      const response = await getTodos(userId);
      setTodos(response.data);
      setFilteredTodos(response.data);
    }

    fetchTodos();
  }, [userId]);

  const handleEdit = (id) => {
    // find the todo with the id
    // remove it from the todos array
    // add it to the form
    const todo = todos.find((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setEditMode(true);
    setTodo(todo);
  };

  return (
    <div className="main">
      <h1 className="todos-header">Todos</h1>
      <TodoForm
        userId={userId}
        setTodos={setTodos}
        editMode={editMode}
        setEditMode={setEditMode}
        todo={todo}
      />
      <TodoFilters todos={todos} setFilteredTodos={setFilteredTodos} />
      <TodoList
        todos={filteredTodos}
        setTodos={setFilteredTodos}
        handleEdit={handleEdit}
      />
    </div>
  );
}
