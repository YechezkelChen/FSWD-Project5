import React, { useState, useEffect } from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";
import './styles/Todo.css';
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function Todos() {
  // const url = 'https://jsonplaceholder.typicode.com/todos'
  const url = 'http://localhost:3001/todos'
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const user = getLoggedUser()
  const userId = 1 //TODO: to change to real userId

  useEffect(() => {
    fetch(`${url}?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setFilteredTodos(data);
      })
      .catch(error => console.error('Error reading todos:', error));
  }, [todos]);//TODO: to think how to drop this, because is fuck the serch

  return (
    <div className="todos-container">
      <h1 className="todos-header">Todos</h1>
      <TodoForm url={url} userId={userId} todos={todos} setTodos={setTodos} />
      <TodoFilters todos={todos} setTodos={setFilteredTodos} />
      <TodoList url={url} todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}
