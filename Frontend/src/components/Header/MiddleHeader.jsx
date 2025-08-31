import React, { useEffect, useRef, useState } from "react";
import user from "../../assets/icons/user.svg";
import hoverUser from "../../assets/icons/user-2.svg";
import searchLogo from "../../assets/icons/search-2.svg";
import hoverSearch from "../../assets/icons/search.svg";
import bag from "../../assets/icons/bag.svg";
import hoverBag from "../../assets/icons/bag-2.svg";
import cancel from "../../assets/icons/cancel.svg";
import closeCircle from "../../assets/icons/close-circle.svg";
import heart from "../../assets/icons/heart.svg";
import hoverHeart from "../../assets/icons/heart-2.svg";
import menuLogo from "../../assets/icons/menu.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import CustomSwiper from "./CustomSwiper";
import CartDropdown from "../Cart/CartDropdown";

const MiddleHeader = ({ menuData }) => {
  const [search, setSearch] = useState(false);
  const inputRef = useRef(null); // Create a reference for the input field
  const [inputValue, setInputValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    open: false,
    menu: null,
    submenu: null,
  });

  // Clear input value and prevent closing input on cancel
  const handleCancelClick = () => {
    setInputValue(""); // Clear the input value
    inputRef.current?.focus(); // Focus the input field after clearing text
  };

  // Close input field on blur, unless the input is cleared
  const handleBlur = () => {
    if (inputValue === "") {
      setSearch(false); // Close input only if the text is empty
    }
  };

  console.log(menuState);

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus(); // Focus on the input element
    }
  }, [search]);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (menuState.open || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuState.open, searchOpen]);

  return (
    <div className="font-helvetica-light font-bold  tracking-wider ">
      <div className="flex justify-between items-center lg:p-10 pt-3 pb-5 px-3">
        <div
          onClick={() => setSearch(true)}
          className="group w-72 hidden lg:block"
        >
          {!search ? (
            <>
              <img
                src={searchLogo}
                className="h-8 group-hover:hidden"
                alt="search"
              />
              <img
                src={hoverSearch}
                className="h-8 hidden group-hover:block"
                alt="hover search"
              />
            </>
          ) : (
            <div className="flex items-center">
              {" "}
              <img src={searchLogo} className="h-5 mr-2" alt="search" />
              <input
                value={inputValue}
                ref={inputRef}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`TYPE TO SEARCH`}
                onBlur={handleBlur}
                className="text-lg font-helvetica-medium font-normal   focus:outline-none "
              />
              {/* Cancel button */}
              {inputValue && (
                <img
                  src={cancel}
                  className="h-8 cursor-pointer ml-2"
                  alt="cancel"
                  onClick={handleCancelClick}
                />
              )}
            </div>
          )}
        </div>

        <div className=" lg:hidden pt-2   font-ponjoung tracking-widest font-extrabold text-[#E55100] text-lg sm:text-2xl">
          THRIFTY THREADS.
        </div>

        <div>
          <strong className="hidden lg:block font-ponjoung tracking-widest font-extrabold text-[#E55100] lg:text-3xl xl:text-4xl">
            THRIFTY THREADS.
          </strong>
        </div>
        <div className="flex gap-5 w-72 justify-end">
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <img src={searchLogo} className="" alt="search" />
          </div>
          <div
            onClick={() => setSearchOpen(true)}
            className="hidden md:block lg:hidden cursor-pointer"
          >
            <img src={searchLogo} className="h-6" alt="search" />
          </div>

          <div className="group cursor-pointer relative w-6 lg:w-8 lg:h-8">
            <img
              src={user}
              className="absolute top-0 left-0 w-full h-full group-hover:hidden"
              alt="user"
            />
            <img
              src={hoverUser}
              className="absolute top-0 left-0 w-full h-full hidden group-hover:block"
              alt="hover user"
            />
          </div>
          <div className="group cursor-pointer relative w-6 lg:w-8 lg:h-8">
            <img
              src={heart}
              className="absolute top-0 left-0 w-full h-full group-hover:hidden"
              alt="heart"
            />
            <img
              src={hoverHeart}
              className="absolute top-0 left-0 w-full h-full hidden group-hover:block"
              alt="hover heart"
            />
          </div>
          <div className="group cursor-pointer relative w-8 lg:w-10 ">
            <img
              src={bag}
              className="absolute top-0 left-0 w-full h-full group-hover:hidden"
              alt="bag"
            />
            <img
              src={hoverBag}
              className="absolute top-0 left-0 w-full h-full hidden group-hover:block"
              alt="hover bag"
            />
            <span className="absolute text-xs right-0 top-0">1</span>

            <CartDropdown />
          </div>

          <div
            className="xl:hidden cursor-pointer"
            onClick={() =>
              setMenuState({ open: true, menu: null, submenu: null })
            }
          >
            <img src={menuLogo} className="lg:h-8" alt="menu" />
          </div>

          {/* font-color:  242121 */}
        </div>
      </div>

      {/* SEARCH SIDEBAR FOR MOBILE AND MEDIUM SCREENS */}

      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
            searchOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSearchOpen(false)}
        />

        {/* Slide-in Search Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 bg-white px-4 pt-10 w-full md:w-1/2 transition-transform duration-500 ease-in-out transform ${
            searchOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center">
            {/* Input & Search */}
            <div className="flex items-center flex-1 border-b pb-1">
              <img src={searchLogo} className="h-5 mr-2" alt="search" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 outline-none text-base"
              />
              {inputValue && (
                <span
                  className="ml-3 font-normal tracking-wide cursor-pointer underline"
                  onClick={() => setInputValue("")}
                >
                  CLEAR
                </span>
              )}
            </div>

            {/* Close icon */}
            <img
              src={closeCircle}
              alt="close"
              className="h-6 ml-3 cursor-pointer"
              onClick={() => {
                setSearchOpen(false);
                setInputValue("");
              }}
            />
          </div>

          <div className="mt-6">
            <p className="text-sm font-extrabold mb-4">POPULAR SEARCHES</p>
            <ul className="font-helvetica-thin space-y-4 text-sm">
              <li>TOPS LADIES</li>
              <li>SHIRTS MEN</li>
              <li>T-SHIRTS KIDS</li>
            </ul>
          </div>
        </div>
      </>

      {/* MENU SIDEBAR FOR MOBILE MEDIUM AND LARGE SCREENS */}

      <>
        {/* Overlay backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-500 ${
            menuState.open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() =>
            setMenuState({ open: false, menu: null, submenu: null })
          }
        />

        {/* Sidebar Container */}
        <div
          className={`fixed inset-y-0 right-0 z-50 bg-white w-full md:w-1/2 transform transition-transform duration-500 ${
            menuState.open ? "translate-x-0" : "translate-x-full"
          } h-full overflow-hidden`}
        >
          {/* Header */}
          <div className="flex justify-between  px-4 py-5 ">
            {menuState.submenu ? (
              <>
                <img
                  src={arrowLeft}
                  alt="back"
                  className="h-6  cursor-pointer"
                  onClick={() =>
                    setMenuState({ open: true, menu: null, submenu: null })
                  }
                />
                <h2 className="text-sm font-bold pt-[2px]  uppercase">
                  {menuState.submenu}
                </h2>
                <img
                  src={closeCircle}
                  alt="close"
                  className="h-6 cursor-pointer"
                  onClick={() =>
                    setMenuState({ open: false, menu: null, submenu: null })
                  }
                />
              </>
            ) : (
              <>
                <div className="px-2 font-ponjoung tracking-widest font-extrabold text-[#E55100]   text-2xl">
                  THRIFTY THREADS.
                </div>

                <img
                  src={closeCircle}
                  alt="close"
                  className="h-6 cursor-pointer"
                  onClick={() =>
                    setMenuState({ open: false, menu: null, submenu: null })
                  }
                />
              </>
            )}
          </div>

          {/* Sliding Panels */}
          <div className="relative h-[calc(100%-64px)]">
            {" "}
            {/* 64px = header height */}
            <div
              className={`uppercase flex w-[200%] h-full transition-transform duration-500 ${
                menuState.submenu ? "-translate-x-1/2" : "translate-x-0"
              }`}
            >
              {/* Main Menu */}
              <div className="w-1/2 h-full overflow-y-auto  pb-10">
                {menuData?.map((menu, idx) =>
                  menu.subMenu ? (
                    <>
                      {" "}
                      <ul className="space-y-2 font-helvetica-thin font-bold pb-5 px-6 ">
                        {menu.subMenu.map((subMenu, idx2) => (
                          <li
                            onClick={() =>
                              setMenuState({
                                open: true,
                                menu: menu.menuName,
                                submenu: subMenu.subMenuName,
                              })
                            }
                            className="cursor-pointer"
                          >
                            {subMenu.subMenuName}
                          </li>
                        ))}
                      </ul>
                      <CustomSwiper />
                    </>
                  ) : (
                    <p className="font-bold text-lg mb-4 px-6">
                      {" "}
                      {menu?.menuName}
                    </p>
                  )
                )}
              </div>

              {/* Submenu Panel */}
              {menuData.map((menu) => {
                if (menu.menuName === menuState.menu) {
                  const matchedSubMenu = menu.subMenu.find(
                    (sub) => sub.subMenuName === menuState.submenu
                  );

                  if (matchedSubMenu) {
                    return (
                      <div
                        key={matchedSubMenu.subMenuName}
                        className="w-1/2 h-full overflow-y-auto px-6 pb-10"
                      >
                        <ul className="space-y-2 font-helvetica-thin font-bold py-5 text-sm ">
                          {matchedSubMenu.subSubMenuName.map((item, i2) => (
                            <li
                              key={i2}
                              className={`${
                                item === "View All" && "text-[#B7000D]"
                              }`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MiddleHeader;
