import React from "react";
import { 
  FaSearch, 
  FaBalanceScale, 
  FaCalendarCheck, 
  FaPlane 
} from "react-icons/fa";

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

const HowWeHelp = () => {
  return (
    <div>
      <div
        className={`flex items-center justify-center flex-col my-12 lg:my-20 ${whiteBG} p-6 lg:p-10 py-12 lg:py-20`}
      >
        <div className="flex text-center flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            How We Help
          </h1>
          <p
            className={`text-sm sm:text-base lg:text-lg ${textLightGray} mt-2 lg:mt-4`}
          >
            Our streamlined process makes travel planning simple, fast, and
            reliable.
          </p>
        </div>

        <div className="overflow-x-auto py-6 lg:py-10 px-2 lg:px-4 w-full">
          <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-6 items-center justify-center min-w-full sm:min-w-full">
            {/* Step 1: Search */}
            <div className="flex flex-col items-center text-center relative mb-8 sm:mb-0 sm:w-1/4">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${iconBG} z-10 ${textWhite} flex items-center justify-center text-xl mb-3 shadow-md`}
              >
                <FaSearch className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4
                className={`text-sm sm:text-base font-semibold ${textDarkGray}`}
              >
                Search
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-xs mt-2 px-4 sm:px-6 ${textLightGray}`}
              >
                Find flights, hotels, and experiences with our intelligent
                search.
              </p>
            </div>

            {/* Step 2: Compare */}
            <div className="flex flex-col items-center text-center relative mb-8 sm:mb-0 sm:w-1/4">
              {/* Connector Line + Dot for mobile */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-0.5 h-6 bg-gray-300 hidden">
                <div
                  className={`w-2 h-2 absolute -top-1 -left-0.5 rounded-full ${accentColor} shadow-md`}
                ></div>
              </div>
              {/* Connector Line + Dot for desktop */}
              <div className="hidden sm:block absolute lg:left-35 md:left-20 sm:left-15 top-6 -translate-x-full w-full h-0.5 bg-gray-300">
                <div
                  className={`w-2 h-2 absolute -top-1 sm:-top-0.75 right-10 rounded-full ${accentColor} shadow-md`}
                ></div>
              </div>

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full z-10 ${textWhite} flex items-center justify-center text-xl mb-3 shadow-md ${iconBG}`}
              >
                <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4
                className={`text-sm sm:text-base font-semibold ${textDarkGray}`}
              >
                Compare
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-xs mt-2 px-4 sm:px-6 ${textLightGray}`}
              >
                Compare prices, reviews, and options from trusted partners.
              </p>
            </div>

            {/* Step 3: Book */}
            <div className="flex flex-col items-center text-center relative mb-8 sm:mb-0 sm:w-1/4">
              {/* Connector Line + Dot for mobile */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-0.5 h-6 bg-gray-300 hidden">
                <div
                  className={`w-2 h-2 absolute -top-1 -left-0.5 rounded-full ${accentColor} shadow-md`}
                ></div>
              </div>
              {/* Connector Line + Dot for desktop */}
              <div className="hidden sm:block absolute lg:left-35 md:left-20 sm:left-15 top-6  -translate-x-full w-full h-0.5 bg-gray-300">
                <div
                  className={`w-2 h-2 absolute sm:-top-0.75 md:-top-1 right-10 rounded-full ${accentColor} shadow-md`}
                ></div>
              </div>

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full z-10 ${textWhite} flex items-center justify-center text-xl mb-3 shadow-md ${iconBG}`}
              >
                <FaCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4
                className={`text-sm sm:text-base font-semibold ${textDarkGray}`}
              >
                Book
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-xs mt-2 px-4 sm:px-6 ${textLightGray}`}
              >
                Secure booking with transparent pricing and no hidden fees.
              </p>
            </div>

            {/* Step 4: Travel */}
            <div className="flex flex-col items-center text-center relative sm:w-1/4">
              {/* Connector Line + Dot for desktop */}
              <div className="hidden sm:block absolute lg:left-35 md:left-20 sm:left-15 top-6 -translate-x-full w-full h-0.5 bg-gray-300">
                <div
                  className={`w-2 h-2 absolute -top-1 sm:-top-0.75 right-10 rounded-full ${accentColor} shadow-md`}
                ></div>
              </div>

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${iconBG} z-10 ${textWhite} flex items-center justify-center text-xl mb-3 shadow-md`}
              >
                <FaPlane className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4
                className={`text-sm sm:text-base font-semibold ${textDarkGray}`}
              >
                Travel
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-xs mt-2 px-4 sm:px-6 ${textLightGray}`}
              >
                Enjoy your journey with 24/7 support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;