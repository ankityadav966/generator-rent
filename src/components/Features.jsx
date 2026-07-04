import {
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Briefcase />,
      title: "Wide Range",
      desc: "From small to heavy duty generators.",
    },

    {
      icon: <BadgeDollarSign />,
      title: "Affordable Prices",
      desc: "Best rental prices with no hidden charges.",
    },

    {
      icon: <ShieldCheck />,
      title: "Well Maintained",
      desc: "All generators are fully serviced and tested.",
    },

    {
      icon: <Headphones />,
      title: "24/7 Support",
      desc: "Round the clock support whenever you need.",
    },
  ];

  return (
    <section className="bg-[#fdfbf7] py-16 font-serif border-y border-yellow-900/20 shadow-inner">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 p-4 rounded-xl hover:bg-yellow-50"
            >

              <div className="bg-yellow-200 p-4 rounded-full text-yellow-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-yellow-300 shrink-0">
                {item.icon}
              </div>

              <div>

                <h2 className="font-bold text-xl text-yellow-900 tracking-tight">
                  {item.title}
                </h2>

                <p className="text-gray-700 text-sm mt-2 italic">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;