import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function PostView() {
  const { slug } = useParams()
  const [post, setPost] = useState()
  const [failed, setFailed] = useState(false)

  useEffect(function () {
    fetch(`http://localhost:8000/posts/${slug}`)
      .then(response => response.json())
      .then(result => setPost(result))
      .catch(error => {
        console.log('error', error)
        setFailed(true)
      });
  }, [])


  return (
    failed ?
    <p className='text-danger fw-bold'>Failed to load the post. Please check your internet connection or try reloading the page</p>
    :
    post ?
      <Row>
        <Col xs='12' md='8' lg='6' className='offset-md-2 offset-lg-3'>
          <h1 className='bg-success text-white p-5 mb-5 rounded'>{post.title}</h1>
          <p className='mb-5 fs-5'>{post.body}</p>
          <p className='text-primary'>{post.user.name}</p>
        </Col>
      </Row>
      :
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
}

export default PostView