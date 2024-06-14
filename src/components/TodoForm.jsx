export default function TodoForm() {
  return (
    <form className="todo-form">
      <div className="form-group">
        <label htmlFor="todo-name">Add a new todo</label>
        <input
          id="todo-name"
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
