import React from "react";
import Fly from "../../assets/images/Fly.svg";
import activities from "../../assets/images/activities.jpg";
import HotelsAndAccommodations from "../../assets/images/HotelsAndAccommodations.jpg";
import { FaHotel, FaPlaneDeparture } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.7) 0%, rgba(5,36,97,0.7) 50%, rgba(13,64,165,0.7) 100%)";
const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
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
const gradient = "bg-[linear-gradient(90deg,#0E064B_0%,#000000_100%)]";

const TravelEssentials = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Travel Essentials</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know for a smooth journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Before You Fly",
                image: Fly,
                description:
                  "Essential documents, check-in procedures, and travel tips to ensure a smooth journey from departure to arrival.",
                icon: <FaPlaneDeparture />,
              },
              {
                category: "Hotels & Stays",
                image: HotelsAndAccommodations,
                description:
                  "Booking confirmations, check-in processes, amenities, and local recommendations for your accommodation.",
                icon: <FaHotel />,
              },
              {
                category: "Activities",
                image: activities,
                description:
                  "Discover local attractions, guided tours, and experiences to make the most of your destination.",
                icon: <IoLocationOutline />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md  group group-hover:shadow-xl"
              >
                <div className="overflow-hidden relative ">
                  <div className=" h-[192px] w-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <img
                      src={item.image}
                      className="h-full w-full object-fit group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)",
                      }}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <span className="font-semibold text-[20px]">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className={` mb-6 ${textLightGray}`}>{item.description}</p>
                  <a
                    href="#"
                    className="text-[#002C52] font-medium flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelEssentials;
