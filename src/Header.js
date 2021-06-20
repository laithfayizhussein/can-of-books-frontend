import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import LogoutButton from './LogoutButton';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(

      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">My Favorite Books</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {isAuthenticated &&
          <LogoutButton />
          }
    </Nav>
    
      {/* //     TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
    </Container>
  </Navbar>



    )
  }
}

export default withAuth0(Header);