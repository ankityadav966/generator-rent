import { Star } from "lucide-react";
import { motion } from "framer-motion";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {

  // Repeat cards automatically
  const testimonials = [
    {
      image: user1,
      name: "Rajesh Sharma",
      role: "Event Manager",
      review:
        "Excellent service! Generator was delivered on time and worked perfectly for our event.",
    },

    {
      image: user2,
      name: "Pooja Verma",
      role: "Business Owner",
      review:
        "Very reliable service at the best prices. Highly recommended for everyone.",
    },

    {
      image: user3,
      name: "Vikram Singh",
      role: "Site Supervisor",
      review:
        "24/7 support is amazing. They helped us in an emergency and saved the day!",
    },

    // Repeated Cards

    {
      image: user1,
      name: "Rajesh Sharma",
      role: "Event Manager",
      review:
        "Excellent service! Generator was delivered on time and worked perfectly for our event.",
    },

    {
      image: user2,
      name: "Pooja Verma",
      role: "Business Owner",
      review:
        "Very reliable service at the best prices. Highly recommended for everyone.",
    },

    {
      image: user3,
      name: "Vikram Singh",
      role: "Site Supervisor",
      review:
        "24/7 support is amazing. They helped us in an emergency and saved the day!",
    },
  ];

  return (
    <section className="py-24 bg-[#fdfbf7] font-serif relative">
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
            What Our Clients Say
          </p>

          <h1 className="text-5xl font-bold mt-5 text-gray-900 drop-shadow-sm">
            Happy Customers
          </h1>

          <p className="text-gray-600 mt-4 italic max-w-xl mx-auto">
            We value our customers and always strive
            for the best service.
          </p>

        </motion.div>

        {/* Slider */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mt-16 pb-14"
          >

            {testimonials.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="border-2 border-yellow-800/20 rounded-none p-8 hover:shadow-[5px_5px_0px_rgba(180,83,9,0.3)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 h-full bg-[#fdfbf7] relative">
                  {/* Vintage tape corner effect */}
                  <div className="absolute -top-2 -left-2 w-8 h-4 bg-yellow-200/50 rotate-[-45deg] shadow-sm"></div>

                  {/* Stars */}

                  <div className="flex gap-1 text-yellow-600">

                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />

                  </div>

                  {/* Review */}

                  <p className="text-gray-700 mt-6 leading-8 font-medium italic">
                    "{item.review}"
                  </p>

                  {/* User */}

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-yellow-900/10">

                    <img
                      src={item.image}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover grayscale-[50%] sepia-[40%] border-2 border-yellow-700/30"
                    />

                    <div>

                      <h2 className="font-bold text-lg text-gray-900">
                        {item.name}
                      </h2>

                      <p className="text-gray-600 text-sm uppercase tracking-wide">
                        {item.role}
                      </p>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>
        </motion.div>

      </div>

    </section>
  );
};

export default Testimonials;
