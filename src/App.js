import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import backgroundImg from "./assets/images/lil-space-ryguy.jpeg";
import Sparkles from "react-sparkle";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        minHeight: "100vh",
        // minWidth: "1159px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Sparkles
        color="white"
        count={20}
        minSize={7}
        maxSize={12}
        overflowPx={80}
        fadeOutSpeed={5}
        flicker={false}
      />
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
