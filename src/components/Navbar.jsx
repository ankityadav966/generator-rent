import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white w-full shadow-sm">

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

          <li className="text-yellow-500 cursor-pointer">
            Home
          </li>

          <li className="cursor-pointer">
            Generators
          </li>

          <li className="cursor-pointer">
            About Us
          </li>

          <li className="cursor-pointer">
            How It Works
          </li>

          <li className="cursor-pointer">
            FAQs
          </li>

          <li className="cursor-pointer">
            Contact Us
          </li>

        </ul>

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

              <h2 className="font-bold">
<div>
  <p className="text-sm text-gray-500">
    Call Anytime
  </p>

  <div className="flex items-center gap-3">

    {/* Phone Call */}

    <a
      href="tel:+916350650966"
      className="font-bold hover:text-yellow-500 transition"
    >
      +91 6350650966
    </a>

    {/* WhatsApp */}

    <a
      href="https://wa.me/916350650966"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 font-semibold text-sm"
    >
      WhatsApp
    </a>

  </div>
</div>


              </h2>
            </div>

          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
            Book Now
          </Button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;