import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-[#fdfbf7] w-full border-b-[3px] border-yellow-900/10 shadow-sm sticky top-0 z-50 font-serif animate-fade-in-down animate-duration-[800ms]">

      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3 animate-slide-in-left animate-duration-1000 py-2">
          <img style={{width:"180px"}} src={logo} alt="Durga Generators - Best Silent Generator on Rent in Jaipur" className="sepia-[0.2] hover:sepia-0 transition-all duration-300 drop-shadow-sm" />
        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium animate-fade-in animate-delay-[500ms]">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/generators"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              Generators
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              How It Works
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              FAQs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-700 border-b-2 border-yellow-700 pb-1"
                  : "text-gray-700 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600/50 pb-1 transition-all"
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={30} className="text-yellow-800" />
          </button>
        </div>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-5 animate-slide-in-right animate-duration-1000">

          <div className="flex items-center gap-3">

            <div className="bg-yellow-200/50 p-3 rounded-full border border-yellow-700/20 shadow-inner">
              <Phone className="w-4 h-4 text-yellow-800" />
            </div>

            <div>

              <p className="text-sm text-gray-500 italic">
                Call Anytime
              </p>

              <a
                href="tel:+918854954525"
                className="font-bold text-gray-900 hover:text-yellow-600 tracking-wide"
              >
                +91 8854954525
              </a>

              <div>
                <a
                  href="https://wa.me/918854954525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  WhatsApp
                </a>
              </div>

            </div>

          </div>

          <Button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold border-2 border-yellow-700 hover:scale-105 transition-transform shadow-[3px_3px_0px_rgba(180,83,9,0.3)]">
             <a
                href="tel:+918854954525"
                className="font-bold w-full h-full flex items-center justify-center"
              >
                Book Now
              </a>
          </Button>

        </div>

      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] md:hidden ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-[300px] bg-[#fdfbf7] p-6 transition-transform duration-500 border-r-4 border-yellow-800/20 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-yellow-900/10">
            <h2 className="font-bold text-xl text-yellow-800 uppercase tracking-widest">Menu</h2>

            <button onClick={() => setMobileMenuOpen(false)} className="bg-yellow-200 p-1 rounded-full text-yellow-800">
              <X size={20} />
            </button>
          </div>

          <ul className="space-y-5 font-medium text-lg">

            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/generators"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                Generators
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                How It Works
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                FAQs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-yellow-600 border-b border-transparent hover:border-yellow-600 pb-1"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>


          <div className="mt-8 border-t border-yellow-900/10 pt-6">

            <a
              href="tel:+918854954525"
              className="block font-bold text-gray-900 text-xl"
            >
              +91 8854954525
            </a>

            <a
              href="https://wa.me/918854954525"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-green-600 font-semibold text-lg hover:underline"
            >
              WhatsApp
            </a>

            <Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-500 text-black border-2 border-yellow-700 shadow-md">
              <a href="tel:+918854954525" className="w-full h-full flex items-center justify-center font-bold">Book Now</a>
            </Button>

          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
