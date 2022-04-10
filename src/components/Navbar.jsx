import React from 'react'

import { Navbar as BSNavbar, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BSNavbar className='mb-5'>
      <Container>
        <BSNavbar.Brand href="#home">BS Navbar with text</BSNavbar.Brand>
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