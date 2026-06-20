import {
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
  Briefcase,
} from "lucide-react";

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
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div className="bg-yellow-100 p-4 rounded-full text-yellow-600">
                {item.icon}
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;