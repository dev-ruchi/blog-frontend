import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function PostList() {

  const [posts, setPosts] = useState([])

  useEffect(function () {

    fetch("http://localhost:8000/posts")
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
            <Col xs='12' md='4' lg='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.body}
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