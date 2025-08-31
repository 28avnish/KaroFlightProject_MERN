import React, { useEffect, useRef, useState } from "react";
import closeCircle from "../../assets/icons/close-circle.svg";
import sortAdd from "../../assets/icons/sort.svg";
import sortMinus from "../../assets/icons/minus.svg";

import SortByDropdown from "./SortByDropdown";

const reviewsData = [
  {
    id: 1,
    rating: 3,
    date: "6 Sept 2024",
    content:
      "I just love this. My friends like this t-shirt. Best fitting & best look. Thank you H&M 💗 Happy shopping always! The size was perfect, and I absolutely loved the fit! Highly recommend it to others.",
    size: "S",
    name: "Avnish",
  },
  {
    id: 2,
    rating: 4,
    date: "10 Dec 2024",
    content:
      "The size was perfect, and I absolutely loved the fit! Highly recommend it to others.",
    size: "XXL",
    name: "Avnish",
  },
  {
    id: 3,
    rating: 5,
    date: "30 Sept 2024",
    content: "The fit is perfect. The graphic is nice also.",
    size: "XXL",
    name: "Avnish",
  },
  {
    id: 4,
    rating: 5,
    date: "30 Sept 2024",
    content: "The fit is perfect. The graphic is nice also.",
    size: "XXL",
    name: "Avnish",
  },
  {
    id: 5,
    rating: 5,
    date: "30 Sept 2024",
    content: "The fit is perfect. The graphic is nice also.",
    size: "XXL",
    name: "Avnish",
  },
  {
    id: 6,
    rating: 5,
    date: "30 Sept 2024",
    content: "The fit is perfect. The graphic is nice also.",
    size: "XXL",
    name: "Avnish",
  },
];

const ReviewSidebar = ({ reviewState, setReviewState }) => {
  const [sortByState, setSortByState] = useState({
    open: false,
    selected: "relevant",
  });

  const [expandedReviews, setExpandedReviews] = useState({});
  const [clampedReviews, setClampedReviews] = useState({});

  const contentRefs = useRef({});

  useEffect(() => {
    if (reviewState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [reviewState]);

  useEffect(() => {
    const newClampedReviews = {};
    reviewsData.forEach((review) => {
      const el = contentRefs.current[review.id];
      if (el) {
        newClampedReviews[review.id] = el.scrollHeight > el.clientHeight;
      }
    });
    setClampedReviews(newClampedReviews);
  }, [reviewState]);

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sortByOptions = [
    { label: "Most Relevant", value: "relevant" },
    { label: "Newest", value: "newest" },
    { label: "Highest Rated", value: "highest" },
    { label: "Lowest Rated", value: "lowest" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/75 z-40 transition-opacity duration-500 ${
          reviewState
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setReviewState(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed font-helvetica-medium top-0 sm:right-0 w-full sm:w-[470px] h-full bg-white z-50 shadow-lg transition-transform duration-500 ease-in-out transform ${
          reviewState ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex-1 text-center">
            <span className="text-[15px]">REVIEWS</span>
          </div>
          <button
            onClick={() => setReviewState(false)}
            className="absolute right-4"
          >
            <img src={closeCircle} alt="close" className="h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 overflow-y-auto h-[calc(100%-100px)]">
          {/* Rating */}
          <div className="font-bold">4.8</div>
          <div className="flex items-center justify-between mb-4">
            <div className=" text-2xl">★★★★★</div>
            <div className="text-sm">Based on 51 customer reviews</div>
          </div>

          {/* Sort Dropdown */}
          <div
            className="relative"
            tabIndex={0}
            onBlur={() =>
              setSortByState((prev) => ({
                ...prev,
                open: false,
              }))
            }
          >
            <div
              className="flex items-center cursor-pointer gap-2 hover:text-gray-400 text-[#1E1E1E]"
              onClick={() =>
                setSortByState((prev) => ({
                  ...prev,
                  open: !prev.open,
                }))
              }
            >
              <span className="text-[15px] lg:text-base">SORT BY</span>
              {sortByState.open ? (
                <img src={sortMinus} alt="sort by" className="w-6 h-6" />
              ) : (
                <img src={sortAdd} alt="sort by" className="w-8 h-6" />
              )}
            </div>
            {sortByState.open && (
              <SortByDropdown
                sortByState={sortByState}
                setSortByState={setSortByState}
                options={sortByOptions}
              />
            )}
          </div>

          <hr className="my-4 text-gray-200" />

          {/* Reviews */}
          {reviewsData.map((review, idx) => (
            <div key={review.id} className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <div className=" text-xl">
                  {" "}
                  {"★".repeat(review?.rating) + "☆".repeat(5 - review?.rating)}
                </div>
                <div className="text-sm">{review.date}</div>
              </div>
              <p
                ref={(el) => (contentRefs.current[review.id] = el)}
                className={`text-sm mb-1 ${
                  !expandedReviews[review.id] ? "line-clamp-2" : ""
                }`}
              >
                {review.content}
              </p>
              {clampedReviews[review.id] && (
                <button
                  onClick={() => toggleExpand(review.id)}
                  className="text-sm underline"
                >
                  {expandedReviews[review.id] ? "SHOW LESS" : "SHOW MORE"}
                </button>
              )}
              <div className="text-sm mt-2">
                {review.name} <span className="mx-1">•</span> Size:{" "}
                {review.size}
              </div>
              {idx < reviewsData.length - 1 && (
                <hr className="my-10 text-gray-200 " />
              )}{" "}
            </div>
          ))}

          {/* Bottom Bar */}
          <button className="w-full text-white bg-black py-4 text-[15px]">
            SHOW MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewSidebar;
