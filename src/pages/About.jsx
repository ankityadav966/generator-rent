import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Clock3,
  Truck,
  Zap,
  Phone
} from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="bg-[#0f1419] text-[#e8e4db] py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 text-center relative z-10"
        >

          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold border-b border-yellow-900/50 inline-block pb-1">
            About Generator Rent
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 text-[#fdfbf7] drop-shadow-md font-serif">
            Powering Your Business,
            Events & Projects
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-8 leading-9 italic font-serif">
            We provide reliable generator rental services
            for industries, construction sites, events,
            commercial buildings and emergency backup
            requirements across the region.
          </p>

        </motion.div>

      </section>

      {/* COMPANY STORY */}

      <section className="py-24 bg-[#fdfbf7] font-serif">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >

              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200"
                alt=""
                className="rounded-3xl shadow-xl sepia-[0.3] border-4 border-yellow-900/10 hover:sepia-0 transition-all duration-700"
              />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <span className="text-yellow-700 font-semibold uppercase tracking-widest border-b border-yellow-700/30 inline-block pb-1">
                Our Story
              </span>

              <h2 className="text-5xl font-bold mt-4 text-gray-900 drop-shadow-sm">
                Trusted Generator Rental Partner
              </h2>

              <p className="text-gray-700 mt-8 leading-8 text-lg italic">
                Generator Rent was founded with a simple mission:
                provide dependable power solutions whenever and
                wherever customers need them.
              </p>

              <p className="text-gray-700 mt-6 leading-8 text-lg italic">
                Over the years, we have supplied generators
                for construction projects, industrial operations,
                corporate events, weddings, exhibitions,
                hospitals and emergency situations.
              </p>

              <p className="text-gray-700 mt-6 leading-8 text-lg italic">
                Our experienced team ensures every generator
                is maintained to the highest standards,
                guaranteeing reliable performance and safety.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MISSION VISION */}

      <section className="bg-[#f4ebd8] py-24 font-serif relative border-y border-yellow-900/20">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-[#fdfbf7] p-10 rounded-3xl shadow-md border-2 border-yellow-900/10 relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200/40 rounded-bl-full shadow-inner"></div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
                Our Mission
              </h2>

              <p className="text-gray-700 leading-8 text-lg italic">
                To deliver affordable, reliable and
                uninterrupted power solutions while
                maintaining exceptional customer service
                and operational excellence.
              </p>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#fdfbf7] p-10 rounded-3xl shadow-md border-2 border-yellow-900/10 relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200/40 rounded-bl-full shadow-inner"></div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
                Our Vision
              </h2>

              <p className="text-gray-700 leading-8 text-lg italic">
                To become the most trusted generator rental
                company by providing innovative power
                solutions and unmatched customer support.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="text-center">

            <h2 className="text-5xl font-bold">
              Why Choose Us
            </h2>

            <p className="text-gray-500 mt-5">
              Reliable generators backed by expert support.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            <div className="bg-gray-50 rounded-3xl p-8">
              <ShieldCheck className="text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-6">
                Quality Equipment
              </h3>
              <p className="text-gray-600 mt-4">
                Regularly serviced and tested generators.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <Clock3 className="text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-6">
                24/7 Support
              </h3>
              <p className="text-gray-600 mt-4">
                Immediate technical assistance whenever needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <Truck className="text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-6">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-4">
                Quick transportation and installation service.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <Zap className="text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-6">
                Reliable Power
              </h3>
              <p className="text-gray-600 mt-4">
                Continuous power for every situation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-black text-white py-24">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h1 className="text-6xl font-bold text-yellow-500">
                500+
              </h1>
              <p className="mt-4">Generators Available</p>
            </div>

            <div>
              <h1 className="text-6xl font-bold text-yellow-500">
                1200+
              </h1>
              <p className="mt-4">Projects Completed</p>
            </div>

            <div>
              <h1 className="text-6xl font-bold text-yellow-500">
                98%
              </h1>
              <p className="mt-4">Client Satisfaction</p>
            </div>

            <div>
              <h1 className="text-6xl font-bold text-yellow-500">
                24/7
              </h1>
              <p className="mt-4">Support Service</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-500 py-24">

        <div className="text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Reliable Power Today?
          </h2>

          <p className="mt-6 text-xl">
            Contact us and get the right generator
            for your project or event.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
  <a
    href="tel:+918854954525"
    className="flex items-center gap-2"
  >
    <Phone className="text-yellow-500" size={18} />
    Contact Now
  </a>
</button>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default About;