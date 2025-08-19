import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./common/Footer";

const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
