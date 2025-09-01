import { useState, useRef, useEffect } from "react";
import { IoLogOut } from "react-icons/io5";
import { FiUser} from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ handleBackToLogin }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {userData} = useSelector((state)=>state.auth)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-start lg:justify-end items-center p-3 bg-white  border-slate-200  relative">
      {/* Profile button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition"
      >
      {userData?.roleType === "admin" ? (
                        <span className="bg-blue-700 text-white  rounded-md px-2 ">
                          ADMIN
                        </span>
                      ) : (
                        <span className="bg-purple-600 text-white  rounded-md px-2 ">
                          SUPER ADMIN
                        </span>
                      )}
        <span className="hidden md:inline font-medium text-slate-700">
         {userData.name}
        </span>
        <svg
          className={`w-4 h-4 text-slate-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-4 top-14 w-64 bg-white border border-slate-200 rounded-xl shadow-lg py-3 z-50"
        >
          {/* User Info */}
          <div className="px-4 pb-3 border-b border-slate-100">
            <p className="font-semibold text-slate-800">{userData.name}</p>
            <p className="text-sm text-slate-500">{userData.email}</p>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col">
            <li>
              <Link to={"/update-profile"} className="flex items-center gap-3 w-full px-4 py-2 hover:bg-slate-50 text-slate-700">
                <FiUser className="w-5 h-5" />
                Edit profile
              </Link>
            </li>
          
          </ul>

          {/* Divider + Logout */}
          <div className="border-t border-slate-100 mt-2 pt-2">
            <button
              onClick={handleBackToLogin}
              className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50"
            >
              <IoLogOut className="w-5 h-5" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
