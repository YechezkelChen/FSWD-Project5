import axios from "axios";

const url = "http://localhost:3001/comments";

export async function getPostComments(postId) {
  try {
    return await axios.get(`${url}?postId=${postId}`);
  } catch (error) {
    console.error("Error getting comments: ", error);
  }
}

export async function addComment(postId, comment) {
  try {
    return await axios.post(`${url}?postId=${postId}`, comment);
  } catch (error) {
    console.error("Error adding comment: ", error);
  }
}

export async function deleteComment(commentId) {
  try {
    return await axios.delete(`${url}/${commentId}`);
  } catch (error) {
    console.error("Error deleting comment: ", error);
  }
}

export async function updateComment(commentId, comment) {
  try {
    return await axios.put(`${url}/${commentId}`, comment);
  } catch (error) {
    console.error("Error updating comment: ", error);
  }
}