import React, { useEffect } from "react";
import { useFlightSearch } from "../../contexts/FlightSearchContext";

const FlightSearchForm = ({ cities, setIsRoundTrip }) => {
  const {
    // Trip details
    tripType,
    setTripType,
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,

    // Options
    nearbyAirportsTo,
    setNearbyAirportsTo,
    nearbyAirportsFrom,
    setNearbyAirportsFrom,
    flexibleDates,
    setFlexibleDates,

    // Travelers display
    displayText,

    // Modal functions
    toggleModal,

    // Search function
    handleSubmit,
  } = useFlightSearch();

  // Update the parent component when trip type changes
  useEffect(() => {
    if (setIsRoundTrip) {
      setIsRoundTrip(tripType === "Round-trip");
    }
  }, [tripType, setIsRoundTrip]);

  return (
    <div className="h-full">
      <div className="p-4 md:p-6 h-full flex flex-col">
        {/* Trip Type Selector */}
        <div className="flex items-center justify-evenly bg-[#808080]/10 rounded-2xl py-2 text-xs md:text-[14px] mb-4 md:mb-6">
          {["One-way", "Round-trip", "Multi-city"].map((type) => (
            <div
              key={type}
              onClick={() => setTripType(type)}
              className={`font-medium capitalize ${
                tripType === type
                  ? "bg-orange-500 text-white  rounded-2xl"
                  : "text-gray-500"
              }`}
            >
              <button 
                type="button"
                className="px-4 md:px-25 py-1 md:py-2 text-xs md:text-sm cursor-pointer "
              >
                {type.split("-").join(" ")}
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div
            className={`grid grid-cols-1 ${
              tripType === "Round-trip" ? "md:grid-cols-5" : "md:grid-cols-4"
            } gap-3 md:gap-4 mb-4 md:mb-6 flex-1`}
          >
            {/* From */}
            <div className={tripType === "Round-trip" ? "md:col-span-1" : ""}>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <div className="relative">
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full p-2 md:p-3 border border-gray-300 cursor-pointer rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-1 md:mt-2 flex items-center">
                <input
                  type="checkbox"
                  id="nearbyAirportsTo"
                  checked={nearbyAirportsTo}
                  onChange={() => setNearbyAirportsTo(!nearbyAirportsTo)}
                  className="h-3 w-3 md:h-4 md:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="nearbyAirportsTo"
                  className="ml-1 md:ml-2 block text-xs md:text-sm text-gray-700 cursor-pointer"
                >
                  Nearby airports
                </label>
              </div>
            </div>

            {/* To */}
            <div className={tripType === "Round-trip" ? "md:col-span-1" : ""}>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                To
              </label>
              <div className="relative">
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-1 md:mt-2 flex items-center">
                <input
                  type="checkbox"
                  id="nearbyAirportsFrom"
                  checked={nearbyAirportsFrom}
                  onChange={() => setNearbyAirportsFrom(!nearbyAirportsFrom)}
                  className="h-3 w-3 md:h-4 md:w-4 cursor-pointer text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="nearbyAirportsFrom"
                  className="ml-1 md:ml-2 block text-xs cursor-pointer md:text-sm text-gray-700"
                >
                  Nearby airports
                </label>
              </div>
            </div>

            {/* Departure Date */}
            <div className={tripType === "Round-trip" ? "md:col-span-1" : ""}>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                {tripType === "One-way"
                  ? "Departure"
                  : tripType === "Round-trip"
                  ? "Departure"
                  : "Date"}
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
              />

              {tripType === "Round-trip" && (
                <div className="mt-1 md:mt-2 flex items-center">
                  <input
                    type="checkbox"
                    id="flexibleDates"
                    checked={flexibleDates}
                    onChange={() => setFlexibleDates(!flexibleDates)}
                    className="h-3 w-3 md:h-4 md:w-4 cursor-pointer text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="flexibleDates"
                    className="ml-1 md:ml-2 block cursor-pointer text-xs md:text-sm text-gray-700"
                  >
                    Flexible dates ±3 days
                  </label>
                </div>
              )}
            </div>

            {/* Return Date - only for Round-trip */}
            {tripType === "Round-trip" && (
              <div className="md:col-span-1">
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Return
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                />
              </div>
            )}

            {/* Travelers & Class Selector */}
            <div className={tripType === "Round-trip" ? "md:col-span-1" : ""}>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                Travelers & Class
              </label>
              <div
                className="flex items-center justify-between p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer bg-white text-sm md:text-base"
                onClick={(e) => toggleModal(e)}
              >
                <span className="text-gray-700 truncate">{displayText}</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-auto">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-2 sm:py-3 hover:bg-orange-600 md:py-4 px-4 rounded-lg transition-colors duration-300 text-sm md:text-base cursor-pointer"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSearchForm;