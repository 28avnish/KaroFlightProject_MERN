import React from 'react'
import { FaSearch, FaHeadset } from 'react-icons/fa'

const gradient = "linear-gradient(90deg, #0E064B 0%, #000000 100%)";
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

const Hero = () => {
  return (
    <div>
      <section
          className="relative text-white py-20"
          style={{ background: gradient }}
        >
          <div className="max-w-7xl h-[65vh] sm:h-[50vh] mx-auto px-6 text-center mt-10 sm:mt-30">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${accentColorText}`}
            >
              "<span className={`${textWhite}`}>Info Center</span>"
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
              Answers, policies, and practical details—so planning is simple and
              stress‑free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2">
                <FaSearch className="w-5 h-5" />
                Search help topics
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-xl border border-white flex items-center justify-center gap-2">
                <FaHeadset className="w-5 h-5" />
                Contact support
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Booking",
                "Cancellations",
                "Pricing & Fees",
                "Payment",
                "Safety",
              ].map((topic) => (
                <span
                  key={topic}
                  className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/30"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero