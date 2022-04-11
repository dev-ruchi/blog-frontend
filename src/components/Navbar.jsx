import React from 'react'

import { Navbar as BSNavbar, Container, Nav, Button } from "react-bootstrap";
import { user } from '../utils/auth';

function Navbar() {

  function logOut() {
    localStorage.clear()
    window.location = '/'
  }

  return (
    <BSNavbar className='mb-5' bg='dark' variant='dark'>
      <Container>
        <BSNavbar.Brand href="/">MyAwesomeBlog</BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse className="justify-content-end">
          {user()
            ? <>
              <Nav.Link href="/posts/create">Create post</Nav.Link>
              <Button onClick={logOut}>Log out</Button>
            </>
            : <>
              <Nav.Link href="/log-in">Log in</Nav.Link>
              <Nav.Link href="/sign-up">Sign up</Nav.Link>
            </>
          }

        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar