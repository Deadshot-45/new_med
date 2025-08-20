import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from "./common/ScrollToTop";
import ErrorBoundary from "./common/ErrorBoundary";
import PageNotFound from "./common/PageNotFound";
import About from "./Pages/About";
import Services from "./Pages/Services";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // Scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Navbar
          cartCount={cart.length}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Add other routes as needed */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
