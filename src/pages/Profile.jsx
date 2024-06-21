import { useEffect, useState } from "react";

import { getLoggedUser } from "../utils/loggedUsers";
import { getUserByUsername } from "../utils/User";

import axios from "axios";

const createUser = async (user) => {
  // NOTE: this will be put in th User.js file in utils folder
  try {
    const response = await axios.post("http://localhost:3001/users", user);
    // Log in the user in the LocalStorage
    return response.data;
  } catch (error) {
    console.error("Error adding user to database: ", error);
  }
};

export default function Profile() {
  const [user, setUser] = useState({});

  const loggedUser = getLoggedUser();

  if (!loggedUser) {
    // move back to the login page
    window.location.href = "/login";
  }

  useEffect(() => {
    // get the user from the server using the id
    getUserByUsername(loggedUser.username)
      .then((response) => {
        const user = response[0];
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  }, [loggedUser.username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      username: loggedUser.username,
      address: null,
      geo: null,
    };
    createUser(user).then((response) => {
      setUser(response);
    });

    form.reset();

    // move back to the profile page
    window.location.href = "/profile";
  };

  return (
    <>
      <div className="main">
        <h1>Profile</h1>
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <div>
            <h2>Create a profile</h2>
            <form className="form" onSubmit={handleSubmit}>
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
