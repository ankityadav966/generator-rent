import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

      <section className="bg-black text-white py-28">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Help Center
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Frequently Asked Questions
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            Find answers to the most common questions
            about generator rentals, delivery, installation,
            pricing and support services.
          </p>

        </div>

      </section>

      {/* FAQS */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-6">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full p-8 flex items-center justify-between text-left"
                >

                  <h2 className="font-bold text-xl">
                    {faq.question}
                  </h2>

                  {open === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}

                </button>

                {open === index && (

                  <div className="px-8 pb-8">

                    <p className="text-gray-600 leading-8">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="bg-yellow-500 py-24">

        <div className="text-center px-6">

          <h2 className="text-5xl font-bold">
            Still Have Questions?
          </h2>

          <p className="text-xl mt-6">
            Our support team is available 24/7 to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="tel:+918854954525"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918854954525"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-yellow-500">
                500+
              </h2>
              <p className="mt-4 text-gray-600">
                Generators Available
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-500">
                1200+
              </h2>
              <p className="mt-4 text-gray-600">
                Projects Completed
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-500">
                98%
              </h2>
              <p className="mt-4 text-gray-600">
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-500">
                24/7
              </h2>
              <p className="mt-4 text-gray-600">
                Technical Support
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default FAQ;