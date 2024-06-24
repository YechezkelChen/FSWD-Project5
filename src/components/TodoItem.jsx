import PropTypes from "prop-types";

import "../pages/styles/Todo.css";

export default function TodoItem({ todo, setTodos }) {
  const url = "http://localhost:3001/todos";

  const toggleCompletion = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );

    fetch(`${url}/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Todo updated:", data);
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  return (
    <div className="todo-block">
      <span>
        {todo.id}. {todo.title}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompletion}
      />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
};
