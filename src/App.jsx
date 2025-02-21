
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experiance from "./Components/Experiance/Experiance.jsx";
import Portfolio from "./Components/Portfolio_Section/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";


function App() {
  return (
    <div>
      
      

      <Router>
        <Routes>
          {/* Define paths and associate components */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiance" element={<Experiance />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact/>} />

          {/* Catch-all route for 404 pages */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
