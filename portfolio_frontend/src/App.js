import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ThreeJSBackground from "./components/ThreeJSBackground";
import Introduction from "./components/Introduction";
import Expertise from "./components/Expertise";
import SkillsTimeline from "./components/SkillsTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import RateSection from "./components/RateSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// PUBLIC_INTERFACE
function App() {
  // For smooth scroll on navigation clicks
  const introRef = useRef(null);
  const expertiseRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const rateRef = useRef(null);
  const contactRef = useRef(null);

  // PUBLIC_INTERFACE
  const scrollToSection = (section) => {
    switch (section) {
      case "introduction":
        introRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "expertise":
        expertiseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "rate":
        rateRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="main-root">
      <ThreeJSBackground />
      <Navbar onNavigate={scrollToSection} />
      <section ref={introRef} id="introduction">
        <Introduction onContactClick={() => scrollToSection("contact")} />
      </section>
      <section ref={expertiseRef} id="expertise">
        <Expertise />
      </section>
      <section ref={skillsRef} id="skills">
        <SkillsTimeline />
      </section>
      <section ref={projectsRef} id="projects">
        <ProjectsShowcase />
      </section>
      <section ref={rateRef} id="rate">
        <RateSection />
      </section>
      <section ref={contactRef} id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
