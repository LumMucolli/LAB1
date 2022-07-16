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
      <NavLink to="" style={{ textDecoration:"none", color:"lightblue" }}>Departamenti</NavLink>
      <NavLink to="lendet" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Lenda</NavLink>
      <NavLink to="profesori" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Profesori</NavLink>
      <NavLink to="studenti" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Studenti</NavLink>
      <NavLink to="provimet" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Provimet</NavLink>
      <NavLink to="piketProvimit" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>PiketProvimit</NavLink>
      <NavLink to="paraqitProvimet" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>ParaqitProvimet</NavLink>
      <NavLink to="semestri" style={{ textDecoration:"none", color:"lightblue",  marginLeft:"10px" }}>Semestri  </NavLink>
    </Nav>
    </Container>
  </Navbar>
      </div>
    )
  }
}
