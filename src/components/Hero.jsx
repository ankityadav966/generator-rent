import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gen1 from "../assets/gen1.png";
import gen2 from "../assets/gen2.png";
import gen3 from "../assets/gen3.png";
import { NavLink } from "react-router-dom";

const slides = [
  {
    title: "Reliable Home Power Backup",
    desc: "Keep your home running smoothly during power cuts with silent and efficient generators.",
    badge: "🏠 HOME POWER SOLUTION",
    img: gen1,
  },
  {
    title: "Event & Wedding Power Supply",
    desc: "High-capacity generators for weddings, parties and outdoor events without interruption.",
    badge: "🎉 EVENT POWER SOLUTION",
    img: gen2,
  },
  {
    title: "Industrial Heavy Duty Generators",
    desc: "Strong performance generators designed for construction sites and heavy workloads.",
    badge: "🏗️ INDUSTRIAL POWER",
    img: gen3,
  },
];

const Hero = () => {
  const [api, setApi] = useState(null);

  // Auto slide infinite loop
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-[#07162b] min-h-screen text-white overflow-hidden font-serif">

      <Carousel
        setApi={setApi}
        opts={{
          loop: true, // ✅ THIS FIXES YOUR ISSUE
        }}
        className="w-full relative group"
      >

        <CarouselContent>

          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center min-h-screen">

                {/* LEFT SIDE */}
                <div className="animate-fade-in-right animate-duration-1000">
                  <div className="bg-[#13233d] inline-block px-5 py-2 rounded-full text-yellow-400 text-sm mb-6 border border-yellow-700/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                    {slide.badge}
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <p className="text-gray-300 text-lg mt-6 max-w-xl italic">
                    {slide.desc}
                  </p>

                  <div className="flex gap-5 mt-10 animate-fade-in-up animate-delay-500">
                    <Button
                     className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-6 text-lg border-2 border-yellow-700 transition-all hover:scale-105 shadow-[0_0_10px_rgba(234,179,8,0.4)]">
                      <a
                href="tel:+918854954525"
                className="font-bold "
              >
                Book Now
              </a>
                    </Button>

                    <NavLink to="/generators">

                    <Button
                      variant="outline"
                      className="border-yellow-600 text-black hover:bg-yellow-500 px-8 py-6 text-lg transition-all hover:scale-105 bg-white/10 text-white backdrop-blur-sm"
                    >
                      View Generators
                    </Button>
                    </NavLink>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative animate-fade-in-left animate-duration-1000">
                  {/* Added a subtle glow behind the generator for a vintage cinematic look */}
                  <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full animate-pulse"></div>
                  <img
                    src={slide.img}
                    alt="generator"
                    className="w-full h-[450px] object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] sepia-[0.3] hover:sepia-0 transition-all duration-700"
                  />
                </div>

              </div>
            </CarouselItem>
          ))}

        </CarouselContent>

        {/* Hover Arrows */}
        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity left-4 bg-yellow-600 border-none text-black hover:bg-yellow-500" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity right-4 bg-yellow-600 border-none text-black hover:bg-yellow-500" />

      </Carousel>

    </section>
  );
};

export default Hero;