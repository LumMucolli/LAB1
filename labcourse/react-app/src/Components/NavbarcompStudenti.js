import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
  <Navbar bg="primary" variant="dark">
    <Container style={{marginLeft:'275px'}}>
    <Navbar.Brand href="Login">SMIS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="ParaqitProvimet">ParaqitProvimet</Nav.Link>
      <Nav.Link href="Semestri">Semestri  </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}
