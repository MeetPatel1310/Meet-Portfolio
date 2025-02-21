
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experiance from "./Components/Experiance/Experiance.jsx";
import Portfolio from "./Components/Portfolio_Section/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiance" element={<Experiance />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
