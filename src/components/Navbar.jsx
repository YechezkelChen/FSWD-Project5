import { Link } from "react-router-dom";

import { pages } from "../data/pages.js";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {pages.map((page, index) => {
            return (
              <li key={index}>
                <Link to={page.url}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
