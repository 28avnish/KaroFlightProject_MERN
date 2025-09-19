import React from "react";
import { FiHome, FiSearch, FiUser } from "react-icons/fi";
import offersCardBG1 from "../../assets/images/offersCardBG.svg";
import offersCardBG2 from "../../assets/images/offersCardBG2.svg";
import offersCardBG3 from "../../assets/images/offersCardBG3.svg";

const glassBG =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/80 to-[#FFFFFF]/0 ";
const accentGradientWhite =
  "bg-gradient-to-r from-[#FF621F]/100 to-[#FF671F]/25 ";
const accentColorText = "text-[#FF621F]";
const whiteBG = "bg-white";
const textLightGray = "text-gray-500";
const greenBG = "bg-[#28BD5A]";
const blueBG = "bg-[#002C52]";
const blueText = "text-[#002C52]";

const offersData = [
  {
    image: offersCardBG1,
    icon: <FiHome className={`${blueText} bg-gray-200 p-1 w-5 h-5 rounded`} />,
    title: "Homepage Card",
    subtitle: "hero promo with CTA",
    badge: {
      type: "featured",
      text: "Featured Offer",
      color: blueBG,
      border: "border-[#002C52]",
    },
    offerTitle: "Spring Sale: 25% Off Europe",
    offerDesc: "Book your European adventure now",
    cta: "Claim Offer",
    footnote: "Auto-applied when eligible",
  },
  {
    image: offersCardBG2,
    icon: (
      <FiSearch className={`${blueText} bg-gray-200 p-1 w-5 h-5 rounded`} />
    ),
    title: "Search Results Inline",
    subtitle: "Offer applied: 10% OFF – Auto",
    badge: {
      type: "price",
      text: "Paris → London",
      color: greenBG,
      border: "border-[#002C52]",
      price: { current: "$89", old: "$99" },
      offer: "Offer applied: 10% OFF – Auto",
    },
    footnote: "Auto-applied when eligible",
  },
  {
    image: offersCardBG3,
    icon: <FiUser className={`${blueText} bg-gray-200 p-1 w-5 h-5 rounded`} />,
    title: "User Dashboard Tile",
    subtitle: "member‑only offer",
    badge: {
      type: "members",
      text: "Members Only",
      color: accentColorText,
      border: "border-[#FF621F]",
      offerTitle: "Exclusive Weekend Deal",
      offerDesc: "$50 off bookings over $500",
      cta: "Expires in 2 days",
    },
    footnote: "Auto-applied when eligible",
  },
];

const UsersOffers = () => {
  return (
    <div className="py-16">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[36px] font-bold">Where Users See Offers</h1>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 my-15 md:w-[1136px] w-auto ">
            {offersData.map((card, idx) => (
              <div
                key={idx}
                className="max-w-md mx-auto rounded-xl overflow-hidden"
              >
                {/* Hero Image Section */}
                <div className="absolute flex items-center justify-center">
                  <span>
                    <img src={card.image} className="" />
                  </span>
                </div>
                <div className="relative h-full  p-6">
                  {/* Content Section */}
                  <div className="space-y-2.5">
                    <div className={`${whiteBG} rounded-xl p-3 w-[290px]`}>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-5 mb-5">
                          {card.icon}
                          <p className="text-[18px] font-semibold text-[#171D26]">
                            {card.title}
                          </p>
                        </div>
                        <p className={`${textLightGray} text-[14px]`}>
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* Badge/Offer Section */}
                    {card.badge.type === "featured" && (
                      <div className="border-2 border-dashed p-2 border-[#002C52] rounded-xl w-[307px]">
                        <div
                          className={`flex items-center gap-3 px-3 py-1 ${whiteBG} rounded-full mb-4 w-35`}
                        >
                          <div
                            className={`${blueBG} h-2 w-2 rounded-full`}
                          ></div>
                          <div
                            className={`text-[14px] font-medium  ${blueText}`}
                          >
                            {card.badge.text}
                          </div>
                        </div>
                        <div className={`${glassBG} py-2 px-1`}>
                          <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-2">
                            {card.offerTitle}
                          </h2>
                          <p className={`mb-6 text-[14px] ${blueText}`}>
                            {card.offerDesc}
                          </p>
                          <button
                            className={`w-30 text-[12px] text-white py-1 px-3 rounded-xl ${blueBG}`}
                          >
                            {card.cta}
                          </button>
                        </div>
                      </div>
                    )}
                    {card.badge.type === "price" && (
                      <div className=" flex flex-col w-[307px] ">
                        <div
                          className={`${whiteBG} rounded-xl p-4 flex items-center justify-between`}
                        >
                          <div className="space-y-1.5">
                            <p className="text-[14px] font-medium text-[#171D26] ">
                              {card.badge.text}
                            </p>
                            <p className={`${textLightGray} text-[12px]`}>
                              Economy • 2h 15m
                            </p>
                          </div>
                          <div className="space-y-1.5">
                            <p className={`${blueText} text-[16px] font-bold`}>
                              {card.badge.price.current}
                            </p>
                            <p className={`${textLightGray} text-[14px] `}>
                              {card.badge.price.old}
                            </p>
                          </div>
                        </div>
                        <div className={`${greenBG} p-3 rounded-full my-5 w-55 `}>
                          <p className="text-[12px] font-medium text-white ">
                            {card.badge.offer}
                          </p>
                        </div>
                      </div>
                    )}
                    {card.badge.type === "members" && (
                      <div className="border-2 border-dashed p-2 border-[#FF621F] rounded-xl w-[307px]">
                        <div
                          className={`flex items-center gap-3 px-3 py-1 ${whiteBG} rounded-full mb-4 w-35`}
                        >
                          <div
                            className={`text-[14px] font-medium  ${accentColorText}`}
                          >
                            {card.badge.text}
                          </div>
                        </div>
                        <div className={`${glassBG} py-2 px-1`}>
                          <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-2">
                            {card.badge.offerTitle}
                          </h2>
                          <p className={`mb-6 text-[14px] ${blueText}`}>
                            {card.badge.offerDesc}
                          </p>
                          <button
                            className={`w-30 text-[12px] text-black py-1 px-3 rounded-xl ${accentGradientWhite}`}
                          >
                            {card.badge.cta}
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Footnote */}
                    {card.badge.type === "featured" && (
                      <p className="text-xs text-gray-500 bg-white rounded-2xl mt-3 text-center">
                        {card.footnote}
                      </p>
                    )}
                    {card.badge.type === "price" && (
                      <p className="text-xs text-gray-500 bg-white rounded-2xl mt-7.5 text-center">
                        {card.footnote}
                      </p>
                    )}
                    {card.badge.type === "members" && (
                      <p className="text-xs text-gray-500 bg-white rounded-2xl mt-3 text-center">
                        {card.footnote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersOffers;
