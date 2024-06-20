import PropTypes from "prop-types";

import { useState } from "react";
import "./styles/Button.css";
import "./styles/Form.css";

export default function TodoForm({ url, userId, todos, setTodos }) {
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      userId: userId,
      id: todos.length ? String(Number(todos[todos.length - 1].id) + 1) : 1,
      title: title,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Todo added:", data);
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  return (
    <form className="todo-form" onSubmit={addTodo}>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          placeholder="Enter todo title"
        />
        <button type="submit" className="btn btn-blue">
          Add Todo
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  url: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
