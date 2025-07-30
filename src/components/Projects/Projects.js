import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dvoretsky from "../../Assets/Projects/dvoretsky.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 1"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
              demoLink="https://github.com/dv0retsky"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 2"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
              demoLink="https://github.com/dv0retsky"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 3"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
              demoLink="https://github.com/dv0retsky"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 4"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
              demoLink="https://github.com/dv0retsky"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 5"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvoretsky}
              isBlog={false}
              title="Project 6"
              description="Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description. Here you can reflect all the key information about your project to interest the user! Example of a project description."
              ghLink="https://github.com/dv0retsky"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
