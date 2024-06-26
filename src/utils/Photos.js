import axios from "axios";

const url = "http://localhost:3001/photos";

export async function addPhoto(albumId, photo) {
    try {
        return await axios.post(`${url}?albumId=${albumId}`, photo);
    } catch (error) {
        console.error("Error adding photo: ", error);
    }
}

export async function getAlbumPhotos(albumId) {
    try {
        return await axios.get(`${url}?albumId=${albumId}`);
    } catch (error) {
        console.error("Error getting photos: ", error);
    }
}

export async function updatePhoto(photoId, photo) {
    try {
        return await axios.put(`${url}/${photoId}`, photo);
    } catch (error) {
        console.error("Error updating photo: ", error);
    }
}

export async function deletePhoto(photoId) {
    try {
        return await axios.delete(`${url}/${photoId}`);
    } catch (error) {
        console.error("Error deleting photo: ", error);
    }
}
