import React from "react";
import arrowRight from "../../assets/icons/arrow-right-5.svg";
import hoverArrowRight from "../../assets/icons/arrow-right-6.svg";
import arrowLeft from "../../assets/icons/arrow-left-3.svg";
import hoverArrowLeft from "../../assets/icons/arrow-left-4.svg";

const Pagination = () => {
  return (
    <div className="flex flex-col items-center gap-6 mx-5 py-10">
      {/* Load Next Page Button */}
      <button className="bg-black font-bold text-white w-full sm:w-auto sm:px-32  mx-6 py-4 uppercase text-sm tracking-widest">
        Load Next Page
      </button>

      {/* Pagination */}
      <div className="flex items-center gap-4 w-full justify-center ">
        {/* Left Arrow */}
        <button className="text-gray-500 group ">
          <img
            src={arrowLeft}
            alt="left"
            className="group-hover:hidden w-8 h-8"
          />
          <img
            src={hoverArrowLeft}
            alt="left"
            className="hidden group-hover:block w-8 h-8"
          />
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-12 text-center font-bold  ${
              num === 1
                ? " font-helvetica-bold"
                : "text-gray-500 hover:text-black font-helvetica-thin"
            }`}
          >
            {num}
          </button>
        ))}

        {/* Right Arrow */}
        <button className="text-gray-500 group ">
          <img
            src={arrowRight}
            alt="right"
            className="group-hover:hidden w-8 h-8"
          />
          <img
            src={hoverArrowRight}
            alt="right"
            className="hidden group-hover:block w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
