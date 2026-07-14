import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        {/* Floating Animated WhatsApp Button */}
        <a
          href="https://wa.me/918854954525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-600 transition-all duration-300 border-2 border-white/20 flex items-center justify-center w-14 h-14 cursor-pointer hover:scale-110 shadow-lg animate-pulse"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Floating Call Button */}
        <a
          href="tel:+918854954525"
          className="bg-green-600 text-white p-3 rounded-full shadow-[0_0_15px_rgba(22,163,74,0.6)] hover:bg-green-700 transition-all duration-300 border-2 border-white/20 flex items-center justify-center w-14 h-14 cursor-pointer hover:scale-110 shadow-lg"
          title="Call Us"
        >
          <FaPhoneAlt size={22} />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200 flex items-center justify-center w-14 h-14 cursor-pointer hover:scale-110 shadow-md"
            title="Scroll to Top"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default App;
