import React from "react";
import { GiEcology } from "react-icons/gi";
import { FaHeart, FaDollarSign, FaLeaf } from "react-icons/fa";

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

const SustainabilityResponsibility = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 lg:py-15 gap-8 lg:gap-10">
        {/* Left Part */}
        <div className="flex flex-col p-4 lg:p-5 text-start gap-4 lg:gap-5 w-full lg:w-1/2">
          <div className="flex items-start">
            <FaLeaf className={`w-8 h-8 sm:w-10 sm:h-10 mr-3 ${accentColorText}`} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-2">
              Sustainability & <br /> Responsibility
            </h1>
          </div>
          <p className={`text-xs sm:text-sm ${textLightGray}`}>
            We believe travel should enrich lives without compromising our
            planet's future. That's why we're committed to promoting sustainable
            tourism and supporting local communities worldwide.
          </p>
          <p className={`text-xs sm:text-sm ${textLightGray}`}>
            Through our platform, we highlight eco-friendly accommodations,
            provide carbon offset options, and partner with businesses that
            share our values of environmental stewardship and social
            responsibility.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 lg:gap-5">
            <p
              className={`rounded-4xl p-1.5 sm:p-2 border text-xs sm:text-sm ${whiteBG} ${accentColorText}`}
            >
              Eco Certified
            </p>
            <p
              className={`rounded-4xl p-1.5 sm:p-2 border text-xs sm:text-sm ${whiteBG} ${accentColorText}`}
            >
              Local Partner
            </p>
            <p
              className={`rounded-4xl p-1.5 sm:p-2 border text-xs sm:text-sm ${whiteBG} ${accentColorText}`}
            >
              No Hidden Fees
            </p>
          </div>
        </div>
        {/* Right part */}
        <div className="flex flex-col p-3 text-start gap-4 lg:gap-5 w-full lg:w-1/2">
          <div className="flex items-center">
            <FaHeart className={`w-8 h-8 sm:w-10 sm:h-10 mr-3 ${accentColorText}`} />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold ml-2">
              Community Impact
            </h1>
          </div>
          <div className="gap-4 lg:gap-5 flex flex-col">
            <div className={`flex ${whiteBG} p-4 rounded-xl`}>
              <GiEcology className={`w-8 h-8 sm:w-10 sm:h-10 mr-3 ${accentColorText}`} />
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                  Environmental Care
                </h3>
                <p className={`text-xs sm:text-sm ${textLightGray}`}>
                  Carbon offset programs and eco-friendly travel options for
                  conscious travelers.
                </p>
              </div>
            </div>
            <div className={`flex ${whiteBG} p-4 rounded-xl`}>
              <FaHeart className={`w-8 h-8 sm:w-10 sm:h-10 mr-3 ${accentColorText}`} />
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                  Local Communities
                </h3>
                <p className={`text-xs sm:text-sm ${textLightGray}`}>
                  Supporting local businesses and promoting inclusive, authentic
                  travel experiences.
                </p>
              </div>
            </div>
            <div className={`flex ${whiteBG} p-4 rounded-xl`}>
              <FaDollarSign className={`w-8 h-8 sm:w-10 sm:h-10 mr-3 ${accentColorText} `} />
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                  Fair Pricing
                </h3>
                <p className={`text-xs sm:text-sm ${textLightGray}`}>
                  Transparent pricing that ensures fair value for travelers and
                  partners alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityResponsibility;