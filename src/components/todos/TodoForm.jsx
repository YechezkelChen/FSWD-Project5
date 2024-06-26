import PropTypes from "prop-types";

import { createTodo, updateTodo } from "../../utils/Todo.js";

import "../styles/Button.css";
import "../styles/Form.css";

export default function TodoForm({userId, setTodos, editMode, setEditMode, todo }) {

  if(editMode) {
    // check if the todo is not null
    // if it is not null, set the value of the input to the todo title
    if(!todo) return;

    const form = document.getElementById("todo-form");
    form.value = todo.title;
  }

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

  const handleEditTodo = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;

    // the only thing we can edit is the title
    const updatedTodo = {
      id: todo.id,
      userId: userId,
      title: title,
      completed: todo.completed,
    }

    const response = await updateTodo(updatedTodo);
    
    setTodos((prev) => [...prev, response.data]);
    setEditMode(false);

    form.reset();
  }

  return (
    <form className="todo-form" onSubmit={
      editMode ? handleEditTodo : handleAddTodo
    }
    >
      <div className="form-group">
        <input
        id="todo-form"
          type="text"
          className="form-input"
          placeholder="Enter todo title"
          name="title"
        />
        <button type="submit" className="btn btn-blue">
          {editMode ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  userId: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  todo: PropTypes.object,
  setEditMode: PropTypes.func.isRequired,
};
