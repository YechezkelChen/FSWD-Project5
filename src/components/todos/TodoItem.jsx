import PropTypes from "prop-types";

import "../../pages/styles/Todo.css";

import { deleteTodo, toggleCompletionTodo } from "../../utils/Todo.js";

export default function TodoItem({ edit, todo, setTodos, handleEdit }) {
  const toggleCompletion = async () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );

    await toggleCompletionTodo(todo);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTodo(todo.id);
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="todo-block">
      <span>
        {todo.id}. {todo.title}
      </span>

      {edit ? (
        <div className="btn-group">
          <button
            className="btn btn-blue btn-sm"
            onClick={(e) => {
              e.preventDefault();
              handleEdit(todo.id);
            }}
          >
            Edit
          </button>
          <button className="btn btn-red btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompletion}
        />
      )}
    </div>
  );
}

TodoItem.propTypes = {
  edit: PropTypes.bool,
  todo: PropTypes.object,
  setTodos: PropTypes.func,
  handleEdit: PropTypes.func,
};
