import React, { useState } from "react";

const CategoryTab = () => {
  const [active, setActive] = useState("T-SHIRTS & TANKS");

  return (
    <>
      <div className="flex gap-4 px-5 sm:px-6 py-2 font-helvetica-medium tracking-wide flex-wrap mb-10">
        {[
          "MEN'S LINEN T-SHIRTS",
          "STRIPED T-SHIRTS FOR MEN",
          "MEN'S SLIM FIT T-SHIRTS",
          "MEN'S CREW NECK T-SHIRTS",
          "MEN'S PINK T-SHIRTS",
          "MEN'S YELLOW T-SHIRTS",
          "MEN'S WHITE T-SHIRTS",
          "MEN'S BLACK T-SHIRTS",
        ].map((category, index) => (
          <button
            key={index}
            onClick={() => setActive(category)}
            className={`border border-black px-4 py-2 text-sm
              ${
                active === category
                  ? "bg-black text-white font-helvetica-bold"
                  : "text-black bg-white hover:bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryTab;
