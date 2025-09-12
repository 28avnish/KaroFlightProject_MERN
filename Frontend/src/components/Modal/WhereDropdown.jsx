
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaMapMarkerAlt, FaHotel } from "react-icons/fa";

const WhereDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // ...existing famousPlaces and filteredPlaces logic...

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Only 10 famous places
  const famousPlaces = {
    "": [
      "Paris, France",
      "London, UK",
      "New York, USA",
      "Tokyo, Japan",
      "Dubai, UAE",
      "Rome, Italy",
      "Bangkok, Thailand",
      "Sydney, Australia",
      "Barcelona, Spain",
      "Singapore"
    ]
  };

  const filteredPlaces = Object.entries(famousPlaces).reduce((acc, [category, places]) => {
    const filtered = places.filter(place => 
      place.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="City, area, or landmark"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
          onFocus={() => setIsOpen(true)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaChevronDown 
          className={`absolute right-3 top-3 text-gray-400 cursor-pointer transition-transform ${isOpen ? 'rotate-180' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full min-w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 max-h-96 overflow-y-auto">
          <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            {/* <FaMapMarkerAlt className="text-orange-500" /> */}
            Popular Destinations
          </h3>
          {Object.entries(filteredPlaces).map(([category, places]) => {
            // Split places into two columns
            const mid = Math.ceil(places.length / 2);
            const col1 = places.slice(0, mid);
            const col2 = places.slice(mid);
            return (
              <div key={category}>
                <h4 className="font-semibold text-gray-700 text-sm border-b pb-1 mb-2">
                  {category}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    {col1.map((place) => (
                      <div
                        key={place}
                        className="text-sm text-gray-600 p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2"
                        onClick={() => {
                          setSearchTerm(place);
                          setIsOpen(false);
                        }}
                      >
                        <FaHotel className="text-orange-500" />
                        {place}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {col2.map((place) => (
                      <div
                        key={place}
                        className="text-sm text-gray-600 p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2"
                        onClick={() => {
                          setSearchTerm(place);
                          setIsOpen(false);
                        }}
                      >
                        <FaHotel className="text-orange-500" />
                        {place}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {Object.keys(filteredPlaces).length === 0 && (
            <div className="text-center text-gray-500 py-4">
              No destinations found matching "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WhereDropdown;