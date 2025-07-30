import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaVk, FaTelegramPlane } from "react-icons/fa"; 

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Artur Dvoretsky</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/dv0retsky"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://vk.com/arturdvoretsky"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVk /> 
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/arturdvoretsky"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane /> 
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/arturdvoretsky?igsh=dDFmYnFqM2huOG9n&utm_source=qr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
