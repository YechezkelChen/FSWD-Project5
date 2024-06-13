import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
