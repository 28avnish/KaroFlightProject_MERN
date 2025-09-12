import React from "react";
import Search from "../../assets/images/Search.svg";
import { BsCheck2Circle, BsExclamationCircle } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

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

const CancellationRefund = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cancellations & Refunds</h2>
            <p className="text-xl text-gray-600">
              Clear policies and transparent processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className=" border border-gray-200 rounded-2xl p-6 flex items-start">
              <div className="mr-5 flex-shrink-0">
                <img
                  src={Search}
                  className="h-16 w-16 rounded-xl object-cover"
                  alt="Cancellation Rules"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Cancellation Rules
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Policies set by airline/hotel; displayed before and after
                  purchase. We ensure complete transparency about cancellation
                  terms.
                </p>
              </div>
            </div>

            <div className=" border border-gray-200 rounded-2xl p-6 flex items-start">
              <div className="mr-5 flex-shrink-0">
                <img
                  src={Search}
                  className="h-16 w-16 rounded-xl object-cover"
                  alt="Refund Flow"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Refund Flow</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <div className=" mr-3 flex-shrink-0">
                      <BsCheck2Circle className="text-[#28BD5A]" />
                    </div>
                    <span className="text-sm">Request submitted</span>
                  </div>
                  <div className="flex items-center">
                    <div className=" mr-3 flex-shrink-0">
                      <MdOutlineWatchLater className="text-[#002C52] " />
                    </div>
                    <span className="text-sm">Validate policy</span>
                  </div>
                  <div className="flex items-center">
                    <div className=" mr-3 flex-shrink-0">
                      <BsExclamationCircle className={`${accentColorText}`} />
                    </div>
                    <span className="text-sm">Process to original method</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Timelines depend on supplier/bank processing.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Frequently Asked Questions
            </h3>

            <div className=" divide-y-2 divide-gray-300">
              {["Refund timeline", "Failed booking", "Contacting support"].map(
                (question, index) => (
                  <div
                    key={index}
                    className="py-6 flex justify-between items-center"
                  >
                    <span className="font-medium">{question}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationRefund;
