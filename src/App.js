import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
import Sparkle from "react-sparkle";
import backgroundImg from "./assets/images/AstroRy.jpeg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        minHeight: "100vh",
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
            fadeOutSpeed={0.5}
            flicker={false}
          />
          <div className="container">
            <Nav />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
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
