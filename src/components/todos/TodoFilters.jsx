import React, { useEffect, useState } from 'react';
import '../../pages/styles/Todo.css';

export default function TodoFilters({ todos, setTodos }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('serial');

    useEffect(() => {
        let filteredTodos = [...todos];

        // Filter by search
        if (search) {
            filteredTodos = filteredTodos.filter(todo => todo.title.includes(search));
        }

        // Filter by completion status
        if (filter !== 'all') {
            const isCompleted = filter === 'completed';
            filteredTodos = filteredTodos.filter(todo => todo.completed === isCompleted);
        }

        // Sort todos
        switch (sort) {
            case 'serial':
                filteredTodos.sort((a, b) => a.id - b.id);
                break;
            case 'alphabetical':
                filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'random':
                filteredTodos.sort(() => Math.random() - 0.5);
                break;
            default:
                break;
        }

        setTodos(filteredTodos);
    }, [, search, filter, sort])

    return (
        <div className="todo-filters">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <select value={filter} onChange={e => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="serial">Serial</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="random">Random</option>
            </select>
        </div>
    );
}
