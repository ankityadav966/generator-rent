import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <section className="bg-black text-white py-28">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Simple Rental Process
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            How It Works
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            Renting a generator has never been easier.
            Follow our simple process and get uninterrupted
            power whenever and wherever you need it.
          </p>

        </div>

      </section>

      {/* PROCESS STEPS */}

      <section className="py-24 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="text-center">

            <h2 className="text-5xl font-bold">
              5 Easy Steps
            </h2>

            <p className="text-gray-500 mt-5">
              Quick, transparent and hassle-free process.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 mt-20">

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <Search className="mx-auto text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-5">
                Choose Generator
              </h3>
              <p className="text-gray-600 mt-4">
                Select the generator that matches your power requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <FileText className="mx-auto text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-5">
                Request Quote
              </h3>
              <p className="text-gray-600 mt-4">
                Share your project details and receive a custom quote.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <Truck className="mx-auto text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-5">
                Delivery
              </h3>
              <p className="text-gray-600 mt-4">
                We transport generators directly to your location.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <Settings className="mx-auto text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-5">
                Installation
              </h3>
              <p className="text-gray-600 mt-4">
                Our technicians ensure safe setup and operation.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <Headphones className="mx-auto text-yellow-500" size={50} />
              <h3 className="font-bold text-2xl mt-5">
                Support
              </h3>
              <p className="text-gray-600 mt-4">
                Enjoy 24/7 monitoring and technical assistance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* RENTAL OPTIONS */}

      <section className="py-24 bg-gray-50">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="text-center">

            <h2 className="text-5xl font-bold">
              Flexible Rental Plans
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold">
                Daily Rental
              </h3>
              <p className="mt-5 text-gray-600 leading-8">
                Perfect for events, weddings, exhibitions,
                and short-term backup power needs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold">
                Weekly Rental
              </h3>
              <p className="mt-5 text-gray-600 leading-8">
                Suitable for temporary construction projects
                and business operations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold">
                Monthly Rental
              </h3>
              <p className="mt-5 text-gray-600 leading-8">
                Cost-effective solution for long-term
                industrial and commercial requirements.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="py-24 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <h2 className="text-5xl font-bold text-center">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            {[
              "Construction Sites",
              "Corporate Offices",
              "Industrial Plants",
              "Events & Weddings",
              "Hospitals",
              "Hotels",
              "Shopping Malls",
              "Emergency Backup"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 text-center"
              >
                <CheckCircle className="mx-auto text-yellow-500" />
                <h3 className="font-bold text-xl mt-4">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mt-16">

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-bold text-xl">
                How quickly can you deliver?
              </h3>
              <p className="text-gray-600 mt-3">
                Most generators can be delivered within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-bold text-xl">
                Do you provide installation?
              </h3>
              <p className="text-gray-600 mt-3">
                Yes, professional installation is included.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-bold text-xl">
                Is technical support available?
              </h3>
              <p className="text-gray-600 mt-3">
                Our team is available 24/7 for assistance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-500 py-24">

        <div className="text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready To Rent A Generator?
          </h2>

          <p className="mt-6 text-xl">
            Contact our team and get a customized quote today.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl font-semibold">
            Get Free Quote
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default HowItWorks;