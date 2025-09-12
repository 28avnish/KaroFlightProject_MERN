import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaCreditCard, FaReceipt, FaShieldAlt, } from "react-icons/fa";


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

const PaymentsSecurity = () => {
  return (
    <div>
      <section
        className={`py-20 ${textWhite}`}
        style={{ background: gradient }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Payments & Security</h2>
            <p className="text-[20px] opacity-90 max-w-3xl mx-auto">
              Your transactions and data are protected with industry-leading{" "}
              <br />
              security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaCreditCard />,
                title: "Secure Payments",
                description: (
                  <>
                    UPI, major cards, net banking with <br /> encrypted
                    processing
                  </>
                ),
              },
              {
                icon: <FaShieldAlt />,
                title: "Data Protection",
                description: "PCI-aware handling with GDPR-ready compliance",
              },
              {
                icon: <FaReceipt />,
                title: "Instant Receipts",
                description:
                  "Digital receipts with GST details where applicable",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex items-center justify-center text-center flex-col"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="opacity-90 text-[16px]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {["Encrypted", "PCI-aware", "GDPR-ready"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className=" h-[16px] w-[16px] mr-2">
                       <BsCheck2Circle className="text-[#28BD5A]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

            <a href="#" className="text-white font-medium underline">
              Payment & Data Policy →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsSecurity;
