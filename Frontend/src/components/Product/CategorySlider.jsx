import React, { useState, useRef } from "react";

const categories = [
  "VIEW ALL",
  "T-SHIRTS & TANKS",
  "SHIRTS",
  "HOODIES & SWEATSHIRTS",
  "CARDIGANS & JUMPERS",
  "BLAZERS & SUITS",
  "JACKETS & COATS",
  "TROUSERS",
  "JEANS",
  "SHORTS",
  "UNDERWEAR",
  "SOCKS",
  "NIGHTWEAR & LOUNGEWEAR",
  "SWIMWEAR",
  "FORMALS",
];

const CategorySlider = () => {
  const [active, setActive] = useState("T-SHIRTS & TANKS");
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse Events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUpLeave = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch Events
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto scrollbar-thin cursor-grab select-none ms-5 pe-5"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpLeave}
      onMouseLeave={handleMouseUpLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="flex w-max gap-2 py-2 font-helvetica-medium tracking-wide whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
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
    </div>
  );
};

export default CategorySlider;
