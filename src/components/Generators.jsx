import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import gen1 from "../assets/gen1.png";
import gen2 from "../assets/gen2.png";
import gen3 from "../assets/gen3.png";
import gen4 from "../assets/gen4.png";

const Generators = () => {

  const generators = [
    {
      image: gen1,
      title: "2 KVA Generator",
      desc: "Ideal for home use",
      price: "PKR 2,500 / Day",
    },

    {
      image: gen2,
      title: "5 KVA Generator",
      desc: "Perfect for small offices",
      price: "PKR 4,000 / Day",
    },

    {
      image: gen3,
      title: "15 KVA Generator",
      desc: "Suitable for shops & events",
      price: "PKR 8,000 / Day",
    },

    {
      image: gen4,
      title: "50 KVA Generator",
      desc: "For industries & large sites",
      price: "PKR 20,000 / Day",
    },
  ];

  return (
    <section className="py-20 bg-transparent relative font-serif">
      <div className="absolute inset-0 bg-[#fefcf8] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="text-yellow-700 font-semibold uppercase tracking-widest border-b border-yellow-700/30 inline-block pb-1">
            Our Equipment
          </p>

          <h1 className="text-5xl font-bold mt-5 text-gray-900 drop-shadow-sm">
            Popular Generators
          </h1>

          <p className="text-gray-600 mt-4 italic">
            Choose from our wide range of well-maintained generators.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {generators.map((item, index) => (

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="border-2 border-yellow-900/20 bg-[#fdfbf7] p-5 hover:shadow-[5px_5px_0px_rgba(180,83,9,0.3)] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300 relative"
            >
              <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-yellow-700/40"></div>
              <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-yellow-700/40"></div>

              <img
                src={item.image}
                alt=""
                className="w-full h-44 object-contain sepia-[0.3] hover:sepia-0 transition-all duration-500"
              />

              <h2 className="font-bold text-xl mt-5 text-gray-900">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2 italic">
                {item.desc}
              </p>

              <h3 className="text-yellow-700 font-bold mt-4 text-lg">
                {item.price}
              </h3>

              <Button className="w-full mt-5 bg-yellow-600 hover:bg-yellow-500 text-black border border-yellow-700 shadow-sm transition-transform hover:scale-[1.02]">
                <a
                  href="https://wa.me/916350650966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold w-full h-full flex items-center justify-center"
                >
                  Book Now
                </a>
              </Button>

            </motion.div>

          ))}

        </div>

        {/* Bottom Button */}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-14"
        >

          <Button className="bg-transparent border-2 border-yellow-600 text-yellow-800 hover:bg-yellow-600 hover:text-black px-10 py-6 text-lg tracking-wide transition-all hover:shadow-lg">
            View All Generators
          </Button>

        </motion.div>

      </div>

    </section>
  );
};

export default Generators;