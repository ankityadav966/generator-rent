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
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f1419] text-[#e8e4db] pt-16 pb-8 font-serif border-t-4 border-yellow-900/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Footer */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo Section */}

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >

            <div className="flex items-center gap-3">
              <img style={{width:"180px"}} src={logo} alt="Logo" className="sepia-[0.3] rounded-md border border-yellow-900/40 p-1 bg-white" />
            </div>

            <p className="text-gray-400 mt-6 leading-7 italic">
              Your trusted partner for reliable and
              affordable generator rental services.
              Power anytime, anywhere.
            </p>

            {/* Social Icons */}
 
            <div className="flex gap-4 mt-8">

              {/* Facebook */}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="border border-yellow-700 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-colors cursor-pointer shadow-md">
                <FaFacebookF size={16} />
              </motion.div>

              {/* Instagram */}
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} className="border border-yellow-700 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-colors cursor-pointer shadow-md">
                <FaInstagram size={16} />
              </motion.div>

              {/* Youtube */}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="border border-yellow-700 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-colors cursor-pointer shadow-md">
                <FaYoutube size={16} />
              </motion.div>

              {/* Twitter/X */}
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} className="border border-yellow-700 w-11 h-11 rounded-full flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-colors cursor-pointer shadow-md">
                <FaXTwitter size={16} />
              </motion.div>

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <h2 className="text-xl font-bold mb-6 text-yellow-600 tracking-wide border-b border-yellow-900/50 inline-block pb-1">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/" className="block w-full">Home</Link>
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/generators" className="block w-full">Generators</Link>
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/about" className="block w-full">About Us</Link>
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/how-it-works" className="block w-full">How It Works</Link>
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/faq" className="block w-full">FAQs</Link>
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                <Link to="/contact" className="block w-full">Contact Us</Link>
              </li>

            </ul>

          </motion.div>

          {/* Services */}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >

            <h2 className="text-xl font-bold mb-6 text-yellow-600 tracking-wide border-b border-yellow-900/50 inline-block pb-1">
              Our Services
            </h2>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Home Use
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Office Use
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Events
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Construction Sites
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Industries
              </li>

              <li className="hover:text-yellow-500 hover:translate-x-1 transition-transform cursor-pointer">
                Emergency Backup
              </li>

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >

            <h2 className="text-xl font-bold mb-6 text-yellow-600 tracking-wide border-b border-yellow-900/50 inline-block pb-1">
              Contact Us
            </h2>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <Phone className="text-yellow-600" size={18} />
                <a
                  href="tel:+918854954525"
                  className="hover:text-yellow-500 transition-colors"
                >
                  +91 8854954525
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-600" size={18} />
                <a
                  href="mailto:vinayvssaini45254525@gmail.com"
                  className="hover:text-yellow-500 break-all transition-colors"
                >
                  vinayvssaini45254525@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-yellow-600 shrink-0" size={18} />
                <p className="italic">
                  Govind Nagar, Plot No. 64,
                  Harmada, Jaipur,
                  Near VKI,
                  Rajasthan, India
                </p>
              </div>

            </div>

          </motion.div>

          {/* Newsletter */}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >

            <h2 className="text-xl font-bold mb-6 text-yellow-600 tracking-wide border-b border-yellow-900/50 inline-block pb-1">
              Newsletter
            </h2>

            <p className="text-gray-400 leading-7 italic">
              Subscribe to get updates and
              latest offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-6 bg-[#1a2026] border border-yellow-900/40 rounded-sm px-4 py-3 outline-none focus:border-yellow-600 text-[#e8e4db] placeholder:text-gray-600 shadow-inner"
            />

            <button className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-semibold py-3 rounded-sm mt-4 transition border border-yellow-600 shadow-sm uppercase tracking-wider text-sm">
              Subscribe
            </button>

          </motion.div>

        </div>

        {/* Bottom Footer */}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="border-t border-yellow-900/30 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5"
        >

          <p className="text-gray-500 text-sm">
           © 2026 Generator Rent. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">

            <p className="hover:text-yellow-600 cursor-pointer transition-colors">
              Privacy Policy
            </p>

            <p className="hover:text-yellow-600 cursor-pointer transition-colors">
              Terms & Conditions
            </p>

          </div>

        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;
