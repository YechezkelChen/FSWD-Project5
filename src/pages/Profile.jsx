import { useEffect, useState } from "react";

import ProfileForm from "../components/auth/ProfileForm.jsx";

import { getLoggedUser } from "../utils/loggedUsers";
import { getUserByUsername } from "../utils/User";

import "./styles/Profile.css";

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

  return (
    <>
      <div className="main">
        <h1 className="page-header">Profile</h1>
        {user ? (
          <div className="profile">
            <h2 className="profile-name profile-info">{user.name}</h2>
            <p className="profile-email profile-info">{user.email}</p>
            <p className="profile-phone profile-info">{user.phone}</p>
          </div>
        ) : (
          <ProfileForm setUser={setUser} username={loggedUser.username} />
        )}
      </div>
    </>
  );
}
