import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import "../styles/Form.css";
import "../styles/Albums.css";

export default function SearchAlbums({ albums, setAlbums }) {
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("title");

    useEffect(() => {
        let filteredAlbums = [...albums];
        if (search) {
            if (searchBy === "title") {
                filteredAlbums = filteredAlbums.filter((album) =>
                    album.title.includes(search)
                );
            }
            if (searchBy === "id") {
                filteredAlbums = filteredAlbums.filter((album) =>
                    album.id.toString().includes(search)
                );
            }
        }

        setAlbums(filteredAlbums);
    }, [search, searchBy, albums, setAlbums]);

    return (
        <div className="album-filters">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input"
                placeholder="Search albums by title or serial number"
            />
            <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="form-select"
            >
                <option value="title">Title</option>
                <option value="id">Serial Number</option>
            </select>
        </div>
    );
}

SearchAlbums.propTypes = {
    albums: PropTypes.array.isRequired,
    setAlbums: PropTypes.func.isRequired,
};
