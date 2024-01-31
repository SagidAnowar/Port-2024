import "./App.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Portfolio() {
  return (
    <>
      <div className="App">
        <Nav />
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Portfolio;
