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

export const createUser = async (user) => {
  // NOTE: this will be put in th User.js file in utils folder
  try {
    const response = await axios.post("http://localhost:3001/users", user);
    // Log in the user in the LocalStorage
    return response.data;
  } catch (error) {
    console.error("Error adding user to database: ", error);
  }
};
