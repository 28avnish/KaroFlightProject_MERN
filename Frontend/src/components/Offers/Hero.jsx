import React from "react";
import {
  BiGlobe,
  BiPurchaseTag,
  BiStopwatch,
  BiTrendingUp,
} from "react-icons/bi";

const accentGradient =
  "bg-gradient-to-br from-[#002C52] via-[#0A4376] to-[#F97A1F]";

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const accentColor = "bg-[#FF621F]";
const accentColorText = "text-[#FF621F]";
const whiteBG = "bg-white";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";
const greenText = "text-[#28BD5A]";
const greenBG = "bg-[#28BD5A]";
const blueBG = "bg-[#002C52]";
const blueText = "text-[#002C52]";
const Hero = () => {
  return (
    <div className={`${accentGradient} min-h-screen w-full flex items-center justify-center px-4 md:px-8`}>
      <div className="flex flex-col md:flex-row items-center justify-center  mx-auto max-w-7xl w-full">
        {/* left part */}
  <div className="flex items-start flex-col w-full md:w-1/2 mb-10 md:mb-0">
          <div className="flex items-center gap-3 text-white">
            <div
              className={`bg-white/20 border border-white/50 flex items-center rounded-2xl p-1 px-6 gap-1.5`}
            >
              <BiStopwatch />
              <span>Real-time</span>
            </div>
            <div
              className={`bg-white/20 border border-white/50 flex items-center rounded-2xl p-1 px-6 gap-1.5`}
            >
              <BiGlobe />
              <span>Cross-surface</span>
            </div>
            <div
              className={`bg-white/20 border border-white/50 flex items-center rounded-2xl p-1 px-6  gap-1.5`}
            >
              <BiPurchaseTag />
              <span>Governed</span>
            </div>
          </div>
          <h1
            className={`${accentColorText} text-[32px] md:text-[48px] font-bold italic my-6 leading-tight`}
          >
            Create, approve, and Launch <br className="hidden md:block" /> High‑Impact Promotions
          </h1>
          <p className={`${textWhite} text-[16px] md:text-[20px]`}>
            Add discounts, coupons, and seasonal fares, sync live Trip <br className="hidden md:block" />
            Jack data, publish everywhere, and track performance— <br className="hidden md:block" />
            governed by Super Admin approval.
          </p>
          <div className="flex items-center gap-4 my-7">
            <div className={`${whiteBG} p-2 px-6 rounded-xl`}>
              Request a Demo
            </div>
            <div className={`${whiteBG} p-2 px-6 rounded-xl`}>
              See Live Examples
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="flex items-center justify-center flex-col space-y-5 w-full md:w-1/2">
          <div className={`${whiteBG} rounded-xl p-6 w-full max-w-md h-[130px]`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className={`${greenBG} rounded-full h-3 w-3`}></div>
                <p>Spring Sale</p>
              </div>
              <div
                className={`${accentColorText} text-[16px] font-semibold bg-red-200 p-1 px-3 rounded-2xl`}
              >
                Seasonal
              </div>
            </div>
            <div className={`${textLightGray} text-[14px] font-medium my-4`}>
              25% off all European flights
            </div>
            <div className={`flex items-center  ${greenText}`}>
              <BiTrendingUp />
              <span className="text-[14px] font-medium">+15% CTR</span>
            </div>
          </div>
          <div className={`${whiteBG} rounded-xl p-6 w-full max-w-md h-[130px]`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className={`${blueBG} rounded-full h-3 w-3`}></div>
                <p>Weekend Flash</p>
              </div>
              <div
                className={`${blueText} text-[16px] font-semibold bg-gray-200 p-1 px-3 rounded-2xl`}
              >
                auto-applied
              </div>
            </div>
            <div className={`${textLightGray} text-[14px] font-medium my-4`}>
              $50 off bookings over $500
            </div>
            <div className={`flex items-center gap-5 `}>
              <span className={`${blueBG} w-10 h-2 rounded-l-2xl`}></span>
              <span className="text-[14px] font-medium">742 used</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
