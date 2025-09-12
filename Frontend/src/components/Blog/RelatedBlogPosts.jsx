import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={post.image}
        alt="Blog preview"
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col space-y-3 p-4">
        <div className="flex justify-between items-center text-sm">
          <span className="px-3 py-1 bg-gray-500/50 rounded-full text-white">
            {post.category}
          </span>
          <span className="text-gray-600">{post.readTime}</span>
        </div>
        <h2 className="text-lg font-semibold leading-snug">{post.title}</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {post.description}
        </p>
        <a
          href={post.link}
          className="text-sm text-blue-600 hover:underline self-start transition-colors"
        >
          Read article
        </a>
      </div>
    </div>
  );
};

const RelatedBlogPosts = ({
  posts = [
    {
      id: 1,
      title: "Best Travel Credit Cards for 2024",
      description:
        "Maximize your rewards and benefits with these top-rated travel credit cards...",
      category: "Travel Finance",
      readTime: "6 min",
      image: "/blog-img.svg",
      link: "/blog/travel-credit-cards-2024",
    },
    {
      id: 2,
      title: "Ultimate Packing Guide: Travel Light, Travel Smart",
      description:
        "Master the art of efficient packing with our comprehensive guide...",
      category: "Travel Tips",
      readTime: "4 min",
      image: "/blog-img.svg",
      link: "/blog/solo-travel-budgeting",
    },
    {
      id: 3,
      title: "Hidden Gems: Underrated European Destinations",
      description:
        "Discover breathtaking European destinations away from the tourist crowds...",
      category: "Destinations",
      readTime: "5 min",
      image: "/blog-img.svg",
      link: "/blog/best-travel-insurance",
    },
  ],
}) => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4 md:px-6 py-10">
      <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Continue Reading</h1>
        <p className="text-base md:text-lg text-gray-500">
          Explore more travel insights and expert advice
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
