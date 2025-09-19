import React, { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaClock,
  FaUser,
  FaTag,
  FaEdit,
} from "react-icons/fa";
import EditBlogModal from "../Modal/EditBlogModal";

const blogsData = [
  {
    id: 1,
    title: "Top 10 Tips for Booking Cheap Flights",
    description:
      "Discover smart strategies to find the lowest airfare, avoid hidden charges, and maximize your travel budget.",
    category: "Flights",
    author: "Travel Guru",
    date: "Sep 15, 2025",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Best Hotels for Families in New York",
    description:
      "Explore family-friendly hotels in NYC that combine comfort, affordability, and great locations.",
    category: "Hotels",
    author: "Hotel Expert",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "How to Earn and Use Airline Miles",
    description:
      "Learn how to collect frequent flyer miles and redeem them for free flights and upgrades.",
    category: "Flights",
    author: "Miles Collector",
    date: "Sep 05, 2025",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Luxury Resorts Worth the Splurge",
    description:
      "Indulge in world-class resorts with breathtaking views, gourmet dining, and unmatched service.",
    category: "Hotels",
    author: "Luxury Traveler",
    date: "Aug 30, 2025",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210bb?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AllBlogs() {
  const [blogs, setBlogs] = useState(blogsData);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleSave = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Travel Blogs</h1>
        <p className="text-gray-600 mt-3">
          Tips, tricks, and guides for smarter hotel and flight bookings.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2 text-sm mb-2">
                {blog.category === "Flights" ? (
                  <FaPlane className="text-blue-600" />
                ) : (
                  <FaHotel className="text-green-600" />
                )}
                <span className="font-medium text-gray-700">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <span className="flex items-center gap-1">
                  <FaUser /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {blog.date}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex justify-between items-end">
                <button className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-semibold">
                  <FaTag /> Read More
                </button>
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-semibold"
                >
                  <FaEdit /> Edit Blog
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <EditBlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={selectedBlog}
        onSave={handleSave}
      />
    </div>
  );
}
