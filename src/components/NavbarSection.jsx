import React from 'react'
// navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// icon
import { FcLike } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
function NavbarSection() {
  return (
    <div>
        <div className='bg-dark'>
            <div className='container '>
               <div className='mx-5'>
               <p className='text-light d-inline '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
               <h4 className='text-light d-inline  ms-4'>ShopNow</h4>
               </div>
            </div>
        </div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='me-2 mt-4'>
        <Navbar.Brand href="#home">Exclusiv</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav className='nav-link'>Home</Nav>
            <Nav className='nav-link'>Contakt</Nav>
            <Nav className='nav-link'>About</Nav>
            <Nav className='nav-link'>Sign in</Nav>
          </Nav>
          <input type="search" placeholder='qidiruv' className='w-25 form-control' />
          <Button variant="outline-success">Search</Button>
          <FcLike className='ms-3 icons'/>
          <TiShoppingCart className='ms-3 icons'/>
          <CgProfile className='ms-3 icons text-light bg-danger rounded-5 p-1'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    </div>
  )
}

export default NavbarSection
