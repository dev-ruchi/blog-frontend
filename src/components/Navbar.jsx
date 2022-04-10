import React from 'react'

import { Navbar as BSNavbar, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BSNavbar className='mb-5' bg='dark' variant='dark'>
      <Container>
        <BSNavbar.Brand href="/">MyAwesomeBlog</BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse className="justify-content-end">
          <BSNavbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </BSNavbar.Text>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar