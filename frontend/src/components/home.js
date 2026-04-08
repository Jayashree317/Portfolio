import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css";
import profile from "../images/profileimg1.png";

function Home() {
  return (
    <div className="home-container min-vh-100 d-flex align-items-center">
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="profile-wrapper">
            <div className="profile-circle">
              <img src={profile} alt="Jaya Shree" />
            </div>
          </Col>

          <Col xs={12} md={8} lg={6} className="text-white">
            <div className="main-container">
              <h2 className="typing-animation">
                <span className="text">Hi, I’m Jaya Shree</span>
                <span className="emoji"> 👋</span>
              </h2>

              <h3 className="sub-content">Java / Full Stack Developer</h3>

              <h3 className="sec-content">
                I turn ideas into functional web applications. From responsive
                frontends to powerful backend APIs, I build complete solutions
                with Java, Spring Boot, and React.
              </h3>

              <span className="span1">
                Tech excites me. Design inspires me ❤️
              </span>

              <div className="main-cv justify-content-center">
                <Button
                  href="/Jayashreeresume.pdf"
                  download
                  className="home-btn"
                >
                  Download CV
                </Button>

                <a
                  href="/Jayashreeresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn home-btn"
                >
                  View CV
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
