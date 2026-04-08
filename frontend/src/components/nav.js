import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import "../css/nav.css";
import StarField from "./starbg";
import useScrollOffset from "./offset";

function Navigation() {
  const offset = useScrollOffset();
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <StarField />
      <Navbar
        // bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        expanded={expanded}
        className="px-3 navbar"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand>
            <h1
              smooth={true}
              duration={500}
              onClick={() => setExpanded(false)}
              className="logo"
            >
              Portfolio
              {/* JAYASHREE */}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={offset - 170} // 🔥 extra lift for hero
                className="ms-3 nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={offset} // 🔥 extra lift for hero
                className="ms-3 nav-link"
                onClick={() => setExpanded(false)}
              >
                About
              </Link>
              {[ "skills", "my Projects"].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={offset -40}
                  activeClass="active"
                  spy={true}
                  className="ms-3 nav-link"
                  onClick={() => setExpanded(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={offset -40}
                onClick={() => setExpanded(false)}
              >
                <Button variant="outline-warning" className="ms-3 btn-main">
                  Contact Me
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div id="gap"></div> */}
      {/* PAGE SECTIONS  */}
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="my Projects" style={{ scrollMarginTop: "100px" }}>
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Navigation;
