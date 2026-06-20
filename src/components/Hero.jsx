import generator from "../assets/Durga generators.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-[#07162b] min-h-screen text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <div className="bg-[#13233d] inline-block px-5 py-2 rounded-full text-yellow-400 text-sm mb-6">
            ⚡ POWER WHEN YOU NEED IT
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

            Generator Rent <br />

            Anytime,{" "}

            <span className="text-yellow-500">
              Anywhere
            </span>

          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-xl">
            Reliable generator on rent for your home,
            office, events and construction sites.
          </p>

          <div className="flex gap-5 mt-10">

            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 text-lg">
              Book Now
            </Button>

            <Button
              variant="outline"
              className="border-yellow-500 text-black hover:bg-yellow-500 px-8 py-6 text-lg"
            >
              View Generators
            </Button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <img
            src={generator}
            alt=""
            className="w-full object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;