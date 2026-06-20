import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.jpeg"


const Footer = () => {
  return (
    <footer className="bg-[#03152e] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo Section */}

          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">
          <img style={{width:"200px"}} src={logo} alt="" />

              {/* <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                ⚡
              </div>

              <div>

                <h1 className="text-2xl font-bold leading-none">
                  GENERATOR
                </h1>

                <p className="text-yellow-500 font-semibold">
                  RENT
                </p>

              </div> */}

            </div>

            <p className="text-gray-300 mt-6 leading-7">
              Your trusted partner for reliable and
              affordable generator rental services.
              Power anytime, anywhere.
            </p>

            {/* Social Icons */}
 
<div className="flex gap-4 mt-8">

  {/* Facebook */}

  <div className="border border-yellow-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer">
    <FaFacebookF size={16} />
  </div>

  {/* Instagram */}

  <div className="border border-yellow-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer">
    <FaInstagram size={16} />
  </div>

  {/* Youtube */}

  <div className="border border-yellow-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer">
    <FaYoutube size={16} />
  </div>

  {/* Twitter/X */}

  <div className="border border-yellow-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer">
    <FaXTwitter size={16} />
  </div>

</div>


          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li className="hover:text-yellow-500 cursor-pointer">
                Home
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Generators
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                How It Works
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                FAQs
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Contact Us
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Our Services
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li className="hover:text-yellow-500 cursor-pointer">
                Home Use
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Office Use
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Events
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Construction Sites
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Industries
              </li>

              <li className="hover:text-yellow-500 cursor-pointer">
                Emergency Backup
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Contact Us
            </h2>

            <div className="space-y-5 text-gray-300">

  <div className="flex gap-3">

    <Phone className="text-yellow-500" size={18} />

    <a
      href="tel:+918854954525"
      className="hover:text-yellow-500"
    >
      +91 8854954525
    </a>

  </div>

  <div className="flex gap-3">

    <Mail className="text-yellow-500" size={18} />

    <a
      href="mailto:vinayvssaini45254525@gmail.com"
      className="hover:text-yellow-500 break-all"
    >
      vinayvssaini45254525@gmail.com
    </a>

  </div>

  <div className="flex gap-3">

    <MapPin className="text-yellow-500 shrink-0" size={18} />

    <p>
      Govind Nagar, Plot No. 64,
      Harmada, Jaipur,
      Near VKI (Vishwakarma Industrial Area),
      Rajasthan, India
    </p>

  </div>

</div>

          </div>

          {/* Newsletter */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Newsletter
            </h2>

            <p className="text-gray-300 leading-7">
              Subscribe to get updates and
              latest offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-6 bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
            />

            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg mt-4 transition">
              Subscribe
            </button>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-sm">
           © 2026 Generator Rent. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">

            <p className="hover:text-yellow-500 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-yellow-500 cursor-pointer">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
