import { useEffect, useState } from "react";

import axios from "axios";

import { getLoggedUser } from "../utils/loggedUsers";

const getUser = async (userId) => {
  // this function will use the axios.get to get the user from the server using the id
  // the function will return the user object
  return await axios.get(`http://localhost:3001/users/${userId}`);
};

// const createUser = async (user) => {
//   return null;
// };

export default function Profile() {
  const [user, setUser] = useState({});

  const loggedUser = getLoggedUser();
  console.log(loggedUser);

  if (!loggedUser) {
    // move back to the login page
    window.location.href = "/login";
  }

  useEffect(() => {
    // get the user from the server using the id
    console.log("loggedUser.id", loggedUser.id);
    getUser(loggedUser.id)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        // console.log(error);
        setUser(null);
      });
  }, [loggedUser.id]);

  return (
    <>
      <div className="main">
        <h1>Profile</h1>
        {/* if the user is null we will present a form to add data so we can create user */}
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <div>
            <h2>Create a profile</h2>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-blue">
                  Create
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
