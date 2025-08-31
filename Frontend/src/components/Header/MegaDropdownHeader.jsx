import React, { useState } from "react";
import arrowDown2 from "../../assets/icons/arrow-down-2.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const MegaDropdownHeader = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(
    data[2].subMenu[0].subMenuName
  );

  // Handle category hover to show specific options
  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <header className="hidden xl:block font-helvetica-light tracking-widest bg-[#28282B] text-white px-6 py-4">
      <nav className="max-w-screen-xl mx-auto flex justify-center items-center">
        <ul className="flex gap-10 font-semibold text-sm">
          {data?.map((menu, idx) =>
            menu.subMenu ? (
              <li key={idx} className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 top-full right-0 w-[900px]  h-10 hidden group-hover:block  z-40"></div>
                <div className="flex items-center gap-1 ">
                  <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                    {menu.menuName}
                  </button>
                  <img src={arrowDown2} className="h-5" alt="down" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px]  rounded-b-lg bg-[#28282B] text-[#F4ECD7] shadow-xl mt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <div className="flex">
                    {/* Left side with buttons */}
                    <div className="w-2/4 uppercase border-r py-2">
                      {menu.subMenu.map((subMenu, idx2) => (
                        <div
                          key={idx2}
                          className={` ${
                            activeCategory === subMenu.subMenuName &&
                            "text-orange-600"
                          } flex justify-between hover:text-orange-600  px-6 py-2 cursor-pointer`}
                          onMouseEnter={() =>
                            handleCategoryHover(subMenu.subMenuName)
                          }
                        >
                          <div className="block text-left">
                            {subMenu.subMenuName}
                          </div>
                          <img src={arrowRight} className="h-5" alt="right" />
                        </div>
                      ))}
                    </div>

                    {/* Right side - content shown based on hover */}
                    <div className="font-helvetica-thin tracking-widest w-3/4 px-6">
                      {menu.subMenu.map(
                        (subMenu, idx3) =>
                          activeCategory === subMenu.subMenuName && (
                            <div key={idx3}>
                              {/* <h4 className="font-semibold text-lg mb-4 mt-3">
                                {subMenu.subMenuName}
                              </h4> */}
                              <ul className="space-y-2 pt-4">
                                {subMenu.subSubMenuName.map((item, i) => (
                                  <li
                                    key={i}
                                    className="hover:text-orange-600 cursor-pointer uppercase"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={idx} className="relative group">
                <div className="flex items-center gap-1 ">
                  <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                    {menu?.menuName}
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MegaDropdownHeader;
