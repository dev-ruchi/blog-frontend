import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

import { user, token } from '../utils/auth';

function PostView() {
  const { slug } = useParams()
  const [post, setPost] = useState()
  const [failed, setFailed] = useState(false)

  const navigate = useNavigate()

  useEffect(function () {
    fetch(`${import.meta.env.VITE_BASE_URL}/posts/${slug}`)
      .then(response => {
        if (!response.ok) setFailed(true)
        else return response.json()
      })
      .then(result => setPost(result))
      .catch(error => {
        console.log('error', error)
        setFailed(true)
      });
  }, [])

  function deletePost() {

    if (!confirm("Do you really want to delete this post?")) return;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token()}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(`${import.meta.env.VITE_BASE_URL}/posts/${post._id}`, {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((res) => {
        if (!res.ok) alert('Something went wrong')
        else navigate(`/`)
      })
      .catch(error => {
        console.log('error', error)
        alert('Something went wrong')
      });
  }


  return (
    failed ?
      <p className='text-danger fw-bold'>Failed to load the post. Please check your internet connection or try reloading the page</p>
      :
      post ?
        <Row>
          <Col xs='12' md='8' lg='6' className='offset-md-2 offset-lg-3'>
            <h1 className='bg-success text-white p-5 mb-4 rounded'>{post.title}</h1>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p className='text-primary mb-0'><span className='text-black'>Author </span>{post.user.name}</p>
              {user().id === post.user._id && <div className="actions">
                <button type="button" className="btn btn-primary btn-sm">Edit</button>&nbsp;
                <button type="button" className="btn btn-danger btn-sm" onClick={deletePost}>Delete</button>
              </div>}
            </div>
            <hr />
            <p className='fs-5 text-justify'>{post.body}</p>
          </Col>
        </Row>
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
  )
}

export default PostView