import React, { Component } from 'react'
import { Card, Container, CardGroup, Row, Col, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our Team</h2>
        </Container>
        <Row className="m-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur quis,
                  pariatur, optio repudiandae et ipsa odio at labore veniam, modi impedit blanditiis
                  nesciunt sunt sequi corporis minus totam hic?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" border="primary" text="light">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur quis,
                  pariatur, optio repudiandae et ipsa odio at labore veniam, modi impedit blanditiis
                  nesciunt sunt sequi corporis minus totam hic?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src='https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur quis,
                  pariatur, optio repudiandae et ipsa odio at labore veniam, modi impedit blanditiis
                  nesciunt sunt sequi corporis minus totam hic?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
