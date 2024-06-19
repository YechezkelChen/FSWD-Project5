import React from 'react';
import TodoItem from './TodoItem';
import '../pages/styles/Todo.css';

export default function TodoList({ url, todos, setTodos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} url={url} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}
