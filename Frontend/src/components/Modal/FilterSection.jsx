import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterSection = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <button
        type="button"
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-orange-500 font-medium mb-2 cursor-pointer"
      >
        <FaFilter />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-gray-200">
          {/* Star Rating */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Star Rating</h4>
            <div className="space-y-2 ">
              {[5, 4, 3].map((star) => (
                <label key={star} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.starRating.includes(star)}
                    onChange={() => handleFilterChange('starRating', star)}
                    className="rounded cursor-pointer text-orange-500 focus:ring-orange-400"
                  />
                  <span>{star} Star{star > 1 ? 's' : ''}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Amenities */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Amenities</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.freeCancellation}
                  onChange={() => handleFilterChange('freeCancellation', !filters.freeCancellation)}
                  className="rounded cursor-pointer text-orange-500 focus:ring-orange-400"
                />
                <span>Free Cancellation</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.breakfastIncluded}
                  onChange={() => handleFilterChange('breakfastIncluded', !filters.breakfastIncluded)}
                  className="rounded cursor-pointer text-orange-500 focus:ring-orange-400"
                />
                <span>Breakfast Included</span>
              </label>
            </div>
          </div>
          
          {/* Special Deals */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Special Deals</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.dealsTonight}
                  onChange={() => handleFilterChange('dealsTonight', !filters.dealsTonight)}
                  className="rounded cursor-pointer text-orange-500 focus:ring-orange-400"
                />
                <span>Deals Tonight</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;