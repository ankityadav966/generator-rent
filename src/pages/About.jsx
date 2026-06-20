import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <section className="bg-black text-white py-28">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            About Generator Rent
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Powering Your Business,
            Events & Projects
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            We provide reliable generator rental services
            for industries, construction sites, events,
            commercial buildings and emergency backup
            requirements across the region.
          </p>

        </div>

      </section>

      {/* COMPANY STORY */}

      <section className="py-24 bg-white">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200"
                alt=""
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-yellow-500 font-semibold uppercase">
                Our Story
              </span>

              <h2 className="text-5xl font-bold mt-4">
                Trusted Generator Rental Partner
              </h2>

              <p className="text-gray-600 mt-8 leading-8">
                Generator Rent was founded with a simple mission:
                provide dependable power solutions whenever and
                wherever customers need them.
              </p>

              <p className="text-gray-600 mt-6 leading-8">
                Over the years, we have supplied generators
                for construction projects, industrial operations,
                corporate events, weddings, exhibitions,
                hospitals and emergency situations.
              </p>

              <p className="text-gray-600 mt-6 leading-8">
                Our experienced team ensures every generator
                is maintained to the highest standards,
                guaranteeing reliable performance and safety.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION VISION */}

      <section className="bg-gray-50 py-24">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-sm">

              <h2 className="text-4xl font-bold mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-8">
                To deliver affordable, reliable and
                uninterrupted power solutions while
                maintaining exceptional customer service
                and operational excellence.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm">

              <h2 className="text-4xl font-bold mb-6">
                Our Vision
              </h2>

              <p className="text-gray-600 leading-8">
                To become the most trusted generator rental
                company by providing innovative power
                solutions and unmatched customer support.
              </p>

            </div>

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