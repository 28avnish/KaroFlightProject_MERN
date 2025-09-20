import React, { useState } from "react";
import { MdTitle, MdDescription, MdLocalOffer } from "react-icons/md";
import {
  FaPercent,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaImages,
  FaTag,
} from "react-icons/fa";
import { fetchOffers } from "../../features/slices/offerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewOfferPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    type: "percentage",
    value: "",
    currency: "USD",
    code: "", // This will store coupon codes
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

  const [currentTag, setCurrentTag] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageProcessing, setImageProcessing] = useState(false);

  // Image compression

  const compressImage = (
    file,
    maxWidth = 800,
    maxHeight = 600,
    quality = 0.7
  ) =>
    new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(resolve, "image/jpeg", quality);
      };
      img.src = URL.createObjectURL(file);
    });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview("");
      setImageFile(null);
      setFormData((prev) => ({ ...prev, imageUrl: "" }));
      return;
    }

    if (!file.type.startsWith("image/")) {
      Swal.fire({
        title: "Invalid File",
        text: "Please select a valid image file (JPG, PNG, GIF, etc.)",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      Swal.fire({
        title: "File Too Large",
        text: "Image size should be less than 10MB",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      e.target.value = "";
      return;
    }

    try {
      setImageProcessing(true);
      const compressedFile = await compressImage(file);

      if (compressedFile.size > 2 * 1024 * 1024) {
        Swal.fire({
          title: "Image Still Too Large",
          text: "Compressed image is still too large. Please try a smaller image.",
          icon: "warning",
          confirmButtonColor: "#F59E0B",
        });
        e.target.value = "";
        setImageProcessing(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        setImagePreview(dataUrl);
        setImageFile(compressedFile);
        setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
        setImageProcessing(false);
        Swal.fire({
          title: "Image Ready!",
          text: "Image has been processed and optimized",
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
          toast: true,
          position: "top-end",
        });
      };

      reader.onerror = () => {
        Swal.fire({
          title: "Processing Failed",
          text: "Failed to process the image. Please try again.",
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
        e.target.value = "";
        setImageProcessing(false);
      };

      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Image compression error:", error);
      Swal.fire({
        title: "Processing Failed",
        text: "Failed to compress the image. Please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      e.target.value = "";
      setImageProcessing(false);
    }
  };

  const removeImage = () => {
    setImagePreview("");
    setImageFile(null);
    setImageProcessing(false);
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
    const fileInput = document.querySelector("input[type='file']");
    if (fileInput) fileInput.value = "";
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Updated function to handle value/code changes based on type
  const handleValueChange = (value) => {
    if (formData.type === "coupon") {
      setFormData((prev) => ({
        ...prev,
        code: value, // Store coupon code in 'code' field
        value: "", // Clear value for coupon type
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        value: value, // Store numeric value in 'value' field
        code: "", // Clear code for non-coupon types
      }));
    }
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // === FIXED handleSubmit ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate required fields based on type
    if (formData.type === "coupon" && !formData.code.trim()) {
      Swal.fire({
        title: "Missing Coupon Code",
        text: "Please enter a coupon code",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    if (
      formData.type !== "coupon" &&
      (!formData.value || formData.value <= 0)
    ) {
      Swal.fire({
        title: "Missing Value",
        text: "Please enter a valid discount value",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      Swal.fire({
        title: "Creating Offer...",
        text: "Please wait while we create your offer",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      const response = await fetch(
        "https://server-render-kflight-0d3r.onrender.com/api/offers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Server error: ${response.status}`
        );
      }

      await dispatch(fetchOffers()).unwrap();
      Swal.close();
      const result = await Swal.fire({
        title: "Success!",
        html: `<div class="text-center">
          <p class="text-lg mb-2">Offer created successfully!</p>
          <p class="text-sm text-gray-600 mb-4">
            <strong>"${formData.title}"</strong> has been added to your offers
          </p>
        </div>`,
        icon: "success",
        confirmButtonText: "View All Offers",
        showCancelButton: true,
        cancelButtonText: "Create Another",
      });

      if (result.isConfirmed) navigate("/offers");
      else if (result.dismiss === Swal.DismissReason.cancel) {
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
        setCurrentTag("");
        setImagePreview("");
        setImageFile(null);
        setImageProcessing(false);
      }
    } catch (err) {
      console.error("Error creating offer:", err);
      Swal.fire({
        title: "Error!",
        text: err.message || "An unexpected error occurred",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                value={formData.type}
                onChange={(e) => {
                  handleInputChange("type", e.target.value);
                  // Clear value/code when type changes
                  setFormData((prev) => ({ ...prev, value: "", code: "" }));
                }}
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
                <option value="coupon">Coupon Code</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaMoneyBillWave className="mr-1 text-gray-500" />
                {formData.type === "coupon" ? "Coupon Code" : "Value"}
                {formData.type === "percentage" && " (%)"}
                {formData.type === "fixed" && " (Amount)"}
              </label>
              <input
                type={formData.type === "coupon" ? "text" : "number"}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                value={
                  formData.type === "coupon" ? formData.code : formData.value
                }
                onChange={(e) => handleValueChange(e.target.value)}
                min={formData.type === "percentage" ? 0 : undefined}
                max={formData.type === "percentage" ? 100 : undefined}
                placeholder={
                  formData.type === "coupon"
                    ? "Enter coupon code (e.g., SAVE20)"
                    : formData.type === "percentage"
                    ? "Enter percentage (e.g., 25)"
                    : "Enter amount (e.g., 500)"
                }
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
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                value={formData.endAt}
                onChange={(e) => handleInputChange("endAt", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaImages className="mr-1 text-gray-500" /> Upload Image
              </label>

              {/* Image Preview */}
              {imagePreview && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 mb-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    disabled={isSubmitting || imageProcessing}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {imageFile
                      ? `${(imageFile.size / 1024).toFixed(1)} KB`
                      : "Optimized"}
                  </div>
                </div>
              )}

              {/* Loading indicator for image processing */}
              {imageProcessing && !imagePreview && (
                <div className="w-full h-48 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">Processing image...</p>
                  </div>
                </div>
              )}

              {/* File Upload Input */}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isSubmitting || imageProcessing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {!imagePreview && (
                  <div className="mt-2 text-xs text-gray-500">
                    Supports: JPG, PNG, GIF, WebP (Max: 10MB)
                  </div>
                )}
              </div>
            </div>

            {/* Tags / Metadata */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaTag className="mr-1 text-gray-500" /> Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => removeArrayItem("tags", index)}
                      className="ml-1 text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  disabled={isSubmitting}
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleArrayField("tags", currentTag)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Only Members & Active */}
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                disabled={isSubmitting}
                checked={formData.onlyForMembers}
                onChange={(e) =>
                  handleInputChange("onlyForMembers", e.target.checked)
                }
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              Only For Members
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                disabled={isSubmitting}
                checked={formData.active}
                onChange={(e) => handleInputChange("active", e.target.checked)}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              Active
            </label>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
            >
              {isSubmitting && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              {isSubmitting ? "Creating..." : "Create Offer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOfferPage;
