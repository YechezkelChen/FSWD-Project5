import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/general/Layout.jsx";

import Albums from "./pages/Albums.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Posts from "./pages/Posts.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import Todos from "./pages/Todos.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="logout" element={<Logout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />} />
            <Route path="albums" element={<Albums />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
