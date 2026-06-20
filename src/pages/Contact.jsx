import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <section className="bg-black text-white py-28">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Get In Touch
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-300 mt-8 leading-9">
            Need generator rental services for your
            project, event or emergency backup?
            Our team is ready to help you 24/7.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-24 bg-gray-50">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-4xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <Phone
                    className="text-yellow-500"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      Phone Number
                    </h3>

                    <a
                      href="tel:+918854954525"
                      className="text-gray-600 hover:text-yellow-500"
                    >
                      +91 8854954525
                    </a>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Mail
                    className="text-yellow-500"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      Email Address
                    </h3>

                    <a
                      href="mailto:vinayvssaini45254525@gmail.com"
                      className="text-gray-600 hover:text-yellow-500 break-all"
                    >
                      vinayvssaini45254525@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex gap-5">

                  <MapPin
                    className="text-yellow-500"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      Office Location
                    </h3>

                    <p className="text-gray-600 leading-8">
                      Govind Nagar,
                      Plot No. 64,
                      Harmada, Jaipur,
                      Near VKI Vishwakarma
                      Industrial Area,
                      Rajasthan, India
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Clock
                    className="text-yellow-500"
                    size={30}
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      Working Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday - Sunday
                    </p>

                    <p className="text-gray-600">
                      24 Hours Available
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="tel:+918854954525"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/918854954525"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

              </div>

            </div>

            {/* RIGHT FORM */}

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-4xl font-bold mb-8">
                Send Inquiry
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-xl px-5 py-4 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-xl px-5 py-4 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-xl px-5 py-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Project / Event Location"
                  className="w-full border rounded-xl px-5 py-4 outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us your generator requirement..."
                  className="w-full border rounded-xl px-5 py-4 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-semibold"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <section className="bg-white py-24">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <h2 className="text-5xl font-bold text-center mb-12">
            Our Location
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              title="location"
              src="https://maps.google.com/maps?q=Harmada%20Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-500 py-24">

        <div className="text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Emergency Power?
          </h2>

          <p className="mt-6 text-xl">
            Call us anytime and get a generator
            delivered quickly.
          </p>

          <a
            href="tel:+918854954525"
            className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-xl font-semibold"
          >
            Call Now
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;