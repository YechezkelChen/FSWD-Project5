import PropTypes from "prop-types";

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.isCompleted} />
      <span>{todo.text}</span>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};
