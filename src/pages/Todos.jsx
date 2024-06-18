import React, { useState, useEffect } from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";
import { getLoggedUser } from "../utils/loggedUsers.js";
import './styles/Todo.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const user = getLoggedUser()
  const userId = 1 //TODO: to change to real userId

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setFilteredTodos(data);
      });
  }, []);

  return (
    <div className="todos-container">
      <h1 className="todos-header">Todos</h1>
      <TodoForm userId={userId} setTodos={setTodos} />
      <TodoFilters todos={todos} setTodos={setFilteredTodos} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}
