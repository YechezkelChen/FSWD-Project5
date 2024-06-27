// This file will be used to have all the functions related to the post model
import axios from "axios";

const url = "http://localhost:3001/posts";

export async function getPosts() {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error("Error getting posts: ", error);
  }
}

export async function getPostById(postId) {
  try {
    return await axios.get(`${url}/${postId}`);
  } catch (error) {
    console.error("Error getting post by id: ", error);
  }
}

export async function getPostsByUser(userId) {
  try {
    return await axios.get(`${url}?userId=${userId}`);
  } catch (error) {
    console.error("Error getting posts by user: ", error);
  }
}

export async function createPost(post) {
  try {
    return await axios.post(url, post);
  } catch (error) {
    console.error("Error adding post to database: ", error);
  }
}

export async function updatePost(post) {
  try {
    return await axios.put(`${url}/${post.id}`, post);
  } catch (error) {
    console.error("Error updating post: ", error);
  }
}

export async function deletePost(postId) {
  try {
    return await axios.delete(`${url}/${postId}`);
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
}
