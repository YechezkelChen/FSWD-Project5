import React, { useState } from 'react';
import './styles/Button.css';
import './styles/Form.css';
import Todos from '../pages/Todos';

export default function TodoForm({ userId, setTodos }) {
  const [title, setTitle] = useState('');

  // TODO: fix addTodo this dont add really!!
  const addTodo = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        userId: userId,
        id: prevTodos.length ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        title: title,
        completed: false
      }
    ]);
    setTitle('');
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-input"
        placeholder="Enter todo title"
      />
      <button type="button" className="btn btn-blue" onClick={addTodo}>Add Todo</button>
    </form>
  );
}
