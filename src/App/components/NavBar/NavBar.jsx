import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
const NavBar = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <Navbar bg="primary" variant="dark">
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="#"><div style={{color:'WHITE', fontSize:'50px'}}>Meme<span style={{color:'tomato'}}>.</span><span style={{fontStyle:'italic'}}>js</span></div></Navbar.Brand></LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/thumbnail"><Button >Thumbnail</Button></LinkContainer>
          <LinkContainer to="/editor"><Button>New meme</Button></LinkContainer>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>

  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
