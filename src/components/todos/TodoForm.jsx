import PropTypes from "prop-types";

import { getLoggedUser } from "../../utils/loggedUsers.js";
import { getUserByUsername } from "../../utils/User.js";
import { createTodo } from "../../utils/Todo.js";

import "../styles/Button.css";
import "../styles/Form.css";

export default function TodoForm({ setTodos }) {
  // const url = "http://localhost:3001/todos";

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;

  const handleAddTodo = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;

    const newTodo = {
      userId: userId,
      title: title,
      completed: false,
    };

    const response = await createTodo(newTodo);
    
    setTodos((prev) => [...prev, response.data]);

    form.reset();
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <div className="form-group">
        <input
        id="todo-form"
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
