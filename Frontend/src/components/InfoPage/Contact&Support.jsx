import React from "react";
import { FcOnlineSupport } from 'react-icons/fc';
import { BsChat, } from 'react-icons/bs';
import { FiGlobe, FiMail, FiPhoneCall } from 'react-icons/fi';
import { MdMiscellaneousServices, MdOutlineWatchLater } from "react-icons/md";

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

const ContactSupport = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact & Support</h2>
            <p className="text-xl text-gray-600">
              We're here to help when you need us
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="text-3xl mr-4"><FcOnlineSupport /></div>
                <h3 className="text-2xl font-semibold">Human Support</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Our dedicated team is ready to assist you with any questions or
                concerns.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <BsChat />,
                    title: "In-app Chat",
                    description: "Instant support for urgent matters",
                  },
                  {
                    icon: <FiMail />,
                    title: "Email Support",
                    description: "Detailed queries and documentation",
                  },
                  {
                    icon: <FiPhoneCall />,
                    title: "Callback Request",
                    description: "Personal assistance for complex issues",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-lg bg-gray-50"
                  >
                    <div className="text-2xl mr-4 text-[#002C52] ">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="mr-2"><MdOutlineWatchLater /></div>
                  <span>
                    Typical reply times: Chat 2-5 min • Email 4-8 hours
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="text-3xl mr-4"><MdMiscellaneousServices /></div>
                <h3 className="text-2xl font-semibold">Self-Service</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Access help articles, FAQs, and manage your bookings 24/7.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <MdOutlineWatchLater />,
                    title: "Hours & Availability",
                    description:
                      "24/7 urgent chat • Extended email hours • Priority callback",
                  },
                  {
                    icon: <FiGlobe />,
                    title: "Languages",
                    description: "English + regional languages supported",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`text-2xl mr-4 ${accentColorText}`} >{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-500 text-sm">
                  We never spam. We contact only when you ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
