import React from "react";
import { BiDesktop, BiPointer, BiTrendingUp } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";

const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const greenText = "text-[#28BD5A]";
const blueText = "text-[#002C52]";
const skyBlueText = "text-[#0082D3]"

const cardData = [
  {
    icon: <BiTrendingUp className={`${blueText} w-7 h-7 `} />,
    value: "2,540",
    label: "Offers Used",
  },
  {
    icon: <BiPointer className={`${accentColorText} w-7 h-7`} />,
    value: "5.8%",
    label: "Avg CTR",
  },
  {
    icon: <BiDesktop className={`${skyBlueText} w-7 h-7`} />,
    value: "Search Results",
    label: "Top Surface",
  },
  {
    icon: <BsCheck2Circle className={`${greenText} w-7 h-7`} />,
    value: "96%",
    label: "Approved Rate",
  },
];

const WhatMatters = () => {
  return (
    <div className="mb-10 w-full px-4 md:px-8">
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-[28px] md:text-[36px] font-bold text-center">Measure What Matters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 w-full max-w-5xl mx-auto">
          {cardData.map((card, idx) => (
            <div key={idx} className="w-full max-w-xs md:max-w-[264px] border border-gray-300 px-4 py-6 space-y-2 rounded-xl mx-auto">
              <div className="bg-gray-200 w-9 h-9 p-1 rounded flex items-center justify-center">
                {card.icon}
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold ">{card.value}</h2>
              <p className={`text-[14px] ${textLightGray}`}>{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatMatters;
