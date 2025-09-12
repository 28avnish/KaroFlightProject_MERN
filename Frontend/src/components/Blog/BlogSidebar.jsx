import React, { useState } from "react";

const BlogSidebar = ({
  onSearch,
  categories = [
    { name: "Travel Tips", count: 89, color: "bg-blue-900" },
    { name: "Destinations", count: 156, color: "bg-orange-500" },
    { name: "Flight Deals", count: 73, color: "bg-green-500" },
    { name: "Hotels & Stays", count: 94, color: "bg-blue-500" },
    { name: "Travel Guides", count: 67, color: "bg-yellow-400" },
    { name: "Budget Travel", count: 45, color: "bg-purple-500" },
  ],
  relatedArticles = [
    {
      category: "Deals",
      title: "How to Find Error Fares and Mistake Prices",
      readTime: "5 min read",
    },
    {
      category: "Travel Tips",
      title: "Airport Lounge Access Guide",
      readTime: "7 min read",
    },
    {
      category: "Technology",
      title: "Best Travel Apps for 2024",
      readTime: "6 min read",
    },
    {
      category: "Safety",
      title: "Travel Insurance: What You Need to Know",
      readTime: "9 min read",
    },
  ],
}) => {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setSubmitted(true);
  };

  return (
    <div className="w-full hidden lg:flex flex-col right-6 md:absolute justify-start lg:w-1/3 p-1 lg:pl-6 space-y-6 md:space-y-9">
      {/* Search Widget */}
      <div className="flex items-center border border-gray-300 justify-center bg-white rounded-xl shadow-md p-4 md:p-6 w-full max-w-2xl">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Search Articles
          </h2>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search travel tips..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </form>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="max-w-2xl flex flex-col border border-gray-300 bg-white rounded-xl shadow-md p-4 md:p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Popular Categories
        </h2>
        <ul className="divide-y divide-gray-200">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className={`w-3 h-3 rounded-full ${cat.color}`}></span>
                <span className="text-gray-700">{cat.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {cat.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Articles Widget */}
      <div className="max-w-2xl flex flex-col border border-gray-300 p-4 md:p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Related Articles
        </h2>

        <div className="space-y-6">
          {relatedArticles.map((article, index) => (
            <div
              key={index}
              className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0 cursor-pointer hover:bg-gray-50 transition-colors p-2 rounded"
            >
              <span className="inline-block text-sm font-medium text-blue-600 mb-2">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-gray-900">{article.readTime}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#view-all"
            className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View all articles
          </a>
        </div>
      </div>

      {/* Newsletter Subscription Widget */}
      <div className="max-w-2xl flex flex-col p-6 md:p-8 bg-blue-900 shadow-lg rounded-xl">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Weekly Travel Newsletter</h2>
          <p className="text-sm mb-6">
            Get exclusive deals and travel tips delivered to your inbox every
            week.
          </p>
          {!submitted ? (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <p className="text-green-300 font-medium">
              Thanks for subscribing!
            </p>
          )}
          <p className="text-xs text-gray-300 mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
