import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaChild, FaBed, FaChevronDown, FaCheck } from "react-icons/fa";

const GuestsAndRoomsDropdown = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const dropdownRef = useRef(null);
  const initialLoad = useRef(true);

  // Load saved values from localStorage on component mount
  useEffect(() => {
    const savedAdults = localStorage.getItem('guestsAdults');
    const savedChildren = localStorage.getItem('guestsChildren');
    const savedRooms = localStorage.getItem('guestsRooms');
    
    if (savedAdults) setAdults(parseInt(savedAdults));
    if (savedChildren) setChildren(parseInt(savedChildren));
    if (savedRooms) setRooms(parseInt(savedRooms));
  }, []);

  // Save values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('guestsAdults', adults.toString());
    localStorage.setItem('guestsChildren', children.toString());
    localStorage.setItem('guestsRooms', rooms.toString());
    
    // Only call onChange after initial load to prevent infinite loop
    if (!initialLoad.current && onChange) {
      onChange({ adults, children, rooms });
    } else {
      initialLoad.current = false;
    }
  }, [adults, children, rooms]); // Removed onChange from dependencies

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getSummaryText = () => {
    return `${adults} Adult${adults !== 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${rooms} Room${rooms !== 1 ? 's' : ''}`;
  };

  const handleDone = () => {
    setOpen(false);
    if (onChange) {
      onChange({ adults, children, rooms });
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-left text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 flex items-center justify-between cursor-pointer"
      >
        <span>{getSummaryText()}</span>
        <FaChevronDown className={`text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown content */}
      {open && (
        <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 right-0">
          <h3 className="font-medium text-gray-800 mb-3">Guests & Rooms</h3>
          
          {/* Adults */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <FaUser className="text-gray-600 mr-2" />
              <span className="text-gray-700">Adults</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={adults <= 1}
                onClick={() => setAdults(adults - 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                -
              </button>
              <span className="w-6 text-center">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <FaChild className="text-gray-600 mr-2" />
              <span className="text-gray-700">Children</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={children <= 0}
                onClick={() => setChildren(children - 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                -
              </button>
              <span className="w-6 text-center">{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <FaBed className="text-gray-600 mr-2" />
              <span className="text-gray-700">Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={rooms <= 1}
                onClick={() => setRooms(rooms - 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                -
              </button>
              <span className="w-6 text-center">{rooms}</span>
              <button
                type="button"
                onClick={() => setRooms(rooms + 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Done button */}
          <div className="pt-2 mt-2 border-t border-gray-100 text-right">
            <button
              type="button"
              onClick={handleDone}
              className="px-4 py-1 cursor-pointer bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-1"
            >
              <FaCheck className="text-xs" />
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestsAndRoomsDropdown;