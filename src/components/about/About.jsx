import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        Hello! I am just a front-end developer.
      </p>
    </section>
  );
};

export default About;
