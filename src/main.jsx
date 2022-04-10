import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import PostList from './pages/PostList'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
