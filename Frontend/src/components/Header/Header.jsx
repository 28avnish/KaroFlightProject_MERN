import React, { useEffect, useState } from "react";
import user from "../../assets/icons/user.svg";
import hoverUser from "../../assets/icons/user-2.svg";
import bag from "../../assets/icons/bag.svg";
import hoverBag from "../../assets/icons/bag-2.svg";
import closeCircle from "../../assets/icons/close-circle.svg";
import heart from "../../assets/icons/heart.svg";
import hoverHeart from "../../assets/icons/heart-2.svg";
import menuLogo from "../../assets/icons/menu.svg";
import Logo from "../../assets/images/Logo.jpg";
import CartDropdown from "../Cart/CartDropdown";
import { Link } from "react-router-dom";

const Header = ({ menuData }) => {
  const [menuState, setMenuState] = useState({
    open: false,
    menu: null,
    submenu: null,
  });

  useEffect(() => {
    if (menuState.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuState.open]);

  return (
    <div className="font-helvetica-light font-bold  tracking-wider ">
      <div className="flex justify-between items-center lg:px-10 pt-3 pb-5 px-3">
        <div className="">
          <img src={Logo} className="w-25 md:w-30 rounded " />
        </div>
        <div className="flex gap-5 w-72 justify-end">
          <Link
            to={"/login"}
            className="group cursor-pointer relative w-6 lg:w-8 lg:h-8"
          >
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
          </Link>
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
                    </>
                  ) : (
                    <p className="font-bold text-lg mb-4 px-6">
                      {" "}
                      {menu?.menuName}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
