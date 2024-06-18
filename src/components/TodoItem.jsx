import React from 'react';
import '../pages/styles/Todo.css';

export default function TodoItem({ todo, setTodos }) {
  // TODO: fix toggleCompletion this dont change really!!
  const toggleCompletion = () => {
    setTodos(prevTodos => {
      prevTodos.map(t =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    }
    );
  };

  return (
    <div className="todo-item">
      <span>{todo.id}. {todo.title}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompletion}
      />
    </div>
  );
}
