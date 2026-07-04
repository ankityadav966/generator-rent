import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  Search,
  FileText,
  Truck,
  Settings,
  Headphones,
  CheckCircle,
} from "lucide-react";

const HowItWorks = () => {
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
            Simple Rental Process
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 text-[#fdfbf7] drop-shadow-md">
            How It Works
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-8 leading-9 italic">
            Renting a generator has never been easier.
            Follow our simple process and get uninterrupted
            power whenever and wherever you need it.
          </p>

        </motion.div>

      </section>

      {/* PROCESS STEPS */}

      <section className="py-24 bg-[#fdfbf7] font-serif">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <h2 className="text-5xl font-bold text-gray-900 drop-shadow-sm">
              5 Easy Steps
            </h2>

            <p className="text-gray-600 mt-5 italic text-lg">
              Quick, transparent and hassle-free process.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 mt-20">

            {[
              { icon: <Search className="mx-auto text-yellow-700" size={50} />, title: "Choose Generator", desc: "Select the generator that matches your power requirements." },
              { icon: <FileText className="mx-auto text-yellow-700" size={50} />, title: "Request Quote", desc: "Share your project details and receive a custom quote." },
              { icon: <Truck className="mx-auto text-yellow-700" size={50} />, title: "Delivery", desc: "We transport generators directly to your location." },
              { icon: <Settings className="mx-auto text-yellow-700" size={50} />, title: "Installation", desc: "Our technicians ensure safe setup and operation." },
              { icon: <Headphones className="mx-auto text-yellow-700" size={50} />, title: "Support", desc: "Enjoy 24/7 monitoring and technical assistance." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#f4ebd8] border-2 border-yellow-900/10 p-8 rounded-3xl text-center hover:shadow-[5px_5px_0px_rgba(180,83,9,0.3)] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-200/50 rounded-full shadow-sm"></div>
                {item.icon}
                <h3 className="font-bold text-2xl mt-5 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-4 italic">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* RENTAL OPTIONS */}

      <section className="py-24 bg-[#f4ebd8] font-serif border-y border-yellow-900/20">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-gray-900 drop-shadow-sm">
              Flexible Rental Plans
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {[
              { title: "Daily Rental", desc: "Perfect for events, weddings, exhibitions, and short-term backup power needs." },
              { title: "Weekly Rental", desc: "Suitable for temporary construction projects and business operations." },
              { title: "Monthly Rental", desc: "Cost-effective solution for long-term industrial and commercial requirements." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#fdfbf7] p-10 rounded-3xl shadow-md border-2 border-yellow-900/10 relative"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200/40 rounded-bl-full shadow-inner"></div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-5 text-gray-700 leading-8 italic">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default HowItWorks;