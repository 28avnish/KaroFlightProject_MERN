import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeroVideo from "../../assets/HotelHeroVideo.mp4";
import GuestsAndRoomsDropdown from "../Modal/GuestsAndRoomsDropdown";
import FilterSection from "../Modal/FilterSection";
import WhereDropdown from "../Modal/WhereDropdown";
import { BsAirplaneEngines } from "react-icons/bs";
import { LiaHotelSolid } from "react-icons/lia";

const heroCardBG = "bg-[#F2F2F2]";
const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.5) 0%, rgba(5,36,97,0.5) 50%, rgba(13,64,165,0.5) 100%)";

// Updated HeroSection component
const HeroSection = ({}) => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [filters, setFilters] = useState({
    starRating: [],
    freeCancellation: false,
    breakfastIncluded: false,
    dealsTonight: false,
  });
  const navigate = useNavigate();

  // Use useCallback to memoize the function and prevent unnecessary re-renders
  const handleGuestsChange = useCallback((data) => {
    // You can use this data if needed, but we're not causing a state update that would re-render
    console.log("Guests data updated:", data);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "starRating") {
        const newStarRating = prev.starRating.includes(value)
          ? prev.starRating.filter((r) => r !== value)
          : [...prev.starRating, value];

        return { ...prev, starRating: newStarRating };
      }

      return { ...prev, [filterType]: value };
    });
  };

  const handleHotelsClick = () => {
    setActiveTab("hotels");
    navigate("/hotel-home");
  };

  const handleFlightClick = () => {
    setActiveTab("flights");
    navigate("/flight-home");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video section */}
      <div className="relative w-full h-[100vh] sm:h-[100vh] md:h-[120vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay text section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 space-y-4" style={{background:heroGradient}}>
        {/* Heading Section */}
        <div className=" w-full max-w-4xl mx-auto">
          <h1 className="mb-3 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-bold text-white leading-tight  px-2">
            Find Your Perfect{" "}
            <span className="text-[#FF621F]">Hotel Now</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white px-2 sm:px-4 md:px-0 max-w-3xl mx-auto leading-relaxed">
            Your next trip may be closer than you just wonder. Find out the
            best hotels today with just one click.
          </p>
        </div>

        {/* Toggle Button for Hotels and Flights */}

        <div className={`text-xs sm:text-sm md:text-base ${heroCardBG} p-1 flex items-center justify-between rounded-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 transition-all duration-300 w-full max-w-2xs mx-auto`}
        >
          <div
            className={`text-[#808080] font-medium cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-1 sm:gap-2 ${
              activeTab === "flights"
                ? "bg-[#040A53] py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 text-white rounded-lg"
                : "py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 hover:text-gray-600"
            }`}
            onClick={handleFlightClick}
          >
            <BsAirplaneEngines className="text-sm md:text-base" />
            <span className="whitespace-nowrap">Flight</span>
          </div>
          <div
            className={`text-[#808080] font-medium cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-1 sm:gap-2 ${
              activeTab === "hotels"
                ? "bg-[#040A53] py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 text-white rounded-lg"
                : "py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 hover:text-gray-600"
            }`}
            onClick={handleHotelsClick}
          >
            <LiaHotelSolid className="text-sm md:text-base" />
            <span className="whitespace-nowrap">Hotels</span>
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-0">
          {/* Search Hotel section */}
          <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl lg:rounded-2xl shadow-md w-full mx-auto">
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-center">
              {/* Where - Using the separate component */}
              <div className="col-span-1">
                <label className="block text-gray-700 text-xs sm:text-sm mb-1">
                  Where
                </label>
                <WhereDropdown />
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm mb-1">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Guests & Rooms */}
              <div>
                <label className="block text-gray-700 text-xs sm:text-sm mb-1">
                  Guests & Rooms
                </label>
                <GuestsAndRoomsDropdown onChange={handleGuestsChange} />
              </div>

              {/* Search Button (Full width under form in mobile, inline in desktop) */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-2 sm:mt-3">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-medium py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition text-xs sm:text-sm md:text-base"
                >
                  Search hotels
                </button>
              </div>
            </form>

            {/* Filter Section */}
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Hotels near you text */}
          <div className="mt-3 sm:mt-4 md:mt-5">
            <p className="text-gray-200 sm:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Hotels near your Area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;