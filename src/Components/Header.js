import React, { Component } from 'react'
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import logo from './logo192.png'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contacts from '../Pages/Contacts'

export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                <Navbar sticky='top' collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> React Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-contols="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto my-2 my-lg-0">
                                <Nav.Link as={NavLink} to="/"> Home </Nav.Link>
                                <Nav.Link as={NavLink} to="/about"> About us </Nav.Link>
                                <Nav.Link as={NavLink} to="/contacts"> Contacts </Nav.Link>
                                <Nav.Link as={NavLink} to="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Routes>
                        <Route path="/" element={< Home />} />
                        <Route path="/about" element={< About />} />
                        <Route path="/contacts" element={< Contacts />} />
                        <Route path="/blog" element={< Blog />} />
                    </Routes>
                </Router>
            </>
        )
    }
}
