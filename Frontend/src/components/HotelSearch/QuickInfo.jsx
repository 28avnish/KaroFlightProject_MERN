import React from "react";
import { FaGlobe, FaHotel } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { BsShieldLock, BsTags } from "react-icons/bs";
import { GiCycle } from 'react-icons/gi';

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#FF621F]/10";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-white";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 = "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";

// Data for first card section
const statsData = [
  {
    icon: FaHotel,
    value: "60+",
    description: "Hotel brands to choose from"
  },
  {
    icon: FaGlobe,
    value: "5,000+",
    description: "Hotel locations across world"
  },
  {
    icon: LiaHotelSolid,
    value: "3.2 million",
    description: "Rooms available worldwide"
  }
];

// Data for second card section
const featureData = [
  {
    icon: BsTags,
    title: "Best hotel offers",
    description: "We compare all the offers from top hotel partners and share with you the best ones of your choice."
  },
  {
    icon: GiCycle,
    title: "Latest prices",
    description: "We keep the charges updated so that you always have the latest prices. This prepares you what you might expect there."
  },
  {
    icon: BsShieldLock,
    title: "Smart Search Options",
    description: "Choose hotels with pools facility, without cancellation fee, and flexible booking. Or you can even search for what matters you the most."
  }
];

const QuickInfo = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="flex flex-col text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            Quick Info
          </h2>
          <p className={`text-sm sm:text-base md:text-lg ${textDarkGray}`}>
            Begin your trip stress-free with the key info you may know before
            heading out.
          </p>
        </div>

        {/* first card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl mb-12 sm:mb-16 md:mb-20 lg:mb-25">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center text-center flex-col space-y-2 sm:space-y-3 p-4 sm:p-6 w-full"
            >
              <div
                className={`${iconBG} rounded-full w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 flex items-center justify-center ${accentColorText}`}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h1 className={`${accentColorText} text-2xl sm:text-3xl md:text-4xl font-bold`}>
                {stat.value}
              </h1>
              <p className={`${textLightGray} text-xs sm:text-sm md:text-base`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* second card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-6xl">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6 border border-gray-300 rounded-xl hover:shadow-xl transition-all duration-300 w-full h-auto min-h-[200px] sm:min-h-[226px]"
            >
              <div
                className={`${iconBG} rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${accentColorText}`}
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                {feature.title}
              </h2>
              <p className={`text-xs sm:text-sm md:text-base ${textLightGray}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;