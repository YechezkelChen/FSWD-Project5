import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

import "../pages/styles/Todo.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <TodoItem todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
