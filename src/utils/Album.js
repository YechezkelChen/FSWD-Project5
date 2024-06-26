// this file will have the function to get the albums from the server
import axios from "axios";

const url = "http://localhost:3001/albums";

export async function createAlbum(album) {
    return await axios.post(url, album);
}

export async function getAlbums(userId) {
    return await axios.get(`${url}?userId=${userId}`);
}

export async function updateAlbum(album) {
    return await axios.put(`${url}/${album.id}`, album);
}

export async function deleteAlbum(albumId) {
    return await axios.delete(`${url}/${albumId}`);
}
