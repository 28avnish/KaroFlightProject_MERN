import React from "react";
import founded from "../../assets/aboutImages/founded.svg";
import traveler from "../../assets/aboutImages/traveler.svg";
import global from "../../assets/aboutImages/global.svg";
import mobile from "../../assets/aboutImages/mobile.svg";
import ai from "../../assets/aboutImages/ai.svg";
import sustainability from "../../assets/aboutImages/sustainability.svg";

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

const OurJourney = () => {
  return (
    <div>
      <div className="my-12 lg:my-20 px-4">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Journey
          </h1>
          <p
            className={`text-sm sm:text-base ${textLightGray} text-center mt-2 lg:mt-4`}
          >
            From a simple idea to a global platform, here's how we've grown to
            serve millions of travelers.
          </p>
        </div>

        {/* Timeline for larger screens */}
        <div className="hidden lg:block timeline z-10 mt-8 lg:mt-12">
          {/* Timeline items for desktop */}
          <div className="container right-container">
            <div className="">
              <img
                src={founded}
                className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
              />
              <p
                className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
              >
                2010
              </p>
            </div>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold"> Founded </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                KaroFlight was born with a vision to make travel booking
                transparent and accessible to everyone.
              </p>
            </div>
          </div>

          <div className="container left-container">
            <img
              src={global}
              className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
            />
            <p
              className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
            >
              2016
            </p>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                {" "}
                Global Expansion{" "}
              </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                Expanded our reach to 50+ countries, partnering with local
                travel providers worldwide.
              </p>
            </div>
          </div>

          <div className="container right-container">
            <img
              src={mobile}
              className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
            />
            <p
              className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
            >
              2018
            </p>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                {" "}
                Mobile App Launch
              </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                Launched our award-winning mobile app, bringing seamless travel
                booking to your pocket.
              </p>
            </div>
          </div>

          <div className="container left-container">
            <img
              src={ai}
              className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
            />
            <p
              className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
            >
              2021
            </p>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                {" "}
                AI-Powered Search{" "}
              </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                Introduced intelligent search algorithms to help travelers find
                the perfect trips faster.
              </p>
            </div>
          </div>

          <div className="container right-container">
            <img
              src={sustainability}
              className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
            />
            <p
              className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
            >
              2023
            </p>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                {" "}
                Sustainability Initiatives{" "}
              </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                Committed to eco-friendly travel options and carbon offset
                programs for conscious travelers.
              </p>
            </div>
          </div>

          <div className="container left-container">
            <img
              src={traveler}
              className={`p-2 ${iconBG} w-10 h-10 sm:w-12 sm:h-12`}
            />
            <p
              className={`year ${accentColor} rounded-full p-1 flex items-center justify-center text-xs sm:text-sm`}
            >
              2025
            </p>
            <div className={`text-box shadow rounded-xl p-4 sm:p-6 ${whiteBG}`}>
              <h2 className="text-lg sm:text-xl font-bold">
                {" "}
                2.5M+ Travelers{" "}
              </h2>
              <p className={`text-xs sm:text-sm ${textLightGray}`}>
                Reached a new milestone of serving 2.5 million satisfied
                travelers with our growing platform.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile timeline (vertical stack) */}
        <div className="lg:hidden mt-8 space-y-8 px-4">
          {/* 2010 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={founded}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="Founded icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2010
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">Founded</h2>
              <p className={`text-sm ${textLightGray}`}>
                KaroFlight was born with a vision to make travel booking
                transparent and accessible to everyone.
              </p>
            </div>
          </div>

          {/* 2016 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={global}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="Global icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2016
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">Global Expansion</h2>
              <p className={`text-sm ${textLightGray}`}>
                Expanded our reach to 50+ countries, partnering with local
                travel providers worldwide.
              </p>
            </div>
          </div>

          {/* 2018 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={mobile}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="Mobile icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2018
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">Mobile App Launch</h2>
              <p className={`text-sm ${textLightGray}`}>
                Launched our award-winning mobile app, bringing seamless travel
                booking to your pocket.
              </p>
            </div>
          </div>

          {/* 2021 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={ai}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="AI icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2021
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">AI-Powered Search</h2>
              <p className={`text-sm ${textLightGray}`}>
                Introduced intelligent search algorithms to help travelers find
                the perfect trips faster.
              </p>
            </div>
          </div>

          {/* 2023 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={sustainability}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="Sustainability icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2023
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">
                Sustainability Initiatives
              </h2>
              <p className={`text-sm ${textLightGray}`}>
                Committed to eco-friendly travel options and carbon offset
                programs for conscious travelers.
              </p>
            </div>
          </div>

          {/* 2025 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4 w-full max-w-md">
              <img
                src={traveler}
                className={`p-2 ${iconBG} w-12 h-12 rounded-full`}
                alt="Traveler icon"
              />
              <p
                className={`${accentColor} rounded-full p-2 ml-4 ${textWhite} text-sm font-bold`}
              >
                2025
              </p>
            </div>
            <div
              className={`rounded-xl p-6 shadow-lg ${whiteBG} w-full max-w-md`}
            >
              <h2 className="text-xl font-bold mb-2">2.5M+ Travelers</h2>
              <p className={`text-sm ${textLightGray}`}>
                Reached a new milestone of serving 2.5 million satisfied
                travelers with our growing platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
