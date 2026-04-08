import React, { useEffect, useRef, useState } from "react";
import "../css/skills.css";

import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap-framework.png";
import javascript from "../images/javascript.png";
import java from "../images/java.png";
import reactLogo from "../images/react.png";
import materialui from "../images/materialui.png";
import node from "../images/node.png";
import express from "../images/express.png";
import mongo from "../images/db.png";
import mysql from "../images/mysql.png";
import git from "../images/git.png";
import springboot from "../images/springboot.png";

const SkillBar = ({ name, percent, img, startAnimation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const animate = () => {
      start += 2;
      if (start <= percent) {
        setProgress(start);
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [startAnimation, percent]);

  return (
    <div className="skillItem">
      <div className="skillHeader">
        <div className="skillInfo">
          <img src={img} alt={name} />
          <span>{name}</span>
        </div>
        <span>{progress}%</span>
      </div>

      <div className="skillBar">
        <div className="skillProgress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

function Skills() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const frontend = [
    { name: "HTML", percent: 90, img: html },
    { name: "CSS", percent: 85, img: css },
    { name: "Bootstrap", percent: 80, img: bootstrap },
    { name: "JavaScript", percent: 86, img: javascript },
    { name: "React JS", percent: 80, img: reactLogo },
    { name: "Material UI", percent: 75, img: materialui },
  ];

  const backend = [
    { name: "Node.js", percent: 75, img: node },
    { name: "Express.js", percent: 70, img: express },
    { name: "Java", percent: 75, img: java },
    { name: "Spring Boot", percent: 75, img: springboot },
  ];

  const databaseTools = [
    { name: "MongoDB", percent: 70, img: mongo },
    { name: "MySQL", percent: 70, img: mysql },
    { name: "Git", percent: 80, img: git },
  ];

  return (
    <>
      <div className="sectionTitleContainer">
        <div className="lineLeft"></div>
        <h1 className="headStyle">Skills</h1>
        <div className="lineRight"></div>
      </div>

      <section id="skillsSection" ref={sectionRef}>
        <div className={`skillsGrid ${hasAnimated ? "showCards" : ""}`}>
          <div className="skillsCard">
            <h2>Frontend</h2>
            {frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} startAnimation={hasAnimated} />
            ))}
          </div>

          <div className="skillsCard">
            <h2>Backend</h2>
            {backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} startAnimation={hasAnimated} />
            ))}
          </div>

          <div className="skillsCard">
            <h2>Database & Tools</h2>
            {databaseTools.map((skill) => (
              <SkillBar key={skill.name} {...skill} startAnimation={hasAnimated} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
