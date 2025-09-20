import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbArticle,
  TbBed,
  TbLayoutDashboardFilled,
  TbMoneybag,
  TbPlane,
  TbUser,
} from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { MdStickyNote2 } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import logo from "../../assets/Logo.jpg";

const Sidebar = ({ isSideNavOpen, setIsSideNavOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const sideBarItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: <TbLayoutDashboardFilled size={25} />,
    },
    {
      label: "Users",
      icon: <TbUser size={25} />,
      subItems: [
        { label: "All Users", path: "/admins" },
        { label: "Add New User", path: "/create-new-admin" },
      ],
    },
    {
      label: "Flights",
      icon: <TbPlane size={25} />,
      subItems: [
        { label: "All Flights", path: "/flights-lists" },
        { label: "Add Flight", path: "/flights/add" },
      ],
    },
    {
      label: "Hotels",
      icon: <TbBed size={25} />,
      subItems: [
        { label: "All Hotels", path: "/hotel-lists" },
        { label: "Add Hotel", path: "/hotels/add" },
      ],
    },
    {
      label: "Offers",
      icon: <TbMoneybag size={25} />,
      subItems: [
        { label: "All Offers", path: "/offers" },
        { label: "Add New Offer", path: "/offers/add" },
        { label: "See Analytics", path: "/offers/analytics" },
      ],
    },
    {
      label: "Blog & Articles",
      icon: <TbArticle size={25} />,
      subItems: [
        { label: "All Blogs", path: "/blog-and-articles" },
        { label: "Add New Blog", path: "/blog-and-articles/add" },
      ],
    },
    {
      label: "Bookings",
      icon: <MdStickyNote2 size={25} />,
      subItems: [
        { label: "All Bookings", path: "/all-booking" },
        { label: "Hotel Bookings", path: "/booking/hotels" },
        { label: "Flight Bookings", path: "/booking/flights" },
      ],
    },
    {
      label: "Manage Admins",
      path: "/admins",
      icon: <RiAdminLine size={25} />,
    },
  ];

  // Close sidebar after an item is selected
  const handleLinkClick = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 lg:static z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
        isSideNavOpen ? "translate-x-0" : " -translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="ps-6 mt-2">
        <div className="min-h-[2rem] w-full flex-col items-start justify-center gap-0 text-center">
          <Link to={`/`} onClick={handleLinkClick}>
            <img className="h-16 rounded" src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav
        aria-label="side navigation"
        className="flex-1 divide-y divide-slate-100 overflow-y-auto"
      >
        <div>
          <ul className="flex flex-1 flex-col gap-1 py-3 text-slate-700 ">
            {sideBarItems.map((itm) => (
              <li className="px-3" key={itm.label}>
                {itm.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(itm.label)}
                      onMouseEnter={() => setHoveredItem(itm.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`flex w-full items-center gap-3 rounded p-3 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-500 ${
                        openDropdown === itm.label
                          ? "bg-emerald-50 text-emerald-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">{itm.icon}</div>
                      <div className="flex-1 text-left">{itm.label}</div>
                      <IoChevronForward
                        size={18}
                        className={`transform transition-transform duration-200 ${
                          openDropdown === itm.label ||
                          hoveredItem === itm.label
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    </button>
                    {openDropdown === itm.label && (
                      <ul className="ml-8 mt-1 flex flex-col gap-1">
                        {itm.subItems.map((sub) => (
                          <li key={sub.label}>
                            <NavLink
                              to={sub.path}
                              onClick={handleLinkClick}
                              className={({ isActive }) =>
                                `block rounded px-3 py-2 text-sm transition-colors hover:bg-emerald-50 hover:text-emerald-500 ${
                                  isActive
                                    ? "bg-emerald-50 text-emerald-500"
                                    : ""
                                }`
                              }
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={itm.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded p-3 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-500 ${
                        isActive ? "bg-emerald-50 text-emerald-500" : ""
                      }`
                    }
                  >
                    <div className="flex items-center">{itm.icon}</div>
                    <div className="flex-1">{itm.label}</div>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
