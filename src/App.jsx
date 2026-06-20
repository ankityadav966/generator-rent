import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GeneratorsPage from "./pages/GeneratorsPage";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
// import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <Routes>

      {/* Home */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* Generators */}

      <Route
        path="/generators"
        element={<GeneratorsPage />}
      />

      {/* About */}

      <Route
        path="/about"
        element={<About />}
      />

      {/* How It Works */}

      <Route
        path="/how-it-works"
        element={<HowItWorks />}
      />

      {/* FAQ */}

      <Route
        path="/faq"
        element={<Faq />}
      />

      {/* Contact */}

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>
  );
};

export default App;
