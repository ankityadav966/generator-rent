import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What generator sizes are available?",
      answer:
        "We provide generators ranging from 25 kVA to 1000+ kVA for residential, commercial, industrial and event requirements.",
    },
    {
      question: "Do you provide delivery and installation?",
      answer:
        "Yes, our team handles transportation, installation, testing and setup at your location.",
    },
    {
      question: "Is fuel included in the rental price?",
      answer:
        "Fuel charges depend on the rental package selected. We offer both fuel-inclusive and fuel-exclusive plans.",
    },
    {
      question: "Can I rent a generator for one day?",
      answer:
        "Yes, daily, weekly and monthly rental plans are available according to your requirements.",
    },
    {
      question: "Do you offer emergency power backup?",
      answer:
        "Absolutely. We provide emergency generators 24/7 for hospitals, offices, industries and critical operations.",
    },
    {
      question: "How fast can delivery be arranged?",
      answer:
        "In most locations, delivery can be arranged within 24 hours depending on generator availability.",
    },
    {
      question: "Do you provide an operator?",
      answer:
        "Yes, trained operators can be provided on request for large events and industrial projects.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Construction, Manufacturing, Events, Hotels, Hospitals, Shopping Malls, IT Parks and Commercial Buildings.",
    },
    {
      question: "Are generators regularly maintained?",
      answer:
        "Yes, all generators undergo regular maintenance and safety inspections before deployment.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Simply contact us through phone, WhatsApp or our inquiry form and we'll provide a customized quotation.",
    },
  ];

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
            Help Center
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 text-[#fdfbf7] drop-shadow-md">
            Frequently Asked Questions
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-8 leading-9 italic">
            Find answers to the most common questions
            about generator rentals, delivery, installation,
            pricing and support services.
          </p>

        </motion.div>

      </section>

      {/* FAQS */}

      <section className="py-24 bg-[#fdfbf7] font-serif border-y border-yellow-900/20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-6">

            {faqs.map((faq, index) => (

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-[#f4ebd8] border border-yellow-900/10 rounded-3xl shadow-sm overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-yellow-100/50 transition-colors"
                >

                  <h2 className="font-bold text-xl text-gray-900">
                    {faq.question}
                  </h2>

                  {open === index ? (
                    <ChevronUp className="text-yellow-700" />
                  ) : (
                    <ChevronDown className="text-yellow-700" />
                  )}

                </button>

                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 overflow-hidden"
                    >
                      <div className="pb-8 border-t border-yellow-900/10 pt-6 mt-2">
                        <p className="text-gray-700 leading-8 italic">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default FAQ;