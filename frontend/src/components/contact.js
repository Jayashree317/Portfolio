import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import "../css/contact.css";
import Footer from "./footer";

function Contact() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // 👇 Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://portfolio-7s33.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Something went wrong");

      setSubmitted(true);
      setError(null);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* TITLE */}
      <div className="sectionTitleContactContainer">
        <div className="lineLeft"></div>
        <h1 className="headStyle">Contact</h1>
        <div className="lineRight"></div>
      </div>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        ref={sectionRef}
        className={`contact-container ${show ? "fade-up" : ""}`}
      >
        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className={`contact-info ${show ? "slide-left" : ""}`}>
            <div className="contact-box">
              <FaMapMarkerAlt size={25} />
              <div>
                <strong>Address</strong>
                <div>Coimbatore</div>
              </div>
            </div>

            <div className="contact-box">
              <FaPhoneAlt size={25} />
              <div>
                <strong>Phone</strong>
                <div>
                  <a href="tel:+918667420687">+91 86674 20687</a>
                </div>
              </div>
            </div>

            <div className="contact-box">
              <FaLinkedin size={25} />
              <div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>LinkedIn</strong>
                </a>
              </div>
            </div>

            <div className="contact-box">
              <FaEnvelope size={25} />
              <div>
                <strong>Email</strong>
                <div>
                  <a href="mailto:jshreeweb07@gmail.com">
                    jshreeweb07@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            onSubmit={handleSubmit}
            className={`contact-form ${show ? "slide-right" : ""}`}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

            {submitted && (
              <p className="success-msg">
                Thank you! I'll get back to you soon.
              </p>
            )}

            {error && <p className="error-msg">{error}</p>}
          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
