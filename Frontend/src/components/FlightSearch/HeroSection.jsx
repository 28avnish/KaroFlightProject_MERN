import React from "react";
import { useNavigate } from "react-router-dom";
import HeroVideo from "../../assets/HeroVideo.mp4";
import { BsAirplaneEngines } from "react-icons/bs";
import { LiaHotelSolid } from 'react-icons/lia';

const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.5) 0%, rgba(5,36,97,0.5) 50%, rgba(13,64,165,0.5) 100%)";

const HeroSection = ({
  whiteText,
  accentText,
  heroCardBG,
  activeTab,
  setActiveTab,
  children,
}) => {
  const navigate = useNavigate();
  const handleHotelsClick = () => {
    setActiveTab("hotels");
    navigate("/hotel-home");
  };
  const handleFlightClick = () => {
    setActiveTab("flights");
    navigate("/flight-home")
  }
  return (
    <section className="relative w-full h-screen overflow-hidden "
  
    >
      {/* Background Video section */}
      <div className="relative w-full h-[120vh] sm:h-[100vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay text section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-4"
      style={{background: heroGradient}}>
        <h1
          className={`${whiteText} text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight mb-5`}
        >
         Here are the best flights from <br className="hidden md:block" /> <span className={`${accentText}`}>anywhere to everywhere</span>
        </h1>
        {/* <p
          className={`text-sm sm:text-base md:text-xl lg:text-[24px] ${whiteText}  max-w-4xl leading-relaxed`}
        >
          Search across 1,000+ providers • No hidden fees
          <br className="hidden sm:block" /> Find the cheapest month to fly
        </p> */}

        {/* Toggle Button for Hotels and Flights */}
        <div
          className={`text-sm md:text-[16px] ${heroCardBG} p-1 flex items-center justify-between rounded-xl transition-all duration-300`}
        >
          <div
            className={`text-[#808080] font-medium cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-2 ${
              activeTab === "flights"
                ? "bg-[#040A53] py-2 md:py-3 px-4 md:px-8 text-white rounded-lg"
                : "py-2 md:py-3 px-4 md:px-8 hover:text-gray-600"
            }`}
            onClick={handleFlightClick}
          ><BsAirplaneEngines />
            Flights
          </div>
          <div
            className={`text-[#808080] font-medium cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-2 ${
              activeTab === "hotels"
                ? "bg-[#040A53] py-2 md:py-3 px-4 md:px-8 text-white rounded-lg"
                : "py-2 md:py-3 px-4 md:px-8 hover:text-gray-600"
            }`}
            onClick={handleHotelsClick}
          ><LiaHotelSolid />
            Hotels
          </div>
        </div>

        {/* Search Form Container */}
        <div
          className={`${heroCardBG} w-full max-w-6xl rounded-xl sm:mt-4 md:mt-6 overflow-y-auto max-h-[75vh] sm:max-h-none`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
