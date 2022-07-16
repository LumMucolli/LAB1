import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
  <Navbar bg="primary" variant="dark">
    <Container style={{marginLeft:'275px'}}>
    <Navbar.Brand href="Login">SMIS</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to="paraqitProvimet" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>ParaqitProvimet</NavLink>
      <NavLink to="semestri" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Semestri  </NavLink>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}
