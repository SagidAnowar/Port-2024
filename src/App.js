import "./App.css";
import { GlobalStyles } from "./global.styles";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import ThankYou from "./pages/thank-you/Thank-you";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IMAGE_DATA from "./image-data";
import TEXT_DATA from "./text-data";

function Portfolio() {
  const images = IMAGE_DATA;
  const button_text = ["GO TO PORTFOLIO", "VIEW PROJECT"];
  const description_text = TEXT_DATA;

  return (
    <>
      <div className="App">
        <div className="max-width">
          <GlobalStyles />
          <Nav />
          <AnimatePresence mode="wait" initial={false}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    images={images}
                    button={button_text}
                    text={description_text}
                  />
                }
              />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/thank-you" element={<ThankYou />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
