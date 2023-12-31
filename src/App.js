import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Sparkle from "react-sparkle";
import "./App.css";

function App() {
  return (
    <div className="background-img">
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// incorporate carousel into rendering?
