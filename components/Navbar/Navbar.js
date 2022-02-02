import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" fixed="">
        <Container>
          <Navbar.Brand href="#home">
            <div className={styles.logo}>
              <span className={`text-dark ${styles.mega}`}>Mega</span>
              <span className={styles.law}>Law</span>
              <span className={`d-block text-dark ${styles.partners}`}>Partners</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mt-3 mt-sm-0 ">
              <Nav.Link href="#home" className="px-3 poppins-medium">Home</Nav.Link>
              <Nav.Link href="#link" className="px-3 poppins-medium">About Us</Nav.Link>
              <Nav.Link href="#link" className="px-3 poppins-medium">Services</Nav.Link>
              <Nav.Link href="#link" className="px-3 poppins-medium">Blog</Nav.Link>
            </Nav>
            <Nav.Link>
              <button className={`btn text-white ${styles.btn}`}>Contact Us</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
