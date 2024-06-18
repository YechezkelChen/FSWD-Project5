// This file will have all the utility functions related to logged in users
// 1. registering a user -> add a user to the logged in users list
// 2. log in user -> log in a user (in LocalStorage)
// 3. log out user -> log out a user (from LocalStorage)

// Note when registering a new user we need to add the user to the logged in users list using the json-server api
// and also log in the user in the LocalStorage

// for emulating security we will be hashing the password before storing it in the json-server
// and we will be using the same hash function to compare the password when logging in

import axios from "axios";
import hash from "./hash";

// Function to register a user
export const registerUser = async (user) => {
  // hashing the password before storing it in the json-server
  // we will be using the same hash function to compare the password when logging in
  user.password = hash(user.password);

  try {
    // Add the user to the logged in users list using the json-server api
    const response = await axios.post(
      "http://localhost:3001/loggedUsers",
      user
    );
    // Log in the user in the LocalStorage
    localStorage.setItem("loggedUser", JSON.stringify(response.data));
    window.dispatchEvent(new Event("user-logged"));
    return response.data;
  } catch (error) {
    console.error("Error registering user: ", error);
  }
};

// Function to log in a user
export const loginUser = async (user) => {
    // hashing the password before storing it in the json-server
    // we will be using the same hash function to compare the password when logging in
    user.password = hash(user.password);
  try {
    // Log in the user in the LocalStorage
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.dispatchEvent(new Event("user-logged"));
  } catch (error) {
    console.error("Error logging in user: ", error);
  }
};

// get a user from the server using the id
export const getUserId = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/loggedUsers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user: ", error);
  }
};

export const getUserByName = async (username) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/loggedUsers?username=${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting user: ", error);
  }
};

// Function to log out a user
export const logoutUser = () => {
  try {
    // Log out the user from the LocalStorage
    localStorage.removeItem("loggedUser");
    window.dispatchEvent(new Event("user-logged"));
  } catch (error) {
    console.error("Error logging out user: ", error);
  }
};

// Function to get the logged in user
export const getLoggedUser = () => {
  try {
    // Get the logged in user from the LocalStorage
    return JSON.parse(localStorage.getItem("loggedUser"));
  } catch (error) {
    console.error("Error getting logged in user: ", error);
  }
};
