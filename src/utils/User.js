import axios from "axios";

export const getUserByUsername = async (username) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/users?username=${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting user: ", error);
  }
};