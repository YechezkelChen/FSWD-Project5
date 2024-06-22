import { useEffect, useState } from "react";

import { ProfileForm } from "../components/ProfileForm.jsx";

import { getLoggedUser } from "../utils/loggedUsers";
import { getUserByUsername } from "../utils/User";

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
        <h1>Profile</h1>
        {user ? (
          <div className="Profile">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <ProfileForm setUser={setUser} username={loggedUser.username} />
        )}
      </div>
    </>
  );
}
