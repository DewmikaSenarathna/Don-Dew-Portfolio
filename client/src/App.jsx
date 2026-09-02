import ScrollChrome from "./components/ScrollChrome.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollChrome />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
