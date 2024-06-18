// this page will be used to log out the user
// when the page is loaded the user will be logged out
// and a message would be displayed to the user
// "You have been logged out"

import { useEffect } from "react";

import { logoutUser } from "../utils/loggedUsers";

export default function Logout() {
  useEffect(() => {
    // remove the user from the local storage
    logoutUser();
  }, []);

  return (
    <div className="main">
      <h1>You have been logged out</h1>
    </div>
  );
}
