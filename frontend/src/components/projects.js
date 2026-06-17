import React from "react";
import Slider from "react-slick";
import "../css/project.css";
import happypaws from "../images/happypaws.png";
import voicetodolist from "../images/voice-todo.png";

const projects = [
  {
    title: "Happy Paws",
    description:
      "A pet care website that helps users explore pet services, adoption options, and pet-related products with a clean and responsive UI.",
    image: happypaws,
    link: "https://happypaws-site.netlify.app/",
    github: "https://github.com/Jayashree317/HappyPaws",
  },
  {
    title: "Voice Todo List",
    description:
      "A smart todo list application with voice command support, allowing users to add, delete, and manage tasks hands-free using speech recognition.",
    image: voicetodolist,
    link: "https://voice-todo-list.netlify.app/",
    github: "https://github.com/Jayashree317/Voice_Todo_List",
  },
  {
    title: "Employee Management System",
    description:
     "A full-stack Employee Management System developed using Java Spring Boot, MySQL, HTML, CSS and Thymeleaf.This application helps manage employees and departments with CRUD operations and responsive UI.",
    image: "/images/employee.png",
    // link: "https://your-ecommerce-demo.netlify.app",
    github: "https://github.com/Jayashree317/Employee_Management_System",
  },
  {
    title: "Project Management Dashboard",
    description:
      "A task management system with drag-and-drop features, CRUD operations, and user role management.",
    image: "/images/dashboard.png",
    link: "https://your-dashboard-demo.netlify.app",
    github: "https://github.com/Jayashree317/HappyPaws",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app using API integration to show real-time weather data by location.",
    image: "/images/weather.png",
    link: "https://your-weather-app.netlify.app",
    github: "https://github.com/Jayashree317/HappyPaws",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and contact information.",
    image: "/images/portfolio.png",
    link: "https://your-portfolio.netlify.app",
    github: "https://github.com/Jayashree317/HappyPaws",
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="sectionTitleContainer" id="project">
        <div className="lineLeft"></div>
        <h1 className="headStyle">Projects</h1>
        <div className="lineRight"></div>
      </div>

      <div className="project-slider">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-main1">Live Demo</button>
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-main1">Code</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Projects;
