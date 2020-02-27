import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="/">Swansonews</Navbar.Brand>
          <Nav className="navLinks">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;