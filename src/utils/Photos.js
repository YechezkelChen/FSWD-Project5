// this file will have the function to get the photos from the server
import axios from "axios";

const url = "http://localhost:3001/photos";

export async function createPhoto(photo) {
    return await axios.post(url, photo);
}

export async function getPhotos(albumId, start, limit) {
    return await axios.get(`${url}?albumId=${albumId}&_start=${start}&_limit=${limit}`);
}

export async function updatePhoto(photo) {
    return await axios.put(`${url}/${photo.id}`, photo);
}

export async function deletePhoto(photoId) {
    return await axios.delete(`${url}/${photoId}`);
}
