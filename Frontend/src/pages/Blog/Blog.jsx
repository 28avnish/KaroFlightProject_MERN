import React from "react";
import HeroImg from "../../assets/images/BlogHeroImg.svg";
import BlogImg from "../../assets/images/BlogImg.svg";
import BlogHero from "../../components/Blog/BlogHero";
import BlogContent from "../../components/Blog/BlogContent";
import AuthorBio from "../../components/Blog/AuthorBio";
import CategoryTags from "../../components/Blog/CategoryTags";
import BlogComments from "../../components/Blog/BlogComments";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import RelatedBlogPosts from "../../components/Blog/RelatedBlogPosts";
import BlogCTA from "../../components/Blog/BlogCTA";

const Blog = () => {
  // Data arrays
  const categories = [
    { name: "Travel Tips", count: 89, color: "bg-blue-900" },
    { name: "Destinations", count: 156, color: "bg-orange-500" },
    { name: "Flight Deals", count: 73, color: "bg-green-500" },
    { name: "Hotels & Stays", count: 94, color: "bg-blue-500" },
    { name: "Travel Guides", count: 67, color: "bg-yellow-400" },
    { name: "Budget Travel", count: 45, color: "bg-purple-500" },
  ];

  const articles = [
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
  ];

  const tags = [
    "booking",
    "airports",
    "deals",
    "safety",
    "budget travel",
    "flight tips",
    "travel planning",
    "money saving",
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Best Travel Credit Cards for 2024",
      description:
        "Maximize your rewards and benefits with these top-rated travel credit cards...",
      category: "Travel Finance",
      readTime: "6 min",
      image: BlogImg,
      link: "/blog/travel-credit-cards-2024",
    },
    {
      id: 2,
      title: "Ultimate Packing Guide: Travel Light, Travel Smart",
      description:
        "Master the art of efficient packing with our comprehensive guide...",
      category: "Travel Tips",
      readTime: "4 min",
      image: BlogImg,
      link: "/blog/solo-travel-budgeting",
    },
    {
      id: 3,
      title: "Hidden Gems: Underrated European Destinations",
      description:
        "Discover breathtaking European destinations away from the tourist crowds...",
      category: "Destinations",
      readTime: "5 min",
      image: BlogImg,
      link: "/blog/best-travel-insurance",
    },
  ];

  // Event handlers
  const handleSearch = (searchQuery) => {
    console.log("Searching for:", searchQuery);
  };

  const handleCommentSubmit = (commentData) => {
    console.log("New comment:", commentData);
  };

  const handleNewsletterSubscribe = (email) => {
    console.log("Newsletter subscription:", email);
  };

  return (
    <>
      {/* Hero Section */}
      <BlogHero
        category="Travel Tips"
        title="Essential Travel Tips: Save More, Travel Smarter"
        subtitle="Practical guidance for timing bookings, finding reliable deals, and maximizing your flight experience."
        author={{
          name: "Sarah Chen",
          date: "March 15, 2024",
          readTime: "8 min read",
        }}
        heroImage={HeroImg}
      />

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-6">
        {/* Left Column - Main Content */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {/* Article Content */}
          <BlogContent />

          {/* Author Bio Section */}
          <AuthorBio
            author={{
              name: "Sarah Chen",
              bio: "Travel writer & aviation expert with 8+ years of experience. Visited 45 countries, shares travel deals & practical advice. Based in San Francisco, loves local coffee shops.",
              articleCount: 127,
              image: "/sarah-chen.jpg",
            }}
          />

          {/* Category and Tags Section */}
          <CategoryTags currentCategory="Travel Tips" tags={tags} />

          {/* Comments Section */}
          <BlogComments onSubmitComment={handleCommentSubmit} />
        </div>

        {/* Right Column - Sidebar */}
        <BlogSidebar
          onSearch={handleSearch}
          categories={categories}
          relatedArticles={articles}
        />
      </section>

      {/* Blog Cards Section */}
      <RelatedBlogPosts posts={blogPosts} />

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 flex justify-center">
        <BlogCTA onSubscribe={handleNewsletterSubscribe} />
      </section>
    </>
  );
};

export default Blog;
