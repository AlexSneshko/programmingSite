import React, { Component } from 'react'
import { Col, Container, ListGroup, Row, Card } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="d-flex align-items-center mt-5">
              <div className="d-flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="blogPic" />
              </div>
              <div className="flex-grow-1 ms-4">
                <h3>Some Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod obcaecati ab ratione nobis
                  accusantium vitae quidem neque repellendus doloremque doloribus nihil laborum laudantium vero, quaerat
                  aliquid cupiditate delectus reprehenderit soluta error omnis libero autem
                  optio nostrum? Iste cumque error, sequi quia numquam sapiente voluptas quas dicta beatae praesentium libero!</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="d-flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="blogPic" />
              </div>
              <div className="flex-grow-1 ms-4">
                <h3>Some Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod obcaecati ab ratione nobis
                  accusantium vitae quidem neque repellendus doloremque doloribus nihil laborum laudantium vero, quaerat
                  aliquid cupiditate delectus reprehenderit soluta error omnis libero autem
                  optio nostrum? Iste cumque error, sequi quia numquam sapiente voluptas quas dicta beatae praesentium libero!</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="d-flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="blogPic" />
              </div>
              <div className="flex-grow-1 ms-4">
                <h3>Some Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod obcaecati ab ratione nobis
                  accusantium vitae quidem neque repellendus doloremque doloribus nihil laborum laudantium vero, quaerat
                  aliquid cupiditate delectus reprehenderit soluta error omnis libero autem
                  optio nostrum? Iste cumque error, sequi quia numquam sapiente voluptas quas dicta beatae praesentium libero!</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="d-flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="blogPic" />
              </div>
              <div className="flex-grow-1 ms-4">
                <h3>Some Text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod obcaecati ab ratione nobis
                  accusantium vitae quidem neque repellendus doloremque doloribus nihil laborum laudantium vero, quaerat
                  aliquid cupiditate delectus reprehenderit soluta error omnis libero autem
                  optio nostrum? Iste cumque error, sequi quia numquam sapiente voluptas quas dicta beatae praesentium libero!</p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className='text-center mt-5'>Catagories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className='mt-3' bg="light">
              <Card.Body>
                <Card.Title>Widget</Card.Title>

                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim voluptates saepe
                  incidunt molestiae suscipit nesciunt quibusdam necessitatibus
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
