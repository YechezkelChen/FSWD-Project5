import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import Todos from './pages/Todos.jsx'
import Posts from './pages/Posts.jsx'
import Albums from './pages/Albums.jsx'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
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

export default App
