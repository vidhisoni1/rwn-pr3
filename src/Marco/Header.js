import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './Images/logo.png.webp'


function Header() {
  return (
    <>
      <div className='text-center p-2'>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      </div>
      <Navbar  data-bs-theme="dark" className=''>
        <Container className='border-top border-top-1 border-secondary border-bottom border-bottom abs-1 border-secondary pt-2 pb-2'>
          <Nav className="mx-auto fs-6 " >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">MENU</Nav.Link>
            <Nav.Link href="#pricing">GALLERY</Nav.Link>
            <Nav.Link href="#pricing">BLOG</Nav.Link>
            <Nav.Link href="#pricing">PAGES</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;