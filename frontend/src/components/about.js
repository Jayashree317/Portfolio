import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/about.css";

import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap-framework.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import node from "../images/node.png";
import db from "../images/db.png";
import git from "../images/git.png";
import express from "../images/express.png";
import vs from "../images/visual-studio-code.png";

function About() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // run only first time
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="sectionTitleContainer">
        <div className="lineLeft"></div>
        <h1 className="headStyle">ABOUT ME</h1>
        <div className="lineRight"></div>
      </div>

      <Container fluid className="min-vh-100 d-flex align-items-center">
        <Row className="w-100 px-3 px-md-5 align-items-center row-container">
          {/* LEFT CONTENT */}
          <Col
            xs={12}
            lg={6}
            md={11}
            className={`text-white about-text order-2 order-lg-1 ${show ? "show" : ""}`}
          >
            <div className="about-content-box">
              <h3 id="about-content">
                <p>
                  Hi! I’m Jaya Shree, a Full Stack Developer who loves building
                  fast, responsive, and useful web applications.
                </p>

                <ul className="list-technology">
                  <li>
                    <strong>Frontend →</strong>{" "}
                    <span>React, HTML, CSS, Bootstrap</span>
                  </li>
                  <li>
                    <strong>Backend →</strong>{" "}
                    <span>Node.js, Express, Java, Spring Boot</span>
                  </li>
                  <li>
                    <strong>Database →</strong>
                    <span> MongoDB, MySQL</span>
                  </li>
                </ul>

                <p>
                  I completed my internship at App Innovation Technology where I
                  gained real-world development experience.
                </p>

                <p>
                  I enjoy solving problems, learning new tools, and building
                  applications that people actually use.
                </p>
              </h3>
            </div>
          </Col>

          {/* RIGHT IMAGE STACK */}
          <Col
            xs={12}
            lg={6}
            md={5}
            className={`d-flex justify-content-center about-images order-1 order-lg-2 ${show ? "show" : ""}`}
          >
            <div className="gallery">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={bootstrap} alt="Bootstrap" />
              <img src={javascript} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={node} alt="Node.js" />
              <img src={express} alt="Express.js" />
              <img src={db} alt="MongoDB" />
              <img src={vs} alt="VS Code" />
              <img src={git} alt="Git" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
