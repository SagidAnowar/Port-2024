import "./App.css";
import { GlobalStyles } from "./global.styles";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import ThankYou from "./pages/thank-you/Thank-you";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import MorningAroma from "./pages/morning-aroma/Morning-Aroma";
import YoutubeV2 from "./pages/youtube-2.0/Youtube-2.0";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PROJECT_DATA from "./project-data";
import ScrollToTop from "./components/scroll-to-top/Scroll-to-top";

function Portfolio() {
  const button_text = ["GO TO PORTFOLIO", "VIEW RESUME", "VIEW PROJECT"];
  const project_data = PROJECT_DATA;
  const location = useLocation();

  return (
    <>
      <div className="App">
        <div className="max-width">
          <GlobalStyles />
          <Nav />
          <AnimatePresence>
            <ScrollToTop />
            <Routes key={location.pathname} location={location}>
              <Route
                exact
                path="/"
                element={<Home button={button_text} text={project_data} />}
              />
              <Route exact path="/resume" element={<Resume />} />
              <Route
                exact
                path="/projects"
                element={<Projects button={button_text} text={project_data} />}
              />
              <Route
                exact
                path="/morning-aroma"
                element={<MorningAroma text={PROJECT_DATA.morning_aroma} />}
              />
              <Route
                exact
                path="/youtube-V2"
                element={<YoutubeV2 text={PROJECT_DATA.youtube_V2} />}
              />
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
