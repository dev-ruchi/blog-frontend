import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import PostList from './pages/PostList'
import PostView from './pages/PostView'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:slug" element={<PostView />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
