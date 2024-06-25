import Footer from "../general/Footer.jsx";
import Navbar from "../general/Navbar.jsx";
// import MessageDisplay from "./MessageDisplay.jsx";

// the message display is a component that will be use by different pages and components
// to display a message for example a form would use it to display a success or error message
// a page would use it to display a welcome message etc

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* <MessageDisplay message="This is a simple message" /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
