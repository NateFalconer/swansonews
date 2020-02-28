import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="/">Give Me More Swansonews!</Navbar.Brand>
          <Nav className="navLinks">
            <Link className="navlink" to="/about">What the hell is this?</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;