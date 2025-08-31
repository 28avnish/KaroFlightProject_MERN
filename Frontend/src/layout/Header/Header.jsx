import React from "react";
import Marquee from "../../components/Header/Marquee";
import MiddleHeader from "../../components/Header/MiddleHeader";
import MegaDropdownHeader from "../../components/Header/MegaDropdownHeader";

const Header = () => {
  const menuData = [
    { menuName: "new in store", subMenu: false },
    { menuName: "clearance sale", subMenu: false },
    {
      menuName: "men's clothing",
      subMenu: [
        {
          subMenuName: "t-shirts",
          subSubMenuName: [
            "Oversized T-Shirts",
            "Graphic Tees & Printed T-Shirts",
            "Long Sleeve T-Shirts",
            "Vests",
            "View All",
          ],
        },
        {
          subMenuName: "shirts",
          subSubMenuName: [
            "Checkered Shirts",
            "Short Sleeve Shirts",
            "Long Sleeve Shirts",
            "Casual Shirts",
            "View All",
          ],
        },
        {
          subMenuName: "jeans",
          subSubMenuName: [
            "Baggy and Loose Jeans",
            "Regular Fit Jeans",
            "Slim Jeans",
            "View All",
          ],
        },
        {
          subMenuName: "trousers",
          subSubMenuName: [
            "Chinos",
            "Cargo",
            "Joggers",
            "Linen Trousers",
            "View All",
          ],
        },
        {
          subMenuName: "shorts",
          subSubMenuName: [
            "Jogger Shorts",
            "Jeans Shorts",
            "Chino Shorts",
            "Cargo Shorts",
            "View All",
          ],
        },
      ],
    },
    { menuName: "sale", subMenu: false },
    { menuName: "blogs", subMenu: false },
  ];
  return (
    <div>
      <Marquee />
      <MiddleHeader menuData={menuData} />
      <MegaDropdownHeader data={menuData} />
    </div>
  );
};

export default Header;
