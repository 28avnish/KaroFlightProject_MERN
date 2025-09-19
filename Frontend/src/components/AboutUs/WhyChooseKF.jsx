import React from "react";
import { 
  FaHandHoldingUsd, 
  FaHeadset, 
  FaShieldAlt, 
  FaSyncAlt 
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

const WhyChooseKF = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col px-4">
        <div className="flex text-center flex-col mt-8 lg:mt-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Choose KaroFlight
          </h1>
          <p
            className={`text-sm sm:text-base lg:text-lg ${textLightGray} mt-2 lg:mt-4`}
          >
            We're committed to providing you with the best travel experience
            through our core values.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 my-10 lg:my-20 w-full max-w-6xl">
          <div
            className={`${whiteBG} p-4 lg:p-6 flex items-center justify-center flex-col text-center shadow-sm rounded-xl relative`}
          >
            <div className={`rounded-full p-3 ${iconBG} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}>
              <FaHandHoldingUsd className="text-white text-lg sm:text-xl" />
            </div>
            <div
              className={`absolute top-4 lg:top-5 left-4/5 flex items-center justify-center w-3 h-3 lg:w-4 lg:h-4 text-xs ${textWhite} ${accentColor} rounded-full`}
            ></div>
            <h3 className="text-base lg:text-lg font-bold my-3 lg:my-4">
              Best Price Guarantee
            </h3>
            <p className={`text-xs sm:text-sm ${textLightGray}`}>
              We'll match any lower price you find, plus give you an extra 5%
              off.
            </p>
          </div>
          <div
            className={`p-4 lg:p-6 flex items-center justify-center flex-col text-center shadow-sm rounded-xl ${whiteBG}`}
          >
            <div className={`rounded-full p-3 ${iconBG} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}>
              <FaHeadset className="text-white text-lg sm:text-xl" />
            </div>
            <h3 className="text-base lg:text-lg font-bold my-3 lg:my-4">
              24/7 Expert Support
            </h3>
            <p className={`text-xs sm:text-sm ${textLightGray}`}>
              Our travel experts are always available to help you before,
              during, and after your trip.
            </p>
          </div>
          <div
            className={`p-4 lg:p-6 flex items-center justify-center flex-col text-center shadow-sm rounded-xl relative ${whiteBG}`}
          >
            <div className={`rounded-full p-3 ${iconBG} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}>
              <FaShieldAlt className="text-white text-lg sm:text-xl" />
            </div>
            <div
              className={`absolute top-4 lg:top-5 left-4/5 flex items-center justify-center w-3 h-3 lg:w-4 lg:h-4 text-xs ${textWhite} ${accentColor} rounded-full`}
            ></div>
            <h3 className="text-base lg:text-lg font-bold my-3 lg:my-4">
              Secure & Trusted
            </h3>
            <p className={`text-xs sm:text-sm ${textLightGray}`}>
              Your personal and payment information is protected with bank-level
              security.
            </p>
          </div>
          <div
            className={`p-4 lg:p-6 flex items-center justify-center flex-col text-center shadow-sm rounded-xl ${whiteBG}`}
          >
            <div className={`rounded-full p-3 ${iconBG} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}>
              <FaSyncAlt className="text-white text-lg sm:text-xl" />
            </div>
            <h3 className="text-base lg:text-lg font-bold my-3 lg:my-4">
              Flexible & Transparent
            </h3>
            <p className={`text-xs sm:text-sm ${textLightGray}`}>
              No hidden fees, ever. What you see is what you pay, with flexible
              booking options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKF;