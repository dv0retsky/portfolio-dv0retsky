import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Artur Dvoretsky </span>
            from <span className="purple"> Moscow, Russia.</span>
            <br />
            I'm Postgraduate Student and Lecturer at RTU MIREA!
            <br />
            I've Master's Degree in 09.04.01 Informatics and Computer Engineering!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participate in Scientific Conferences!
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Scientific Articles!
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing on PlayStation 5!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jason Statham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
