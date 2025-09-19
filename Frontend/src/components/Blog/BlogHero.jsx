import React from "react";

const BlogHero = ({
  category = "Travel Tips",
  title = "Essential Travel Tips: Save More, Travel Smarter",
  subtitle = "Practical guidance for timing bookings, finding reliable deals, and maximizing your flight experience.",
  author = {
    name: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
  },
  heroImage,
}) => {
  return (
    <section className="bg-white text-gray-800 max-w-3xl mx-auto p-4 md:p-6">
      {/* Category Tag */}
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {category}
      </span>

      {/* Title & Subtitle */}
      <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

      {/* Author & Meta Info */}
      <div className="text-xs text-gray-500 mb-6 flex flex-wrap items-center gap-2 md:gap-4">
        {/* Author */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.805 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-medium text-gray-700">{author.name}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{author.date}</span>
        </div>

        {/* Reading Time */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{author.readTime}</span>
        </div>

        {/* Share Icons */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Link Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 hover:text-blue-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14L21 3m0 0h-7m7 0v7M13 10l-4 4a3 3 0 01-4.243 0l-1.414-1.414a3 3 0 010-4.243l4-4"
            />
          </svg>
          {/* Facebook Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 hover:text-blue-700 cursor-pointer"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>

          {/* Twitter Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 hover:text-blue-400 cursor-pointer"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.636 4.077 4.077 0 001.804-2.243 8.19 8.19 0 01-2.605.981A4.1 4.1 0 0015.448 4c-2.266 0-4.102 1.812-4.102 4.047 0 .317.036.626.106.922A11.65 11.65 0 013 5.15a4.02 4.02 0 001.27 5.39 4.1 4.1 0 01-1.857-.51v.05c0 1.89 1.36 3.47 3.166 3.83a4.1 4.1 0 01-1.852.07c.522 1.61 2.037 2.78 3.833 2.81A8.23 8.23 0 012 18.407a11.62 11.62 0 006.29 1.84" />
          </svg>

          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 hover:text-pink-500 cursor-pointer"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm4.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
          </svg>
        </div>
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div className="overflow-hidden rounded-lg shadow-sm">
          <img
            src={heroImage}
            alt="Blog hero image"
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default BlogHero;
