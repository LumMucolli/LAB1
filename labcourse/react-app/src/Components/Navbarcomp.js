import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">SMIS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Departamenti">Departamenti</Nav.Link>
      <Nav.Link href="Lendet">Lenda</Nav.Link>
      <Nav.Link href="Profesori">Profesori</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}
