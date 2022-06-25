import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { token } from '../utils/auth'


function PostCreate() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function postCreate(event) {
    event.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token()}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title,
      body
    });

    fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(body => {
            if (response.status === 422) {
              alert(body.error)
            } else {
              alert('Something went wrong.')
            }
          })
        } else {
          response.json()
        }
      })
      .then(post => navigate(`/posts/${post.slug}`))
      .catch(error => console.log('error', error));
  }


  return (
    <Form onSubmit={postCreate}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter your title" value={title} onChange={event => setTitle(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} value={body} onChange={event => setBody(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  )
}

export default PostCreate