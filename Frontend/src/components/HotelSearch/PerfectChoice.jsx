import React from 'react'
import { FaHotel } from 'react-icons/fa'
import Perfect from '../../assets/images/Perfect.svg'

const accentText = "text-[#FF621F]";
const accentBG = "bg-[#FF621F]";
const whiteText = "text-[#FFFFFF]";
const heroCardBG = "bg-[#F2F2F2]";
const onSelectBG = "bg-[#040A53]";
const whiteBG = "bg-[#ffffff] ";
const textLightGray = "text-[#808080]";

const PerfectChoice = () => {
  return (
    <div className='max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-15 items-center'>
        {/* Text Content - Order changes on mobile */}
        <div className='flex flex-col sm:items-start items-center justify-center text-left order-2 md:order-1'>
          <div className='flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6'>
            <FaHotel className={`${accentText} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}/>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
              Perfect Choice for City Escape
            </h1>
          </div>
          <p className='text-sm  sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
            In case you dream for an amazing break from the busy city life, make it real with the perfect stays. Choose the best city Centre hotels for wonderful experience.
          </p>
        </div>
        
        {/* Image - Order changes on mobile */}
        <div className='flex justify-center md:justify-end order-1 md:order-2'>
          <img 
            src={Perfect} 
            alt="Luxury hotel room with city view" 
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default PerfectChoice