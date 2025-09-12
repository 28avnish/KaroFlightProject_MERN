import React from 'react'
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

const CTA = () => {
  return (
    <div>
      <div
          className={`${gradientBG} p-8 lg:p-20 flex items-center justify-center flex-col text-center ${textWhite} gap-4 lg:gap-5`}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-[48px] font-bold">
            Ready to plan your next adventure <br />
            with confidence?
          </h1>
          <p className="text-[20px]">
            Join millions of travelers who trust KaroFlight for transparent
            pricing, <br className='md:block hidden' /> reliable service, and unforgettable experiences.
          </p>

            <button 
            className={`${accentColor} p-1.5 flex items-center justify-center px-6 lg:px-8 rounded-2xl text-sm sm:text-base cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300`}
          >
              Browse Destinations
            </button>

          <p className={`text-xs sm:text-sm`}>
            No hidden fees. Transparent pricing. 24/7 support.
          </p>
        </div>
    </div>
  )
}

export default CTA
