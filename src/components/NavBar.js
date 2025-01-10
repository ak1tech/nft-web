import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/web3.gif';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>𝗛𝗼𝗺𝗲</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀</Nav.Link>
              <Nav.Link href="#vai" className={activeLink === 'vai' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('vai')}>𝗩𝗔𝗜</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://wa.me/+2347089795617"><img src={navIcon1} alt="" /></a>
                {/* <a href="https://bsky.app/profile/unknownvai.com"><img src={navIcon2} alt="" /></a> */}
                <a href="https://dsc.gg/vai-server"><img src={navIcon3} alt="" /></a>
                <a href="https://t.me/+gdwOfBgmGuY0NTZk"><img src={navIcon4} alt="" /></a>
              </div>
                <a href="mailto:g@unknownvai.com" className="navbarbutton"><span className="vvd">Email</span></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
