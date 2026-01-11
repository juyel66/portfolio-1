import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <section id="banner">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
