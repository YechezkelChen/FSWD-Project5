import PropTypes from "prop-types";

import { getLoggedUser } from "../utils/loggedUsers";
import { getUserByUsername } from "../utils/User";

import "./styles/Button.css";
import "./styles/Form.css";

export default function TodoForm({ setTodos }) {
  const url = "http://localhost:3001/todos";

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;

  const addTodo = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;

    const newTodo = {
      userId: userId,
      title: title,
      completed: false,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos((prev) => [...prev, data]);
      })
      .catch((error) => console.error("Error adding todo:", error));

    form.reset();
  };

  return (
    <form className="todo-form" onSubmit={addTodo}>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder="Enter todo title"
          name="title"
        />
        <button type="submit" className="btn btn-blue">
          Add Todo
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
