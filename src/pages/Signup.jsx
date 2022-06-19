import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function signUp(event) {
    event.preventDefault()
    fetch(`${import.meta.env.VITE_BASE_URL}/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          console.log(result)
          alert(result.error)
          return
        }

        localStorage.setItem('token', result.token)
        window.location = '/'
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup