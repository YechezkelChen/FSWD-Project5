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
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [todo, setTodo] = useState(null);

  const loggedUser = getLoggedUser();

  // fetch the user from the database using the getUserByUsername function,
  //the function is asynchronous so we need to use the await keyword
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;


  useEffect(() => {
    async function fetchTodos() {
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
  }

  return (
    <div className="main">
      <h1 className="todos-header">Todos</h1>
      <TodoForm
        setTodos={setTodos}
        editMode={editMode}
        setEditMode={setEditMode}
        todo={todo}
      />
      <TodoFilters
        todos={todos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList todos={filteredTodos} setTodos={setFilteredTodos} handleEdit={handleEdit} />
    </div>
  );
}
