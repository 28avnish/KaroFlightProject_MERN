import React, { useState } from "react";
import {
  FaHeading,
  FaAlignLeft,
  FaTag,
  FaPlane,
  FaHotel,
  FaUser,
  FaCalendarAlt,
  FaUpload,
  FaVideo,
  FaSave,
} from "react-icons/fa";

export default function CreateNewBlog() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "",
    date: "",
    media: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleFileChange = (e) => {
    setBlog({ ...blog, media: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", blog);
    alert("Blog submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold text-gray-900">Create New Blog</h1>
        <p className="text-gray-600 mt-3">
          Fill in the details below to publish your travel blog.
        </p>
      </div>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaHeading className="text-blue-600" /> Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaAlignLeft className="text-green-600" /> Short Description
          </label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            placeholder="Enter a short summary of the blog..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaAlignLeft className="text-purple-600" /> Full Content
          </label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write the full blog content here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaTag className="text-orange-600" /> Category
          </label>
          <select
            name="category"
            value={blog.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="Flights">Flights</option>
            <option value="Hotels">Hotels</option>
            <option value="Travel Tips">Travel Tips</option>
            <option value="Guides">Guides</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaUser className="text-pink-600" /> Author Name
          </label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaCalendarAlt className="text-indigo-600" /> Publish Date
          </label>
          <input
            type="date"
            name="date"
            value={blog.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        {/* Media Upload */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FaUpload className="text-teal-600" /> Upload Image/Video
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-teal-500 transition">
            <FaVideo className="text-4xl text-teal-600 mb-3" />
            <p className="text-gray-600 text-sm mb-2">
              Drag & drop or click to upload image/video
            </p>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
              id="mediaUpload"
            />
            <label
              htmlFor="mediaUpload"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition cursor-pointer"
            >
              Choose File
            </label>
            {blog.media && (
              <p className="text-sm text-gray-700 mt-2">
                Selected: {blog.media.name}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mx-auto"
          >
            <FaSave /> Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
}
