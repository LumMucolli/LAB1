import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="Login">SMIS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Departamenti">Departamenti</Nav.Link>
      <Nav.Link href="Lendet">Lenda</Nav.Link>
      <Nav.Link href="Profesori">Profesori</Nav.Link>
      <Nav.Link href="Studenti">Studenti</Nav.Link>
      <Nav.Link href="Provimet">Provimet</Nav.Link>
      <Nav.Link href="PiketProvimit">PiketProvimit</Nav.Link>
      <Nav.Link href="ParaqitProvimet">ParaqitProvimet</Nav.Link>
      <Nav.Link href="Semestri">Semestri  </Nav.Link>
      <Nav.Link href="Login" style={{marginLeft: '45%', color: "white"}}>LOGOUT</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}
