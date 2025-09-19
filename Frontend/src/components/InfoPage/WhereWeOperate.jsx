import React from "react";
import { FaPlaneDeparture  } from "react-icons/fa";
import { FiGlobe } from 'react-icons/fi';
import { IoPeopleSharp } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';

const gradient = "linear-gradient(90deg, #0E064B 0%, #000000 100%)";
const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.7) 0%, rgba(5,36,97,0.7) 50%, rgba(13,64,165,0.7) 100%)";
const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const iconColor = "text-[#002C52]";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-[#FFFFFF]";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";
const fadeGradient =
  "linear-gradient(to top, rgba(2,26,75,0.9) 0%, rgba(2,26,75,0.4) 50%, rgba(2,26,75,0) 100%)";
const textQuickAns = "bg-[#171D26]";

const WhereWeOperate = () => {
  return (
    <div>
      <section className="py-16 flex flex-col bg-white">
        <div className=" md:mx-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Where We Operate
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Coverage & Partners
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 justify-center items-center">
            {/* Global Coverage Card */}
            <div className="flex-1 min-w-0 bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="text-2xl md:text-3xl mr-3 md:mr-4"><FiGlobe className={`${iconColor}`}  /></div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Global Coverage
                </h3>
              </div>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                {[
                  "India (Domestic)",
                  "Southeast Asia",
                  "Europe",
                  "GCC Countries",
                ].map((region) => (
                  <div key={region} className="flex items-center">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <HiOutlineLocationMarker className={`${accentColorText}`} />
                    </div>
                    <span className="text-sm md:text-base">{region}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs md:text-sm text-gray-500">
                Availability varies by supplier/season.
              </p>
            </div>

            {/* Right Column - Two Cards */}
            <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6">
              {/* Domestic & International Routes Card */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">
                    <FaPlaneDeparture className={`${iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      Domestic & International Routes
                    </h3>
                    <p className={` text-sm md:text-base ${textLightGray}`}>
                      Comprehensive coverage across major destinations with
                      reliable airline partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partner Ecosystem Card */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-100 to-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">
                <IoPeopleSharp />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      Partner Ecosystem
                    </h3>
                    <p className={` text-sm md:text-base ${textLightGray}`}>
                      Working with trusted partners to bring you the best deals
                      and service quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereWeOperate;
