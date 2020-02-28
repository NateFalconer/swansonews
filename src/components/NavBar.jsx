import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="topbar">
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="/">Give me more Swansonews!</Navbar.Brand>
          <Nav className="navLinks">
            <Link className="navlink" to="/about">What the hell is this?</Link>
            <a href="https://www.youtube.com/watch?v=Tch4v0L0GHA" target="_blank" className="ytlink">Best of Ron Swanson</a>
          </Nav>
        </Navbar>
      </div>
        );
      }
    }
    
export default NavBar;