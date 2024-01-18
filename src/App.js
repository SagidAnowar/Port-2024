import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Project from "./components/projects/Project";
import Social from "./components/social/Social";

function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Project />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
