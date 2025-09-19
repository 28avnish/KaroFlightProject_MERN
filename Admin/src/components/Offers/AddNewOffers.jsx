import React, { useState } from "react";
import { MdTitle, MdDescription, MdLocalOffer } from "react-icons/md";
import {
  FaPercent,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaImages,
  FaTag,
  FaUsers,
} from "react-icons/fa";
import { fetchOffers } from "../../features/slices/offerSlice";
import { useDispatch } from "react-redux";

const AddNewOfferPage = () => {
  const dispatch =  useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    type: "percentage",
    value: "",
    currency: "USD",
    code: "",
    minSpend: 0,
    usageLimit: 0,
    perUserLimit: 0,
    startAt: "",
    endAt: "",
    onlyForMembers: false,
    active: true,
    imageUrl: "",
    tags: [], // can be used as metadata
  });

  const [currentTag, setCurrentTag] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayField = (field, value) => {
    if (value.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], value.trim()],
      }));
      setCurrentTag("");
    }
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://server-render-kflight-0d3r.onrender.com/api/offers",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Offer created successfully!");
      
      // Clear form
      setFormData({
        title: "",
        slug: "",
        description: "",
        type: "percentage",
        value: "",
        currency: "USD",
        code: "",
        minSpend: 0,
        usageLimit: 0,
        perUserLimit: 0,
        startAt: "",
        endAt: "",
        onlyForMembers: false,
        active: true,
        imageUrl: "",
        tags: [],
      });

      // Refresh offers in Redux
      dispatch(fetchOffers());
    } else {
      alert("Failed to create offer.");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred.");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-600 px-6 py-4 flex items-center">
          <MdLocalOffer className="text-white text-2xl mr-2" />
          <h1 className="text-white text-2xl font-bold">Create New Offer</h1>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          {/* Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MdTitle className="mr-1 text-gray-500" /> Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Summer Sale"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                Slug
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                placeholder="summer-sale-2025"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <MdDescription className="mr-1 text-gray-500" /> Description
            </label>
            <textarea
              rows="3"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your offer..."
            />
          </div>

          {/* Type & Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaPercent className="mr-1 text-gray-500" /> Type
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed</option>
                <option value="coupon">Coupon</option>
                <option value="bundle">Bundle</option>
                <option value="tripjack">TripJack</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaMoneyBillWave className="mr-1 text-gray-500" /> Value
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.value}
                onChange={(e) => handleInputChange("value", e.target.value)}
                placeholder="25"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaCalendarAlt className="mr-1 text-gray-500" /> Start Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.startAt}
                onChange={(e) => handleInputChange("startAt", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaCalendarAlt className="mr-1 text-gray-500" /> End Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.endAt}
                onChange={(e) => handleInputChange("endAt", e.target.value)}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaImages className="mr-1 text-gray-500" /> Image URL
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.imageUrl}
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Tags / Metadata */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaTag className="mr-1 text-gray-500" /> Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeArrayItem("tags", index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={() => handleArrayField("tags", currentTag)}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>

          {/* Only Members & Active */}
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.onlyForMembers}
                onChange={(e) =>
                  handleInputChange("onlyForMembers", e.target.checked)
                }
              />
              Only For Members
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => handleInputChange("active", e.target.checked)}
              />
              Active
            </label>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Create Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOfferPage;
