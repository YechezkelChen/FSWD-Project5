import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = [];

  return (
    <div className="todo-list">
      {todoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}
