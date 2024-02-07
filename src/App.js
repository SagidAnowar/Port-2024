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
import OpenAiArticleSummarizer from "./pages/openai-article-summarizer/Openai-article-summarizer";
import YoutubeV2 from "./pages/youtube-2.0/Youtube-2.0";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TEXT_DATA from "./text-data";

function Portfolio() {
  const button_text = ["GO TO PORTFOLIO", "VIEW RESUME", "VIEW PROJECT"];
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
                element={<Home button={button_text} text={description_text} />}
              />
              <Route exact path="/resume" element={<Resume />} />
              <Route
                exact
                path="/projects"
                element={
                  <Projects button={button_text} text={description_text} />
                }
              />
              <Route
                exact
                path="/openai_article_summarizer"
                element={<OpenAiArticleSummarizer />}
              />
              <Route exact path="/youtube_V2" element={<YoutubeV2 />} />
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
