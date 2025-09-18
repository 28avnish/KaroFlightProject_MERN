import React from "react";
import dottedLine from "../../assets/images/dottedLine.svg";

import { FaArrowRight, FaPlane } from "react-icons/fa";

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

const Dream = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* header text section */}
      <div className=" flex flex-col items-center justify-center text-center">
        <h1 className="text-[48px] font-bold ">What We Dream For?</h1>
        <p className={`${textLightGray} text-center text-[18px]  mt-5 `}>
          Our dream is to become the world's most trusted travel partner. We aim
          to help <br /> people travel smarter, safer, and faster. They should
          explore the world that <br /> belongs to them with confidence.
        </p>
      </div>

      {/* timeline section */}
      <div className="flex   items-center justify-center w-full mt-5">
        <div className="flex flex-col items-center justify-between space-y-5 w-full">
          {/* 1st box */}
          <div className="flex w-full h-[250px] relative my-7 justify-center lg:justify-start  ">
            <div className="flex items-center justify-center gap-2.5  lg:right-80  lg:absolute ">
              <div className="relative mt-15 hidden lg:block">
                <img
                  src={dottedLine}
                  className=" rotate-130 sm:block hidden scale-105 "
                />
                <div className="rotate-90 absolute top-30 right-64">
                  <FaPlane className="h-15 w-10" />
                </div>
              </div>

              <div className="flex items-start justify-end bg-white p-5 rounded-2xl  w-[300px] md:w-[350px] h-[230px]">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[20px] font-semibold text-left">
                    A Global Travel Partner
                  </h2>
                  <p className={`${textLightGray} text-[18px] text-left `}>
                    Travel means freedom to explore the beautiful world. People
                    should feel planning and booking is simple and not
                    stressful. We know that you wish to have the best deals with
                    flexible choices.
                  </p>
                  <div className="flex w-full justify-end items-center text-[10px] font-bold ">
                    <p className="flex items-center gap-2 hover:scale-125 hover:underline cursor-pointer transition-transform duration-300">
                      Read more{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className="flex items-start justify-start lg:-ml-100  ">
            {/* <div className="relative mt-15">
                <img src={dottedLine} className=" rotate-130 sm:block hidden" />
               <div className="rotate-90 absolute top-30 right-64">
                 <FaPlane className="h-15 w-10" />
               </div>
                </div> */}

            <div className=" hidden lg:flex items-center justify-center md:items-start  bg-white p-5 rounded-2xl z-50">
              <div className=" flex-col flex ">
                <h2 className="text-[20px] font-semibold text-left">
                  Easy travel planning for All
                </h2>
                <p className={`${textLightGray} text-[18px] text-left`}>
                  We carry out the difficult tasks so that <br /> you don't have
                  to. With the use of <br /> Smart tools and clear insights, we{" "}
                  <br /> convert complicated planning into <br /> simple and
                  easy booking.
                </p>
              </div>
            </div>
            {/* mobile view */}
            <div className="flex lg:hidden w-[300px] items-center justify-center md:items-start  bg-white p-5 rounded-2xl z-50">
              <div className="flex flex-col ">
                <h2 className="text-[20px] font-semibold text-left">
                  Easy travel planning for All
                </h2>
                <p className={`${textLightGray} text-[18px] text-left`}>
                  We carry out the difficult tasks so that <br /> you don't have
                  to. With the use of <br /> Smart tools and clear insights, we{" "}
                  <br /> convert complicated planning into <br /> simple and
                  easy booking.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd box */}

          <div className="flex items-center justify-center gap-2.5 md:w-full w-[356px]  mb-20 md:-ml-6">
            <div className="relative hidden lg:block">
              <div className="flex relative items-center justify-center">
                <img
                  src={dottedLine}
                  className=" rotate-10 sm:block hidden -ml-5 -mt-5 scale-105"
                />
              </div>
              <div className="absolute top-33 -right-6">
                <FaPlane className="h-15 w-10" />
              </div>
            </div>

            <div className="flex items-center  justify-center mx-30 ">
              <div className="hidden lg:flex w-full h-[110px] relative ">
                <div className="flex flex-col absolute w-[340px] h-[190px] items-start justify-center gap-3 bg-white p-5 rounded-2xl -left-2 top-10 z-50">
                  <h2 className="text-[20px] font-semibold text-left">
                    Always Transparent and <br /> Reliable
                  </h2>
                  <p className={`${textLightGray} text-[18px] text-left`}>
                    We guarantee no hidden fees, surprise cost, or biasness. You
                    always get what you see here.
                  </p>
                </div>
              </div>

              {/* 3rd box Mobile View */}
              <div className="flex lg:hidden w-[300px] h-[110px] relative ">
                <div className="flex flex-col w-[340px] h-[190px] items-start justify-center gap-3 bg-white p-5 rounded-2xl -left-2 top-10 z-50">
                  <h2 className="text-[20px] font-semibold text-left">
                    Always Transparent and <br /> Reliable
                  </h2>
                  <p className={`${textLightGray} text-[18px] text-left`}>
                    We guarantee no hidden fees, surprise cost, or biasness. You
                    always get what you see here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 4th box */}

          <div className="flex items-center justify-between flex-row-reverse gap-2.5 my-10 md:-ml-20  ">
            <div className="relative mt-15 hidden lg:block">
              <div className="relative h-15 w-80">
                <img
                  src={dottedLine}
                  className="rotate-170 sm:block hidden absolute -top-40 left-30"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <div className="-rotate-180 absolute -top-2.5 right-44">
                <FaPlane className="h-15 w-10" />
              </div>
            </div>

            <div className="flex items-center justify-center bg-white p-2 rounded-2xl w-[300px]  md:w-[320px] h-[200px]">
              <div className="flex flex-col gap-3">
                <h2 className="text-[20px] font-semibold text-left">
                  Working for positive change
                </h2>
                <p className={`${textLightGray} text-[18px] text-left`}>
                  We strongly believe that <br /> travel should make a positive{" "}
                  <br /> impact on the people and <br /> the world.
                </p>
                <div className="flex w-full justify-end items-center text-[10px] font-bold ">
                  <p className="flex items-center gap-2 hover:scale-125 hover:underline cursor-pointer transition-transform duration-300">
                    Read more{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
