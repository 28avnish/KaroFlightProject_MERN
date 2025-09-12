import React from "react";
import { LuPencilLine } from "react-icons/lu";
import { BsGrid1X2Fill } from "react-icons/bs";
import { GiCycle } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";

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
const skyBlueText = "text-[#0052CC]";
const boxBG = "bg-[#FEE2E2]";
const WhatUDoInOfferPanel = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-[28px] md:text-[36px] font-bold mb-10 text-center">
          What You Can Do in the Offer Panel
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-6xl mx-auto">
          <div className="flex flex-col text-left border border-gray-300 shadow-sm rounded-xl p-5 space-y-5 w-full max-w-xs md:max-w-none mx-auto">
            <div className="w-15 h-15 shadow-md rounded-full flex items-center justify-center p-4">
              <LuPencilLine className={`h-10 w-10 ${blueText}`} />
            </div>
            <h2 className="text-[18px] font-semibold">Offer Creation</h2>
            <p className="text-[14px]">
              Create/edit discounts, coupons, bundles, and seasonal campaigns.
              Set dates, routes, eligibility, and stack rules.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Discounts
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Coupons
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Schedules
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left border border-gray-300 shadow-sm rounded-xl p-5 space-y-5 w-full max-w-xs md:max-w-none mx-auto">
            <div className="w-15 h-15 shadow-md rounded-full flex items-center justify-center p-4">
              <GiCycle className={`h-10 w-10 ${accentColorText}`} />
            </div>
            <h2 className="text-[18px] font-semibold">Trip Jack Integration</h2>
            <p className="text-[14px]">
              Pull real‑time availability and fares from Trip Jack. Auto-refresh
              rules and pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Real-time
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Sync
              </div>
              {/* <div className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}>Schedules</div> */}
            </div>
          </div>
          <div className="flex flex-col text-left border border-gray-300 shadow-sm rounded-xl p-5 space-y-5 w-full max-w-xs md:max-w-none mx-auto">
            <div className="w-15 h-15 shadow-md rounded-full flex items-center justify-center p-4">
              <BsGrid1X2Fill className={`h-10 w-10 ${skyBlueText}`} />
            </div>
            <h2 className="text-[18px] font-semibold">Display & Placement</h2>
            <p className="text-[14px]">
              Publish to homepage, search results, and user dashboards with one
              toggle. Preview each surface before go‑live.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Homepage
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                SERP
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Dashboard
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left border border-gray-300 shadow-sm rounded-xl p-5 space-y-5 w-full max-w-xs md:max-w-none mx-auto">
            <div className="w-15 h-15 shadow-md rounded-full flex items-center justify-center p-4">
              <AiOutlineBarChart className={`h-10 w-10 ${greenText}`} />
            </div>
            <h2 className="text-[18px] font-semibold">Analytics & Approval</h2>
            <p className="text-[14px]">
              Track usage/CTR/conversions. Super Admin approval flow with
              version history.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Tracking
              </div>
              <div
                className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}
              >
                Governance
              </div>
              {/* <div className={`text-[12px] ${boxBG} p-1.5 rounded-2xl flex items-center justify-center`}>Schedules</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatUDoInOfferPanel;
