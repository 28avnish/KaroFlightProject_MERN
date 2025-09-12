import React from "react";

const CategoryTags = ({
  currentCategory = "Travel Tips",
  tags = [
    "booking",
    "airports",
    "deals",
    "safety",
    "budget travel",
    "flight tips",
    "travel planning",
    "money saving",
  ],
}) => {
  return (
    <div className="border-t border-b border-gray-400 py-6 md:py-9 my-6 md:my-10 space-y-6">
      {/* Category Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Category</h3>
        <button className="px-4 py-2 bg-gray-400 rounded-full transition hover:bg-gray-500">
          {currentCategory}
        </button>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTags;
