import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import GeneratorsPage from "./pages/GeneratorsPage";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
// import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

// ScrollToTop component to scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Animated WhatsApp Button */}
      <a
        href="https://wa.me/918854954525" // Assuming this is the number used earlier
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse hover:animate-bounce hover:bg-green-600 transition-all duration-300 border-2 border-white/20"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
};

export default App;
