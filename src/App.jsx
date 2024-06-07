import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "aos/dist/aos.css";
import "./App.css";
import About from "./components/about/About";

function App() {
  return (
    <div className="App container">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
