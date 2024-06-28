import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/PhotoDetails.css";

import { deletePhoto, getPhotoById, updatePhoto } from "../utils/Photos.js";
import { getUserByUsername } from "../utils/User.js";
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function PhotoDetails() {
    const { id } = useParams();

    const [photo, setPhoto] = useState(null);
    const [user, setUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const loggedUser = getLoggedUser();

            if (!loggedUser) {
                // go to the login page
                window.location.href = "/login";
                return;
            }

            const users = await getUserByUsername(loggedUser.username);
            let user = users[0];

            setUser(user);

            const response = await getPhotoById(id);
            setPhoto(response.data);

            setTitle(response.data.title);
            setUrl(response.data.url);
            setThumbnailUrl(response.data.thumbnailUrl);
        }

        fetchData();
    }, [id]);

    const handleDeletePhoto = async () => {
        await deletePhoto(id);
        window.location.href = "/";
    };

    const handleEditPhoto = async () => {
        setShowForm((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const photo = {
            id,
            title,
            url,
            thumbnailUrl,
        };

        const response = await updatePhoto(photo);

        setPhoto(response.data);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setThumbnailUrl(response.data.thumbnailUrl);

        setShowForm(false);
    };

    return (
        <div className="main">
            {user !== null && photo !== null && (
                <div className="page-header-g">
                    <div className="btn-group">
                        <button className="btn btn-blue" onClick={handleEditPhoto}>
                            {showForm ? "Cancel" : "Edit Photo"}
                        </button>
                        <button className="btn btn-red" onClick={handleDeletePhoto}>
                            Delete Photo
                        </button>
                    </div>
                </div>
            )}

            {photo === null && <p>Loading photo...</p>}
            {photo === undefined && <p>Photo not found</p>}
            {photo && (
                <>
                    {showForm ? (
                        <div className="photo-form">
                            <form id="update-photo-form" onSubmit={handleSubmit}>
                                <h2 className="form-header">Update your photo</h2>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Url"
                                    value={url}
                                    onChange={(e) => {
                                        setUrl(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Thumbnail Url"
                                    value={thumbnailUrl}
                                    onChange={(e) => {
                                        setThumbnailUrl(e.target.value);
                                    }}
                                />
                                <button className="btn btn-blue">Save</button>
                            </form>
                        </div>
                    ) : (
                        <div className="photo-details">
                            <h2 className="photo-header">{photo.title}</h2>
                            <img className="photo-img" src={photo.thumbnailUrl} alt={photo.title} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
