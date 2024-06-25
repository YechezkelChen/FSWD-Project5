import axios from "axios";

const url = "http://localhost:3001/posts";

export async function getPostsComments(postId) {
  try {
    return await axios.get(`${url}/${postId}/comments`);
  } catch (error) {
    console.error("Error getting comments: ", error);
  }
}
