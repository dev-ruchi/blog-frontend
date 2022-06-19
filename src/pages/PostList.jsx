import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { truncate } from "../utils/string";

function PostList() {

  const [posts, setPosts] = useState([])

  useEffect(function () {

    fetch(`${import.meta.env.VITE_BASE_URL}/posts`)
      .then(response => response.json())
      .then(result => setPosts(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div>
      <h3 className='mb-4'>All posts</h3>

      <Row>
        {posts.map(post => {
          return (
            <Col key={post._id} xs='12' md='4' lg='3' className='mb-4 d-flex align-items-stretch'>
              <Card>
                <Card.Body>
                  <Link to={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <Card.Title>{post.title}</Card.Title>
                  </Link>
                  <Card.Text>
                    {truncate(post.body, 120)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default PostList