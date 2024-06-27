import PropTypes from "prop-types";
import { useState } from "react";

import TodoItem from "./TodoItem.jsx";

import "../../pages/styles/Todo.css";

export default function TodoList({
  todos,
  setTodos,
  setFilteredTodos,
  handleEdit,
}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div className="header-btn">
        <button className="btn btn-blue" onClick={() => setEditMode(!editMode)}>
          {editMode ? "View" : "Edit"}
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <TodoItem
              edit={editMode}
              todo={todo}
              setFilteredTodos={setFilteredTodos}
              setTodos={setTodos}
              handleEdit={handleEdit}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setFilteredTodos: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
