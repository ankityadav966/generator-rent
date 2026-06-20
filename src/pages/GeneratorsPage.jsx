import { useState } from "react";

import {
  Filter,
  X,
  Zap,
  Fuel,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const GeneratorsPage = () => {
const [showFilters, setShowFilters] = useState(false);
const [capacityFilters, setCapacityFilters] = useState([]);
const [fuelFilters, setFuelFilters] = useState([]);
const [durationFilters, setDurationFilters] = useState([]);


  const generators = [
  {
    name: "Diesel Generator 50 kVA",
    capacity: "50 kVA",
    fuel: "Diesel",
    duration: ["Daily", "Weekly"],
    price: "₹1,500 / Day",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
  },

  {
    name: "Diesel Generator 125 kVA",
    capacity: "125 kVA",
    fuel: "Diesel",
    duration: ["Daily", "Monthly"],
    price: "₹2,500 / Day",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
  },

  {
    name: "Industrial Generator 250 kVA",
    capacity: "250 kVA",
    fuel: "Diesel",
    duration: ["Weekly", "Monthly"],
    price: "₹4,500 / Day",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800",
  },

  {
    name: "Silent Generator 500 kVA",
    capacity: "500 kVA",
    fuel: "Diesel",
    duration: ["Monthly"],
    price: "₹8,000 / Day",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800",
  },

  {
    name: "Construction Generator",
    capacity: "250 kVA",
    fuel: "Diesel",
    duration: ["Daily"],
    price: "₹3,000 / Day",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },

  {
    name: "Event Power Generator",
    capacity: "125 kVA",
    fuel: "Petrol",
    duration: ["Daily", "Weekly"],
    price: "₹2,800 / Day",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
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

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={capacityFilters.includes("50 kVA")}
  onChange={() =>
    toggleFilter(
      "50 kVA",
      capacityFilters,
      setCapacityFilters
    )
  }
/>                      50 kVA
                    </label>

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={capacityFilters.includes("125 kVA")}
  onChange={() =>
    toggleFilter(
      "125 kVA",
      capacityFilters,
      setCapacityFilters
    )
  }
/>                      125 kVA
                    </label>

                    <label className="flex gap-2">
                      <input
  type="checkbox"
  checked={capacityFilters.includes("250 kVA")}
  onChange={() =>
    toggleFilter(
      "250 kVA",
      capacityFilters,
      setCapacityFilters
    )
  }
/>
                      250 kVA
                    </label>

                    <label className="flex gap-2">
<input
  type="checkbox"
  checked={capacityFilters.includes("500 kVA")}
  onChange={() =>
    toggleFilter(
      "500 kVA",
      capacityFilters,
      setCapacityFilters
    )
  }
/>                      500 kVA
                    </label>

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

                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
                  >

                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-6">

                      <h2 className="font-bold text-xl">
                        {item.name}
                      </h2>

                      <h3 className="text-yellow-500 font-bold text-2xl mt-3">
                        {item.price}
                      </h3>

                      <div className="mt-6 space-y-3 text-sm">

                        <div className="flex items-center gap-2">

                          <Zap size={16} />

                          Fuel Efficient

                        </div>

                        <div className="flex items-center gap-2">

                          <Fuel size={16} />

                          Low Fuel Consumption

                        </div>

                        <div className="flex items-center gap-2">

                          <ShieldCheck size={16} />

                          24/7 Support

                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-8">

                        <button className="border border-yellow-500 text-yellow-500 py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition">

                          Details

                        </button>

                        <button className="bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">

                          Book Now

                        </button>

                      </div>

                    </div>

                  </div>

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

        <label className="flex gap-2">
          <input type="checkbox" />
          50 kVA
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          125 kVA
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          250 kVA
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          500 kVA
        </label>

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
