import React from "react";
import heroImg from "../../assets/aboutImages/heroImg.svg";

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-white";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";
const heroGradient =
  "linear-gradient(to bottom right, rgba(4,14,78,0.8) 0%, rgba(0,0,0,0.8) 100%)";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" >
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Travel landscape"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col px-4 z-10"
        style={{background: heroGradient}}
        >
          {/* Main Heading */}
          <h1
            className={`max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textWhite} mb-4 lg:mb-6`}
          >
            Your journey, <span className={`${accentColorText}`}>your choice</span>
          </h1>

          {/* Gradient Text Box */}
          <div
            className={`w-full max-w-3xl rounded-lg ${gradient2} py-3 px-4 mb-6 lg:mb-8`}
          >
            <p className="text-blue-900 text-base sm:text-lg md:text-xl font-semibold text-center">
              The Travel Platform that Keeps your choices first
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6 lg:mb-8">
            <button
              className={`${gradientBG} rounded-lg py-3 px-6 ${textWhite} font-medium text-base sm:text-lg transition-all hover:opacity-90`}
            >
              Explore Destinations
            </button>
            {/* <button
              className={`${whiteBG} rounded-lg py-3 px-6 text-gray-900 font-medium text-base sm:text-lg transition-all hover:bg-gray-100`}
            >
              Meet Our Team
            </button> */}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div
              className={`${accentColor} py-2 px-4 rounded-xl ${textWhite} text-sm sm:text-base`}
            >
             5M+ monthly users
            </div>
            <div
              className={`${accentColor} py-2 px-4 rounded-xl ${textWhite} text-sm sm:text-base`}
            >
             1,000+ partners
            </div>
            <div
              className={`${accentColor} py-2 px-4 rounded-xl ${textWhite} text-sm sm:text-base`}
            >
              6M+ daily searches
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
