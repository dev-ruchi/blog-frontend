import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(event) {
    event.preventDefault()
    fetch(`${import.meta.env.VITE_BASE_URL}/auth/log-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          alert(result.error)
          return
        }

        localStorage.setItem('token', result.token)
        window.location = '/'
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  return (
    <div>
      <Form onSubmit={login}>
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
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login