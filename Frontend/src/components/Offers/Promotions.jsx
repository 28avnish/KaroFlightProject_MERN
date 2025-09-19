import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { GoHeart, GoPeople } from "react-icons/go";

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

const Promotions = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-[28px] md:text-[36px] font-bold mb-10 text-center">Why Promotions Matter</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-center text-center flex-col border border-gray-300 w-full max-w-xs md:max-w-none h-[220px] space-y-4 rounded-xl mx-auto">
            <div
              className={`p-4 w-15 h-15 flex items-center justify-center rounded-full shadow-md ${blueText}`}
            >
              <GoPeople className="h-8 w-8" />
            </div>
            <h2 className="text-[20px] font-semibold ">Attract</h2>
            <p className={`${textLightGray} text-[16px]`}>
              Timely deals that win searchers and <br />
              reduce bounce.
            </p>
          </div>
          <div className="flex items-center justify-center text-center flex-col border border-gray-300 w-full max-w-xs md:max-w-none h-[220px] space-y-4 rounded-xl mx-auto">
            <div
              className={`p-4 w-15 h-15 flex items-center justify-center rounded-full shadow-md ${blueText}`}
            >
              <BiTrendingUp className="h-8 w-8" />
            </div>
            <h2 className="text-[20px] font-semibold ">Convert</h2>
            <p className={`${textLightGray} text-[16px]`}>
              Contextual offers at checkout and search <br className="md:block hidden" /> increase CTR.
            </p>
          </div>
          <div className="flex items-center justify-center text-center flex-col border border-gray-300 w-full max-w-xs md:max-w-none h-[220px] space-y-4 rounded-xl mx-auto">
            <div
              className={`p-4 w-15 h-15 flex items-center justify-center rounded-full shadow-md ${blueText}`}
            >
              <GoHeart className="h-8 w-8" />
            </div>
            <h2 className="text-[20px] font-semibold ">Retain</h2>
            <p className={`${textLightGray} text-[16px]`}>
              Member‑only coupons nurture loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
