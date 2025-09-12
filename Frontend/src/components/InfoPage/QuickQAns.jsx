import React from "react";
import {
  MdCancel,
  MdAttachMoney,
  MdCreditCard,
  MdAutorenew,
  MdSupportAgent,
  MdLocalOffer,
} from "react-icons/md";
import { HiArrowUturnUp } from 'react-icons/hi2';

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

const QuickQAns = () => {
  const faqs = [
    {
      icon: "cancel",
      title: "How do I change or cancel a booking?",
      description: "Manage trips from your account; supplier rules apply.",
    },
    {
      icon: "money",
      title: "What fees does KaroFlight charge?",
      description: "Platform fees/markups shown before payment—never hidden.",
    },
    {
      icon: "card",
      title: "Which payment methods are supported?",
      description: "UPI, major cards, net banking (varies by market).",
    },
    {
      icon: "renew",
      title: "How are refunds processed?",
      description:
        "Processed to original method after policy validation; bank timelines may apply.",
    },
    {
      icon: "support",
      title: "Do you offer 24/7 support?",
      description: "24/7 urgent chat; extended email hours.",
    },
    {
      icon: "offer",
      title: "Where do prices come from?",
      description: "Direct feeds from airlines, hotels, and trusted partners.",
    },
  ];

  return (
    <div>
      <section className={`mt-30 flex items-center justify-center flex-col`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Answers</h2>
            <p className="text-xl text-gray-600">Top FAQs to get you started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-8 py-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div
                    className={`text-2xl mr-4 ${whiteBG} rounded-xl shadow-lg p-3`}
                  >
                    {faq.icon === "cancel" && (
                      <MdCancel style={{ color: "#0A0A4A" }} />
                    )}
                    {faq.icon === "money" && (
                      <MdAttachMoney style={{ color: "#0A0A4A" }} />
                    )}
                    {faq.icon === "card" && (
                      <MdCreditCard style={{ color: "#0A0A4A" }} />
                    )}
                    {faq.icon === "renew" && (
                      <HiArrowUturnUp style={{ color: "#0A0A4A" }} />
                    )}
                    {faq.icon === "support" && (
                      <MdSupportAgent style={{ color: "#0A0A4A" }} />
                    )}
                    {faq.icon === "offer" && (
                      <MdLocalOffer style={{ color: "#0A0A4A" }} />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{faq.title}</h3>
                    <p className={`mb-4 ${textLightGray}`}>{faq.description}</p>
                    <a
                      href="#"
                      className="text-[#002C52] font-medium flex items-center"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-1"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickQAns;
