import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-yellow-500 font-semibold uppercase">
            Our Equipment
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Popular Generators
          </h1>

          <p className="text-gray-500 mt-4">
            Choose from our wide range of well-maintained generators.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {generators.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl p-5 hover:shadow-xl transition duration-300"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-44 object-contain"
              />

              <h2 className="font-bold text-xl mt-5">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.desc}
              </p>

              <h3 className="text-yellow-500 font-bold mt-4">
                {item.price}
              </h3>

              <Button className="w-full mt-5 bg-[#04153a] hover:bg-[#0a245a]">
<a
  href="https://wa.me/916350650966"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold hover:text-green-500 transition"
>
  Book Now
</a>

              </Button>

            </div>

          ))}

        </div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-14">

          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-6">
            View All Generators
          </Button>

        </div>

      </div>

    </section>
  );
};

export default Generators;