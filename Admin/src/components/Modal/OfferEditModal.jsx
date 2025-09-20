import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const OfferEditModal = ({ offer, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "percentage",
    value: 0,
    startAt: "",
    endAt: "",
    imageUrl: "",
    tags: [],
    onlyForMembers: false,
    active: true,
  });
  const [currentTag, setCurrentTag] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageProcessing, setImageProcessing] = useState(false);

  useEffect(() => {
    if (offer) {
      setFormData({
        title: offer.title || "",
        description: offer.description || "",
        type: offer.type || "percentage",
        value:
          offer.type === "coupon"
            ? offer.code || ""
            : offer.value || 0,
        startAt: offer.startAt
          ? new Date(offer.startAt).toISOString().slice(0, 16)
          : "",
        endAt: offer.endAt
          ? new Date(offer.endAt).toISOString().slice(0, 16)
          : "",
        imageUrl: offer.imageUrl || "",
        tags: offer.tags || [],
        onlyForMembers: offer.onlyForMembers || false,
        active: offer.active !== undefined ? offer.active : true,
      });
      setImagePreview(offer.imageUrl || "");
    }
  }, [offer]);

  if (!isOpen) return null;

  const showAlert = (title, message, type = "success") => {
    Swal.fire({
      title,
      text: message,
      icon: type,
      confirmButtonText: "OK",
      confirmButtonColor: "#10B981",
    });
  };

  const compressImage = (file, maxWidth = 800, maxHeight = 600, quality = 0.7) =>
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
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showAlert("Error", "Please select a valid image file", "error");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showAlert("Error", "Image size should be less than 10MB", "error");
      return;
    }

    try {
      setImageProcessing(true);
      const compressedFile = await compressImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        setImagePreview(dataUrl);
        setImageFile(compressedFile);
        setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
        setImageProcessing(false);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      console.error(err);
      showAlert("Error", "Failed to process image", "error");
      setImageProcessing(false);
    }
  };

  const removeImage = () => {
    setImagePreview("");
    setImageFile(null);
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
  };

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
    if (!offer?._id) return showAlert("Error", "No offer ID found", "error");

    let payload = { ...formData };

    if (formData.type === "coupon") {
      payload.value = 0;           // keep numeric field valid
      payload.code = formData.value; // store coupon string
    } else {
      payload.value = Number(formData.value);
      payload.code = "";
    }

    try {
      setLoading(true);
      await onSave(payload);
      await Swal.fire({
        title: "Success!",
        text: `Offer "${formData.title}" updated successfully`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#10B981",
        timer: 2000,
        timerProgressBar: true,
      });
      onClose();
    } catch (err) {
      console.error(err);
      showAlert("Error", err.message || "Failed to update offer", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 z-10"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Edit Offer</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title & Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Discount Type</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed</option>
                <option value="coupon">Coupon</option>
                <option value="bundle">Bundle</option>
                <option value="tripjack">TripJack</option>
              </select>
            </div>
          </div>

          {/* Description  */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          {/* Value */}
          <div>
            <label className="block text-sm font-medium mb-1">
              {formData.type === "coupon" ? "Coupon Code" : "Value"}{" "}
              {formData.type === "percentage" ? "(%)" : formData.type === "fixed" ? "(Amount)" : ""}
            </label>
            <input
              type={formData.type === "coupon" ? "text" : "number"}
              value={formData.value}
              onChange={(e) => handleInputChange("value", e.target.value)}
              min={formData.type === "percentage" ? 0 : undefined}
              max={formData.type === "percentage" ? 100 : undefined}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="datetime-local"
                value={formData.startAt}
                onChange={(e) => handleInputChange("startAt", e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="datetime-local"
                value={formData.endAt}
                onChange={(e) => handleInputChange("endAt", e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            {imagePreview && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 mb-3">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border rounded text-sm"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                  {tag}
                  <button type="button" onClick={() => removeArrayItem("tags", index)} className="ml-1 text-blue-600 hover:text-blue-800">
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="flex-grow border rounded-l px-3 py-2 text-sm"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={() => handleArrayField("tags", currentTag)}
                className="bg-blue-500 text-white px-3 py-2 rounded-r text-sm hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.onlyForMembers}
                onChange={(e) => handleInputChange("onlyForMembers", e.target.checked)}
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

          {/* Submit */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
            >
              {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferEditModal;
