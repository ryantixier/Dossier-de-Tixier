import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import backgroundImg from "./assets/images/AstroRy.jpeg";
import Sparkle from "react-sparkle";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./App.css";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        minHeight: "100vh",
        // minWidth: "1159px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* <div style={{ position: "relative", width: "100%", height: "100%" }}> */}
      {/* </div> */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Sparkle
            color="white"
            count={20}
            minSize={7}
            maxSize={12}
            overflowPx={0}
            fadeOutSpeed={1}
            flicker={false}
          />
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// incorporate carousel into rendering?
