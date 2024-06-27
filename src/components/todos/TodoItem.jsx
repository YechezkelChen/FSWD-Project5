import PropTypes from "prop-types";

import "../../pages/styles/Todo.css";

import { deleteTodo, toggleCompletionTodo } from "../../utils/Todo.js";

export default function TodoItem({ edit, todo, setTodos, setFilteredTodos, handleEdit }) {
  const toggleCompletion = async () => {
    // remove the todo from the list
    const response = await toggleCompletionTodo(todo);

    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? response.data : t))
    );
    setFilteredTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? response.data : t))
    );
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTodo(todo.id);
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    setFilteredTodos((prev) => prev.filter((t) => t.id !== todo.id));
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
  setFilteredTodos: PropTypes.func,
  handleEdit: PropTypes.func,
};
