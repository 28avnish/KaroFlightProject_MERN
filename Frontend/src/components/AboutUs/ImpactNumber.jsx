import React from "react";
import { FaUsers, FaGlobeAmericas, FaHotel, FaServer } from "react-icons/fa";

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const iconTextColor = "text-[#040E4E]";
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

const ImpactNumber = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col p-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-center text-center flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Impact in Numbers
          </h1>
          <p
            className={`flex text-sm sm:text-base lg:text-lg ${textLightGray} my-6 lg:my-10 text-center`}
          >
            Our commitment to excellence is reflected in the trust millions of
            travelers <br /> place in us every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-6xl">
          <div
            className={`${whiteBG} rounded-xl shadow p-6 lg:p-15 flex items-center justify-between flex-col`}
          >
            <div className="flex items-center justify-center relative mb-3">
              <div
                className={`${bgGray} rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center`}
              >
                <FaUsers className={` text-xl ${accentColorText}`} />
              </div>
              <div>
                <div
                  className={` p-2 flex items-end justify-end w-auto h-auto text-xs ${textWhite} ${accentColor} rounded-full`}
                >
                  5 million
                </div>
              </div>
            </div>
            <h2 className="font-bold text-sm sm:text-base">Monthly Users</h2>
            <p className={`text-xs sm:text-sm ${textLightGray} text-center`}>
              people use our online travel booking website every month
            </p>
          </div>
          <div
            className={`${whiteBG} rounded-xl shadow p-6 lg:p-15 flex items-center justify-center flex-col`}
          >
            <div className="flex items-center justify-center relative mb-3">
              <div
                className={`${bgGray} rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center`}
              >
                <FaGlobeAmericas className={` text-xl ${iconTextColor}`} />
              </div>
              <div
                className={` p-2 px-4 flex items-end justify-end w-auto h-auto text-xs ${textWhite} ${accentColor} rounded-full`}
              >
                1,000
              </div>
            </div>
            <h2 className="font-bold text-sm sm:text-base">Travel Partners</h2>
            <p className={`text-xs sm:text-sm ${textLightGray} text-center`}>
              travel partners across the world
            </p>
          </div>
          <div
            className={`${whiteBG} rounded-xl shadow p-6 lg:p-15 flex items-center justify-center flex-col`}
          >
            <div className="flex items-center justify-center relative mb-3">
              <div
                className={`${bgGray} rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center`}
              >
                <FaHotel className={` text-xl ${accentColorText}`} />
              </div>
              <div
                className={` p-2 flex items-end justify-end w-auto h-auto text-xs ${textWhite} ${accentColor} rounded-full`}
              >
                6 million
              </div>
            </div>
            <h2 className="font-bold text-sm sm:text-base">Daily Searches</h2>
            <p className={`text-xs sm:text-sm ${textLightGray} text-center`}>
              prices searched every day
            </p>
          </div>
          {/* <div
            className={`${whiteBG} rounded-xl shadow p-6 lg:p-15 flex items-center justify-center flex-col`}
          >
            <div className="flex items-center justify-center relative mb-3">
              <div
                className={`${bgGray} rounded-full p-2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}
              >
                <FaServer className={` text-xl ${iconTextColor}`} />
              </div>
              <div
                className={`absolute -bottom-1 -right-4 sm:-right-8 p-2  flex items-center justify-center w-8.5 h-4 text-xs ${textWhite} ${accentColor} rounded-full`}
              >
                99.9%
              </div>
            </div>
            <h2 className="font-bold text-sm sm:text-base">Platform Uptime</h2>
            <p className={`text-xs sm:text-sm ${textLightGray} text-center`}>
              Reliable service
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImpactNumber;
