
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white w-full shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
            ⚡
          </div>

          <div>
            <h1 className="font-bold text-xl leading-none">
              GENERATOR
            </h1>

            <p className="text-yellow-500 font-semibold text-sm">
              RENT
            </p>
          </div>

        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
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
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
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
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
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
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
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
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
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
                  ? "text-yellow-500"
                  : "hover:text-yellow-500 transition"
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
        {/* Mobile Menu Button */}
<div className="md:hidden">
  <button onClick={() => setMobileMenuOpen(true)}>
    <Menu size={30} />
  </button>
</div>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-5">

          <div className="flex items-center gap-3">

            <div className="bg-yellow-100 p-3 rounded-full">
              <Phone className="w-4 h-4" />
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Call Anytime
              </p>

              <a
                href="tel:+918854954525"
                className="font-bold hover:text-yellow-500"
              >
                +91 8854954525
              </a>

              <div>

                <a
                  href="https://wa.me/918854954525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-sm font-semibold"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
            Book Now
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
    className={`absolute inset-0 bg-black/50 transition-all duration-300 ${
      mobileMenuOpen ? "opacity-100" : "opacity-0"
    }`}
  />

  {/* Sidebar */}
  <div
    className={`absolute left-0 top-0 h-full w-[300px] bg-white p-6 transition-all duration-300 ${
      mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between mb-8">
      <h2 className="font-bold text-xl">Menu</h2>

      <button onClick={() => setMobileMenuOpen(false)}>
        <X />
      </button>
    </div>

    <ul className="space-y-5 font-medium">

      <li>
        <NavLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/generators"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          Generators
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/how-it-works"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          How It Works
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/faq"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          FAQs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="block hover:text-yellow-500"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>


    <div className="mt-8 border-t pt-6">

      <a
        href="tel:+918854954525"
        className="block font-bold"
      >
        +91 8854954525
      </a>

      <a
        href="https://wa.me/918854954525"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-green-500 font-semibold"
      >
        WhatsApp
      </a>

      <Button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-400 text-black">
        Book Now
      </Button>

    </div>
    
  </div>
</div>

    </nav>
  );
};

export default Navbar;
