import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import closeCircle from "../../assets/icons/close-circle.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import closeCircle2 from "../../assets/icons/close-circle-2.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import arrowRight from "../../assets/icons/arrow-right-4.svg";

const DEFAULT_RANGE = [279, 2265.41];

const FilterSidebar = ({ filterState, setFilterState }) => {
  const [priceRange, setPriceRange] = useState(DEFAULT_RANGE);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handlePriceChange = (value) => {
    setPriceRange(value);

    const isDefault =
      value[0] === DEFAULT_RANGE[0] && value[1] === DEFAULT_RANGE[1];

    setSelectedFilters((prev) => {
      const hasPriceFilter = prev.includes("PRICE RANGE");

      if (!isDefault && !hasPriceFilter) {
        return [...prev, "PRICE RANGE"];
      }

      if (isDefault && hasPriceFilter) {
        return prev.filter((f) => f !== "PRICE RANGE");
      }

      return prev;
    });
  };

  const handleRemoveFilter = (filterToRemove) => {
    if (filterToRemove === "PRICE RANGE") {
      setPriceRange(DEFAULT_RANGE);
    }
    setSelectedFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSelectedSizes([]);
    setPriceRange(DEFAULT_RANGE);
  };

  const togglePriceSection = () => {
    setIsPriceOpen((prev) => !prev);
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const sections = ["COLOUR", "SIZE", "STYLE", "FIT", "MATERIAL"];

  return (
    <div
      className={`fixed text-sm font-bold tracking-widest top-1/8 sm:top-0 sm:right-0 w-full sm:w-[470px] h-full bg-white z-50 flex flex-col shadow-lg transition-transform duration-300 ease-in-out transform ${
        filterState.open
          ? "translate-y-0 sm:translate-x-0 sm:translate-y-0"
          : "translate-y-full sm:translate-x-full sm:translate-y-0"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-6">
        {filterState.submenu ? (
          <>
            <img
              src={arrowLeft}
              alt="back"
              className="h-6 cursor-pointer"
              onClick={() => setFilterState({ open: true, submenu: null })}
            />
            <h2 className="text-[15px] tracking-widest font-bold  uppercase flex-1 text-center">
              {filterState.submenu}
            </h2>
            <img
              src={closeCircle}
              alt="close"
              className="h-6 cursor-pointer"
              onClick={() => setFilterState({ open: false, submenu: null })}
            />
          </>
        ) : (
          <div className="flex items-center w-full">
            <div className="flex-1 text-center">
              <span className="text-[15px] tracking-widest font-bold">
                FILTER
              </span>
            </div>
            <button
              onClick={() => setFilterState({ open: false, submenu: null })}
              className="text-xl absolute right-4"
            >
              <img
                src={closeCircle}
                alt="close"
                className="h-6 cursor-pointer"
              />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex-1 overflow-hidden pb-[64px]">
        {/* Main view (filters list) */}
        <div
          className={`absolute w-full h-full top-0 left-0 transition-transform duration-300 ease-in-out ${
            filterState.submenu ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Filter Tags and Sections here */}
          <div className="space-y-4 px-4">
            <>
              {/* Filter Tags */}
              <div className="flex-1 overflow-y-auto space-y-4 pb-[64px]">
                {selectedFilters.length > 0 && (
                  <div className="px-4 py-2 flex flex-wrap gap-2">
                    {selectedFilters.map((filter, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center border px-2 py-1 rounded-full"
                      >
                        {filter}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => handleRemoveFilter(filter)}
                        >
                          <img
                            src={closeCircle2}
                            alt="close"
                            className="h-6 cursor-pointer"
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price Range */}
                <div className="px-4 py-3 ">
                  <div
                    className="flex justify-between items-center cursor-pointer mt-8"
                    onClick={togglePriceSection}
                  >
                    <span className="">PRICE RANGE</span>
                    <span className="">
                      {isPriceOpen ? (
                        <img
                          src={minus}
                          alt="minus"
                          className="h-6 cursor-pointer"
                        />
                      ) : (
                        <img
                          src={plus}
                          alt="add"
                          className="h-6 cursor-pointer"
                        />
                      )}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${
                      isPriceOpen
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex text-black font-helvetica-bold justify-between text-sm tracking-wider mt-4 mb-2 ">
                      <span>{Math.floor(priceRange[0])} Rs</span>
                      <span>{Math.floor(priceRange[1])} Rs</span>
                    </div>
                    <Slider
                      range
                      min={DEFAULT_RANGE[0]}
                      max={DEFAULT_RANGE[1]}
                      value={priceRange}
                      onChange={handlePriceChange}
                      trackStyle={[{ backgroundColor: "#000", height: 2 }]}
                      handleStyle={[
                        {
                          width: 12,
                          height: 12,
                          borderRadius: 0,
                          borderColor: "#000",
                          backgroundColor: "#000",
                          outline: "none",
                          boxShadow: "none",
                        },
                        {
                          width: 12,
                          height: 12,
                          borderRadius: 0,
                          borderColor: "#000",
                          backgroundColor: "#000",
                          outline: "none",
                          boxShadow: "none",
                        },
                      ]}
                    />
                  </div>
                </div>

                {/* Sections */}
                {sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center px-4 py-3 text-sm cursor-pointer"
                    onClick={() =>
                      setFilterState({ open: true, submenu: section })
                    }
                  >
                    {section}
                    <span className="text-lg">
                      {" "}
                      <img
                        src={arrowRight}
                        alt="arrowRight"
                        className="h-6 cursor-pointer"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </>
          </div>
        </div>

        {/* Submenu View */}
        <div
          className={`absolute w-full h-full top-0 left-0 transition-transform duration-300 ease-in-out bg-white px-4 ${
            filterState.submenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {filterState.submenu === "SIZE" && (
            <div className="flex flex-wrap gap-2 pt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`border px-4 py-1 text-sm ${
                    selectedSizes.includes(size)
                      ? "bg-black text-white border-black"
                      : "border-black text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-1/8 sm:bottom-0 mb-10  left-0 w-full sm:w-[470px] flex gap-5  z-50 px-10">
        <button
          className="w-1/2 border border-black  py-4 text-sm"
          onClick={clearFilters}
        >
          CLEAR
        </button>
        <button className="w-1/2 bg-black  border border-black  text-white py-4 text-sm">
          VIEW [134]
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
