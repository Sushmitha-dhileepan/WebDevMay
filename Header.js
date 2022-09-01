import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Header({ searchResultHandler, inputHandler }) {
    const x = useNavigate();
    const RedirectToHome = (e) => {
        if (e.key === 'Enter') {
            return x('/')
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Apple</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"} className="nav-link text-decoration-none">Homepage</Link>
                        <Link to={"/contact"} className="nav-link text-decoration-none">Contact</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <Link to={"/movies/adventure"} onClick={searchResultHandler} className="dropdown-item text-decoration-none">Adventure</Link>

                            {/* <NavDropdown.Divider /> */}
                            <Link to={"/movies/comedy"} className="dropdown-item text-decoration-none">Comedy</Link>

                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex flex-row'>
                        <Link to={'/#social'}><FaTwitter fill='white' className="display-6 bg-primary p-1 rounded-1 mx-1" /></Link>
                        <Link to={'/#social'}><FaLinkedin fill='white' className="display-6 bg-primary p-1 rounded-1 me-1" /></Link>
                        <Link to={'/#social'}><FaInstagram fill='white' className="display-6 bg-instagram p-1 rounded-1" /></Link>
                    </Nav>
                    <Form className='d-flex'>
                        <Form.Control
                            onChange={inputHandler}
                            type="search"
                            onKeyDown={RedirectToHome}
                            placeholder='Search'
                            className='me-2'
                            aria-label="Search"
                        />

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header