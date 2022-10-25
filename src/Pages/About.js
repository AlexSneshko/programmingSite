import React, { Component } from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img width="800" src='https://s3-alpha.figma.com/hub/file/1511174180/cbbbae94-5efb-428f-956a-a1920448f8b5-cover.png'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo illum at pariatur 
                    explicabo accusantium quibusdam praesentium corporis asperiores ab doloremque, distinctio placeat 
                    animi aspernatur natus sint, voluptates dolores enim!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img width="800" src='https://www.rswebsols.com/wp-content/uploads/2021/08/software-developers-team-building-business-coworkers.jpg'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo illum at pariatur 
                    explicabo accusantium quibusdam praesentium corporis asperiores ab doloremque, distinctio placeat 
                    animi aspernatur natus sint, voluptates dolores enim!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img width="800" src='https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo illum at pariatur 
                    explicabo accusantium quibusdam praesentium corporis asperiores ab doloremque, distinctio placeat 
                    animi aspernatur natus sint, voluptates dolores enim!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img width="800" src='https://d26pm0riky5t4b.cloudfront.net/image/file/5612c8f1-4c4b-477c-8471-987285169e6c.jpg'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo illum at pariatur 
                    explicabo accusantium quibusdam praesentium corporis asperiores ab doloremque, distinctio placeat 
                    animi aspernatur natus sint, voluptates dolores enim!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img width="800" src='https://hackr.io/blog/top-javascript-libraries/thumbnail/large'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo illum at pariatur 
                    explicabo accusantium quibusdam praesentium corporis asperiores ab doloremque, distinctio placeat 
                    animi aspernatur natus sint, voluptates dolores enim!</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
