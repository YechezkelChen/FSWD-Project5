import "./styles/Navbar.css";


import { pages as allPages } from "../data/pages.js";
import { getLoggedUser } from "../utils/loggedUsers.js";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  // if the user is logger in we remove the link for login and register
  // and add the link for the profile page
  const [pages, setPages] = useState(allPages);

  useEffect(() => {
    // when a user is logged in or out we update the navbar
    // by catching an event that is triggered when the user logs in or out
    window.addEventListener("user-logged", () => {
      const user = getLoggedUser();
      if (user) {
        setPages(allPages.filter((page) => page.url !== "/login" && page.url !== "/register"));
      } else {
        setPages(allPages.filter((page) => page.url !== "/logout" && page.url !== "/profile"));
      }
    });

    // when the component is mounted we check if the user is logged in
    // and update the navbar accordingly
    const user = getLoggedUser();
    if (user) {
      setPages(allPages.filter((page) => page.url !== "/login" && page.url !== "/register"));
    } else {
      setPages(allPages.filter((page) => page.url !== "/logout" && page.url !== "/profile"));
    }
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/">React App</Link>
        </div>
        <ul className="nav-list">
          {pages.map((page, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link to={page.url}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
