import PropTypes from "prop-types";
import { useState } from "react";

import "../../pages/styles/Todo.css";

export default function TodoFilters({
  todos,
  setFilteredTodos,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("serial");

  const handleSearch = (e) => {
    e.preventDefault();
    // this function will handle the search case
    // it will filter the todos based on the search input

    const searchTerm = search.toLowerCase();
    const filteredBySearch = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchTerm);
    });
    const filteredByFilter = filteredBySearch.filter((todo) => {
        if(filter === "all") {
            return true;
        } else if(filter === "completed") {
            return todo.completed;
        } else {
            return !todo.completed;
        }
    });
    const sorted = filteredByFilter.sort((a, b) => {
      if (sort === "serial") {
        return a.id - b.id;
      } else if (sort === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else {
        return Math.random() - 0.5;
      }
    });

    setFilteredTodos(sorted);
  };

  return (
    <div className="todo-filters">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="serial">Serial</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="random">Random</option>
        </select>
        <button type="submit" className="btn btn-blue">
          Search
        </button>
      </form>
    </div>
  );
}

TodoFilters.propTypes = {
  todos: PropTypes.array.isRequired,
  setFilteredTodos: PropTypes.func.isRequired,
};
