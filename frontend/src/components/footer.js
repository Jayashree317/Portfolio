import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    // backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "10px 10px",
    fontSize: "15px",
    borderTop: "2px solid #ffd700",
    marginTop: "auto",
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#ffd700",
    fontSize: "22px",
    transition: "transform 0.2s",
  };

  const iconHover = {
    transform: "scale(1.2)",
  };

  const icons = [
    {
      href: "https://github.com/Jayashree317",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/jayashree-s-987006285/",
      icon: <FaLinkedin />,
    },
    {
      href: "mailto:jshreeweb07@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: "10px" }}>
        {icons.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            // rel="noopener noreferrer"
            style={iconStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div>
        © {new Date().getFullYear()} Jayashree S. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
