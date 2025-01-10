import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import aklogo from "../assets/img/ak.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
           <Col className="items-center">
            <div className="logo">
              {/* <a href="ak1empire.com"><img src={aklogo} alt="logo" /></a> */}
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/+2347089795617"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="https://bsky.app/profile/unknownvai.com"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://dsc.gg/vai-server"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://t.me/+gdwOfBgmGuY0NTZk"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <div className="cpytex">
             <p>No. 1 Branding Service<br></br>Copyright 2025. All Rights Reserved.</p>
            </div>
          </Col>
        </Row> 
      </Container>
    </footer>
  )
}
