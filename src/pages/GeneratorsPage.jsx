import { useState } from "react";
import { motion } from "framer-motion";

import {
  Filter,
  X,
  Zap,
  Fuel,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import gen5kva from "../assets/gen_5kva.png";
import gen15kva from "../assets/gen_15kva.png";
import gen40kva from "../assets/gen_40kva.png";
import gen62kva from "../assets/gen_62kva.png";
import gen125kva from "../assets/gen_125kva.png";
import gen160kva from "../assets/gen_160kva.png";
import gen250kva from "../assets/gen_250kva.png";
import gen500kva from "../assets/gen_500kva.png";


const GeneratorsPage = () => {
const [showFilters, setShowFilters] = useState(false);
const [capacityFilters, setCapacityFilters] = useState([]);
const [fuelFilters, setFuelFilters] = useState([]);
const [durationFilters, setDurationFilters] = useState([]);


  const generators = [
    {
      name: "Silent Generator 5 kVA",
      capacity: "5 kVA",
      fuel: "Diesel",
      duration: ["Daily", "Weekly"],
      price: "₹600 / Day",
      image: gen5kva,
    },
    {
      name: "Silent Generator 15 kVA",
      capacity: "15 kVA",
      fuel: "Diesel",
      duration: ["Daily", "Weekly"],
      price: "₹1,200 / Day",
      image: gen15kva,
    },
    {
      name: "Silent Generator 40 kVA",
      capacity: "40 kVA",
      fuel: "Diesel",
      duration: ["Daily", "Weekly", "Monthly"],
      price: "₹1,800 / Day",
      image: gen40kva,
    },
    {
      name: "Silent Generator 62 kVA",
      capacity: "62 kVA",
      fuel: "Diesel",
      duration: ["Daily", "Weekly", "Monthly"],
      price: "₹2,200 / Day",
      image: gen62kva,
    },
    {
      name: "Silent Generator 125 kVA",
      capacity: "125 kVA",
      fuel: "Diesel",
      duration: ["Daily", "Weekly", "Monthly"],
      price: "₹3,500 / Day",
      image: gen125kva,
    },
    {
      name: "Silent Generator 160 kVA",
      capacity: "160 kVA",
      fuel: "Diesel",
      duration: ["Weekly", "Monthly"],
      price: "₹4,500 / Day",
      image: gen160kva,
    },
    {
      name: "Silent Generator 250 kVA",
      capacity: "250 kVA",
      fuel: "Diesel",
      duration: ["Weekly", "Monthly"],
      price: "₹6,000 / Day",
      image: gen250kva,
    },
    {
      name: "Silent Generator 500 kVA",
      capacity: "500 kVA",
      fuel: "Diesel",
      duration: ["Monthly"],
      price: "₹10,000 / Day",
      image: gen500kva,
    },
  ];
const toggleFilter = (value, filters, setFilters) => {
  if (filters.includes(value)) {
    setFilters(filters.filter((item) => item !== value));
  } else {
    setFilters([...filters, value]);
  }
};
const filteredGenerators = generators.filter((generator) => {
  const capacityMatch =
    capacityFilters.length === 0 ||
    capacityFilters.includes(generator.capacity);

  const fuelMatch =
    fuelFilters.length === 0 ||
    fuelFilters.includes(generator.fuel);

  const durationMatch =
    durationFilters.length === 0 ||
    durationFilters.some((item) =>
      generator.duration.includes(item)
    );

  return capacityMatch && fuelMatch && durationMatch;
});

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="bg-black text-white py-24">

       <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 text-center">

          <h1 className="text-5xl lg:text-7xl font-bold">
            Generator Rental Services
          </h1>

          <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
            Reliable Generator Rental Solutions
            for Events, Industries, Construction
            Sites and Emergency Backup.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-20 bg-gray-50">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
            <div className="lg:hidden mb-6">
  <button
    onClick={() => setShowFilters(true)}
    className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg"
  >
    <Filter size={24} />
    Filters
  </button>
</div>

          <div className="grid lg:grid-cols-4 gap-10">

            {/* FILTERS */}

<div className="hidden lg:block bg-white rounded-3xl p-6 shadow-md h-fit sticky top-24">
              <div className="flex items-center gap-3 mb-8">

                <Filter />

                <h2 className="font-bold text-2xl">
                  Filters
                </h2>

              </div>

              <div className="space-y-8">

                <div>

                  <h3 className="font-semibold mb-4">
                    Capacity
                  </h3>

                  <div className="space-y-3">
                    {["5 kVA", "15 kVA", "40 kVA", "62 kVA", "125 kVA", "160 kVA", "250 kVA", "500 kVA"].map((cap) => (
                      <label key={cap} className="flex gap-2 items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={capacityFilters.includes(cap)}
                          onChange={() =>
                            toggleFilter(
                              cap,
                              capacityFilters,
                              setCapacityFilters
                            )
                          }
                        />
                        {cap}
                      </label>
                    ))}
                  </div>

                </div>

                <div>

                  <h3 className="font-semibold mb-4">
                    Fuel Type
                  </h3>

                  <div className="space-y-3">

                    <label className="flex gap-2">
                      <input type="checkbox" />
                      Diesel
                    </label>

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={fuelFilters.includes("Petrol")}
  onChange={() =>
    toggleFilter(
      "Petrol",
      fuelFilters,
      setFuelFilters
    )
  }
/>                      Petrol
                    </label>

                  </div>

                </div>

                <div>

                  <h3 className="font-semibold mb-4">
                    Rental Duration
                  </h3>

                  <div className="space-y-3">

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={durationFilters.includes("Daily")}
  onChange={() =>
    toggleFilter(
      "Daily",
      durationFilters,
      setDurationFilters
    )
  }
/>                      Daily
                    </label>

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={durationFilters.includes("Weekly")}
  onChange={() =>
    toggleFilter(
      "Weekly",
      durationFilters,
      setDurationFilters
    )
  }
/>                      Weekly
                    </label>

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={durationFilters.includes("Monthly")}
  onChange={() =>
    toggleFilter(
      "Monthly",
      durationFilters,
      setDurationFilters
    )
  }
/>                      Monthly
                    </label>

                  </div>

                </div>

              </div>

            </div>

            {/* GENERATORS */}

            <div className="lg:col-span-3">

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {filteredGenerators.map((item, index) => (

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition relative border-2 border-yellow-900/10 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[5px_5px_0px_rgba(180,83,9,0.3)] duration-300"
                  >
                    {/* Vintage Corner */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-700/40 z-10"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-700/40 z-10"></div>

                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-56 object-cover sepia-[0.2] hover:sepia-0 transition-all duration-500"
                    />

                    <div className="p-6">

                      <h2 className="font-bold text-xl text-gray-900 font-serif">
                        {item.name}
                      </h2>

                      <h3 className="text-yellow-700 font-bold text-2xl mt-3 font-serif">
                        {item.price}
                      </h3>

                      <div className="mt-6 space-y-3 text-sm text-gray-600 font-serif italic">

                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-yellow-600" />
                          Fuel Efficient
                        </div>

                        <div className="flex items-center gap-2">
                          <Fuel size={16} className="text-yellow-600" />
                          Low Fuel Consumption
                        </div>

                        <div className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-yellow-600" />
                          24/7 Support
                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-8">

                        <button className="border border-yellow-600 text-yellow-800 py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:text-black transition">
                          Details
                        </button>

                        <button className="bg-yellow-600 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition shadow-sm">
                          Book Now
                        </button>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

{/* MOBILE FILTER OFFCANVAS */}

<div
  className={`fixed inset-0 z-[999] lg:hidden ${
    showFilters
      ? "visible"
      : "invisible"
  }`}
>

  {/* Overlay */}

  <div
    onClick={() => setShowFilters(false)}
    className={`absolute inset-0 bg-black/50 transition-all duration-300 ${
      showFilters
        ? "opacity-100"
        : "opacity-0"
    }`}
  />

  {/* Sidebar */}

  <div
    className={`absolute left-0 top-0 h-full w-[320px] bg-white p-6 overflow-y-auto transition-all duration-300 ${
      showFilters
        ? "translate-x-0"
        : "-translate-x-full"
    }`}
  >

    <div className="flex items-center justify-between mb-8">

      <h2 className="text-2xl font-bold">
        Filters
      </h2>

      <button
        onClick={() => setShowFilters(false)}
      >
        <X />
      </button>

    </div>

    {/* Capacity */}

    <div className="mb-8">

      <h3 className="font-semibold mb-4">
        Capacity
      </h3>

      <div className="space-y-3">
        {["5 kVA", "15 kVA", "40 kVA", "62 kVA", "125 kVA", "160 kVA", "250 kVA", "500 kVA"].map((cap) => (
          <label key={cap} className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              checked={capacityFilters.includes(cap)}
              onChange={() =>
                toggleFilter(
                  cap,
                  capacityFilters,
                  setCapacityFilters
                )
              }
            />
            {cap}
          </label>
        ))}
      </div>

    </div>

    {/* Fuel */}

    <div className="mb-8">

      <h3 className="font-semibold mb-4">
        Fuel Type
      </h3>

      <div className="space-y-3">

        <label className="flex gap-2">
          <input type="checkbox" />
          Diesel
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Petrol
        </label>

      </div>

    </div>

    {/* Duration */}

    <div>

      <h3 className="font-semibold mb-4">
        Rental Duration
      </h3>

      <div className="space-y-3">

        <label className="flex gap-2">
          <input type="checkbox" />
          Daily
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Weekly
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Monthly
        </label>

      </div>

    </div>

  </div>

</div>

      <Footer />
    </>
  );
};

export default GeneratorsPage;
