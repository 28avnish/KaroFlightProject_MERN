import React from "react";

const AuthorBio = ({
  author = {
    name: "Sarah Chen",
    bio: "Travel writer & aviation expert with 8+ years of experience. Visited 45 countries, shares travel deals & practical advice. Based in San Francisco, loves local coffee shops.",
    articleCount: 127,
    image: "/sarah-chen.jpg",
  },
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image */}
      <img
        src={author.image}
        alt={author.name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-500"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800 text-lg md:text-xl">
          {author.name}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{author.bio}</p>

        {/* Stats */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <span>📝 {author.articleCount} articles</span>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium mt-2 sm:mt-0"
          >
            View all articles →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
