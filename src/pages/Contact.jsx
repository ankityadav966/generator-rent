import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="bg-[#0f1419] text-[#e8e4db] py-28 relative overflow-hidden font-serif">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center relative z-10"
        >

          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold border-b border-yellow-900/50 inline-block pb-1">
            Contact Us
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 text-[#fdfbf7] drop-shadow-md">
            Get In Touch
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-8 leading-9 italic">
            Need generator rental services for your
            project, event or emergency backup?
            Our team is ready to help you 24/7.
          </p>

        </motion.div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-24 bg-[#fdfbf7] font-serif border-y border-yellow-900/20">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-[#f4ebd8] rounded-3xl p-10 shadow-md border border-yellow-900/10 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-200/50 rounded-full shadow-sm"></div>

              <h2 className="text-4xl font-bold mb-8 text-gray-900 drop-shadow-sm">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5 items-start">

                  <Phone
                    className="text-yellow-700 mt-1"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Phone Number
                    </h3>

                    <a
                      href="tel:+918854954525"
                      className="text-gray-700 hover:text-yellow-700 italic text-lg transition-colors"
                    >
                      +91 8854954525
                    </a>

                  </div>

                </div>

                <div className="flex gap-5 items-start">

                  <Mail
                    className="text-yellow-700 mt-1"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Email Address
                    </h3>

                    <a
                      href="mailto:vinayvssaini45254525@gmail.com"
                      className="text-gray-700 hover:text-yellow-700 break-all italic text-lg transition-colors"
                    >
                      vinayvssaini45254525@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex gap-5 items-start">

                  <MapPin
                    className="text-yellow-700 mt-1"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Office Location
                    </h3>

                    <p className="text-gray-700 leading-8 italic text-lg">
                      Govind Nagar,
                      Plot No. 64,
                      Harmada, Jaipur,
                      Near VKI Vishwakarma
                      Industrial Area,
                      Rajasthan, India
                    </p>

                  </div>

                </div>

                <div className="flex gap-5 items-start">

                  <Clock
                    className="text-yellow-700 mt-1"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Working Hours
                    </h3>

                    <p className="text-gray-700 italic text-lg">
                      Monday - Sunday
                    </p>

                    <p className="text-gray-700 italic text-lg">
                      24 Hours Available
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="tel:+918854954525"
                  className="bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 shadow-md border border-yellow-800"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/918854954525"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all hover:-translate-y-1 shadow-md border border-green-700"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

              </div>

            </motion.div>

            {/* RIGHT FORM */}

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-md border-2 border-yellow-900/10 relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200/40 rounded-bl-full shadow-inner"></div>

              <h2 className="text-4xl font-bold mb-8 text-gray-900 drop-shadow-sm">
                Send Inquiry
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-2 border-yellow-900/10 bg-[#fdfbf7] rounded-xl px-5 py-4 outline-none focus:border-yellow-600 transition-colors placeholder:italic placeholder:text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-2 border-yellow-900/10 bg-[#fdfbf7] rounded-xl px-5 py-4 outline-none focus:border-yellow-600 transition-colors placeholder:italic placeholder:text-gray-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-2 border-yellow-900/10 bg-[#fdfbf7] rounded-xl px-5 py-4 outline-none focus:border-yellow-600 transition-colors placeholder:italic placeholder:text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Project / Event Location"
                  className="w-full border-2 border-yellow-900/10 bg-[#fdfbf7] rounded-xl px-5 py-4 outline-none focus:border-yellow-600 transition-colors placeholder:italic placeholder:text-gray-400"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us your generator requirement..."
                  className="w-full border-2 border-yellow-900/10 bg-[#fdfbf7] rounded-xl px-5 py-4 outline-none focus:border-yellow-600 transition-colors placeholder:italic placeholder:text-gray-400 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-700 hover:bg-yellow-600 text-white py-4 rounded-xl font-semibold shadow-md transition-all hover:-translate-y-1 uppercase tracking-widest"
                >
                  Submit Inquiry
                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <section className="bg-[#e8e4db] py-24 font-serif relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10 pointer-events-none"></div>

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 relative z-10">

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-12 text-gray-900 drop-shadow-sm"
          >
            Our Location
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl border-4 border-yellow-900/10 sepia-[0.3]"
          >

            <iframe
              title="location"
              src="https://maps.google.com/maps?q=Harmada%20Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />

          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;