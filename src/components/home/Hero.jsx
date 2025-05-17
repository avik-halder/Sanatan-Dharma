import React from "react";
import { ChevronDown } from "lucide-react";
import templeImage from "../../assets/temple.webp";

const Hero = () => {
  return (
    <div className="min-h-screen relative text-white pb-40">
      {/* Background Image Layer with blur and top fade */}
      <div
        className="absolute inset-0 bg-cover bg-center fixed"
        style={{
          backgroundImage: `url(${templeImage})`,
          backgroundSize: "auto 100%",
          filter: "blur(2px)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 0%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 0%, black 80%, transparent 100%)",
          zIndex: -1,
        }}
      />

      {/* Foreground Content */}
      <div className="pt-[280px] sm:pt-52 lg:pt-64 2xl:pt-72 text-center max-w-4xl mx-auto">
        <h1
          className="text-[45px] sm:text-[60px] lg:text-[70px] text-yellow-100 font-bold mb-4 leading-[1.18]"
          style={{
            textShadow: "0 0 10px #CE6400, 0 0 10px #CE6400",
          }}
        >
          Discover the Ancient Wisdom of Hinduism
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-8 text-green-100 mx-auto max-w-[95%] lg:max-w-4xl">
          Explore the world's oldest living religion, its rich traditions,
          profound philosophy, and timeless practices
        </p>

        <button
          className="px-3 py-2 bg-yellow-700 text-white text-md rounded-xl border-2 border-white transition-all"
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("deities").offsetTop,
              behavior: "smooth",
            })
          }
        >
          Explore More
        </button>

        <div className="mt-14 lg:mt-24">
          <ChevronDown className="mx-auto animate-bounce" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
