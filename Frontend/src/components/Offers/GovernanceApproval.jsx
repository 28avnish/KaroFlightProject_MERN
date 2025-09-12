import React from "react";
import { BsCheck2Circle, BsShield } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineCancel } from 'react-icons/md';

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-white";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";
const greenBG = "bg-[#28BD5A]";
const blueBG = "bg-[#002C52]";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const greenText = "text-[#28BD5A]";
const blueText = "text-[#002C52]";
const skyBlueText = "text-[#0082D3]"


const GovernanceApproval = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <div className="flex items-center justify-center flex-col w-full">
        <h1 className="text-[28px] md:text-[36px] font-bold text-center mb-8">Governance & Approval</h1>
        <div className="flex flex-col md:flex-row justify-center py-8 md:py-16 gap-6 md:gap-[48px] w-full max-w-6xl mx-auto">
          {/* left part */}
          <div className="border border-gray-300 rounded-xl p-4 md:p-5 text-left space-y-3 w-full max-w-xl md:max-w-[584px] mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 w-8 h-8 p-1 rounded flex items-center justify-center">
                <BsShield className={`${blueText}`} />
              </div>
              <h2 className="text-[24px] font-semibold">Approval Workflow</h2>
            </div>

            <div className="flex flex-col space-y-8 mt-6">
              <div className="flex items-center  gap-3">
                <div className="flex items-start bg-gray-200 p-1.5 rounded-sm">
                  <BsCheck2Circle className={`${blueText}`}/>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium">Maker‑checker</h3>
                  <p className={`text-[14px] ${textLightGray}`}>
                    Separate creation and approval roles
                  </p>
                </div>
              </div>
             <div className="flex items-center  gap-3">
                <div className="flex items-start bg-gray-200 p-1.5 rounded-sm">
                  <FiUsers className={`${blueText}`}/>
                </div>
                <div>
                  <h3 className="text-[16px]">Role permissions</h3>
                  <p className="text-[14px]">
                    Granular access control by user type
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-3">
                <div className="flex items-start bg-gray-200 p-1.5 rounded-sm">
                  <FaRegCommentAlt className={`${blueText}`}/>
                </div>
                <div>
                  <h3 className="text-[16px]">Comment thread</h3>
                  <p className="text-[14px]">Review feedback and discussion</p>
                </div>
              </div>
             <div className="flex items-center  gap-3">
                <div className="flex items-start bg-gray-200 p-1.5 rounded-sm">
                  <FaClockRotateLeft className={`${blueText}`}/>
                </div>
                <div>
                  <h3 className="text-[16px]">Versioning</h3>
                  <p className="text-[14px]">Complete audit trail of changes</p>
                </div>
              </div>
              <p className={`text-[14px] ${textLightGray}`}>
                <b>Note:</b> Only Super Admin can approve and publish.
              </p>
            </div>
          </div>
          {/* right part */}
          <div className="border border-gray-300 rounded-xl p-4 md:p-6 w-full max-w-xl md:max-w-[584px] space-y-4 max-h-[306px] mx-auto">
            <h2 className="text-[24px] font-semibold">Approval Queue</h2>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <FaClockRotateLeft className="text-[#657081]" />
                <p className="text-[14px]">Spring Sale Campaign</p>
              </div>
              <div className="text-[12px] bg-[#FEF3C7] text-[#92400E] px-3 py-1 rounded-2xl ">pending</div>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <BsCheck2Circle className="text-[#657081]"/>
                <p className="text-[14px]">Weekend Flash Deal</p>
              </div>
              <div className="text-[12px] bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-2xl">approved</div>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <MdOutlineCancel className="text-[#657081]"/>
                <p className="text-[14px]">Holiday Bundle Offer</p>
              </div>
              <div className="text-[12px] text-[#991B1B] bg-[#FEE2E2] px-3 py-1 rounded-2xl">returned</div>
            </div>
            <div className={`text-[14px] flex items-center justify-center ${blueText} cursor-pointer`} >View All Items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceApproval;
