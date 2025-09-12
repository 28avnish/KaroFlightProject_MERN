import { FiBarChart,FiCheckCircle } from 'react-icons/fi';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { LuLink2 } from 'react-icons/lu';
import { RiComputerLine } from 'react-icons/ri';

const textLightGray = "text-gray-500";

export default function OfferWorkflowVisual() {
  return (
    <div className="py-10 px-4 md:px-8 flex items-center justify-center flex-col w-full">
      <h1 className="text-[28px] md:text-[36px] font-bold text-center mb-8">
        From Draft to Live in Five Steps
      </h1>

      {/* Step icons and text */}
      <div className="relative w-full max-w-6xl mx-auto mb-8">
        {/* Horizontal line behind icons (hidden on mobile) */}
        <div className="hidden md:block absolute top-2/6 left-0 right-0 h-0.5 bg-gray-300 z-0" style={{transform: 'translateY(-50%)'}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 text-center my-8 relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative mb-2">
              <div className="flex items-center justify-center bg-[#002C52] w-16 h-16 md:w-20 md:h-20 p-4 rounded-full z-10"><FaRegPenToSquare className='text-white h-8 w-8 md:h-10 md:w-10' /></div>
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-1">Draft Offer</h3>
            <p className="text-sm md:text-base text-gray-600">
              name, type, discount, dates, eligibility
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative mb-2">
              <div className="flex items-center justify-center bg-[#FF671F] w-16 h-16 md:w-20 md:h-20 p-4 rounded-full z-10"><LuLink2 className='text-white h-8 w-8 md:h-10 md:w-10' /></div>
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-1">Link Trip Jack</h3>
            <p className="text-sm md:text-base text-gray-600">tech/sync, validate data</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative mb-2">
              <div className="flex items-center justify-center bg-[#0082D3] w-16 h-16 md:w-20 md:h-20 p-4 rounded-full z-10"><RiComputerLine className='text-white h-8 w-8 md:h-10 md:w-10' /></div>
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-1">Choose Placement</h3>
            <p className="text-sm md:text-base text-gray-600">
              homepage/search/dashboard, tags/edits
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative mb-2">
              <div className="flex items-center justify-center bg-[#28BD5A] w-16 h-16 md:w-20 md:h-20 p-4 rounded-full z-10"><FiCheckCircle className='text-white h-8 w-8 md:h-10 md:w-10' /></div>
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-1">Submit for Approval</h3>
            <p className="text-sm md:text-base text-gray-600">
              Super Admin reviews, comments, approve/return
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative mb-2">
              <div className="flex items-center justify-center bg-[#657081] w-16 h-16 md:w-20 md:h-20 p-4 rounded-full z-10"><FiBarChart className='text-white h-8 w-8 md:h-10 md:w-10' /></div>
            </div>
            <h3 className="font-semibold text-base md:text-[18px] mb-1">Monitor Performance</h3>
            <p className={`text-sm md:text-[14px] ${textLightGray}`}>
              usage, CTR, conversions, pause/resume
            </p>
          </div>
        </div>
      </div>
      <p className={`${textLightGray} text-center text-sm md:text-base`}>Edit or pause any time—history is preserved.</p>
    </div>
  );
}
