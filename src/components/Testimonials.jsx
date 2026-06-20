import { Star } from "lucide-react";

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
      name: "Ali Raza",
      role: "Event Manager",
      review:
        "Excellent service! Generator was delivered on time and worked perfectly for our event.",
    },

    {
      image: user2,
      name: "Sana Khan",
      role: "Business Owner",
      review:
        "Very reliable service at the best prices. Highly recommended for everyone.",
    },

    {
      image: user3,
      name: "Usman Tariq",
      role: "Site Supervisor",
      review:
        "24/7 support is amazing. They helped us in an emergency and saved the day!",
    },

    // Repeated Cards

    {
      image: user1,
      name: "Ali Raza",
      role: "Event Manager",
      review:
        "Excellent service! Generator was delivered on time and worked perfectly for our event.",
    },

    {
      image: user2,
      name: "Sana Khan",
      role: "Business Owner",
      review:
        "Very reliable service at the best prices. Highly recommended for everyone.",
    },

    {
      image: user3,
      name: "Usman Tariq",
      role: "Site Supervisor",
      review:
        "24/7 support is amazing. They helped us in an emergency and saved the day!",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-yellow-500 font-semibold uppercase">
            What Our Clients Say
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Happy Customers
          </h1>

          <p className="text-gray-500 mt-4">
            We value our customers and always strive
            for the best service.
          </p>

        </div>

        {/* Slider */}

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

              <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full bg-white">

                {/* Stars */}

                <div className="flex gap-1 text-yellow-500">

                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />

                </div>

                {/* Review */}

                <p className="text-gray-600 mt-6 leading-8">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="flex items-center gap-4 mt-8">

                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>

                    <h2 className="font-bold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;
