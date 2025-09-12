import React, { useState } from "react";
import { BiLike, BiReply } from "react-icons/bi";
import { FaRegCommentAlt, FaReply } from "react-icons/fa";

const BlogComments = ({ comments = [], onSubmitComment }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitComment) {
      onSubmitComment(formData);
    }
    setFormData({ name: "", email: "", comment: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Default comments for demo
  const defaultComments = [
    {
      id: 1,
      author: "Alex Thompson",
      time: "2 hours ago",
      content:
        "This is incredibly helpful! I've been booking flights all wrong. The Tuesday afternoon tip just saved me ₹2000 on my upcoming trip to Japan.",
      likes: 12,
      replies: [
        {
          id: 1,
          author: "Sarah Chen",
          time: "1 hour ago",
          content:
            "So glad this helped! Japan is amazing - you're going to love it. Safe travels!",
          likes: 20,
        },
      ],
    },
  ];

  const displayComments = comments.length > 0 ? comments : defaultComments;

  return (
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
      <FaRegCommentAlt />  Comments ({displayComments.length})
      </h2>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-xl shadow-lg border border-gray-300 p-4 md:p-5"
      >
        <h3 className="text-lg font-medium text-gray-700">
          Share your thoughts
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Comment */}
        <textarea
          name="comment"
          placeholder="Write your comment..."
          value={formData.comment}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Moderation Note */}
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            Comments are moderated and will appear after approval.
          </p>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#002C52] text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      {displayComments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white rounded-xl shadow border border-gray-300 p-5 md:p-7 flex flex-col space-y-5 mb-6 md:mb-10"
        >
          <div className="flex flex-col">
            <p className="text-base font-medium">{comment.author}</p>
            <p className="text-gray-400 text-sm">{comment.time}</p>
          </div>

          <div>
            <p className="text-base">{comment.content}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="gap-2 flex items-center text-gray-400">
              <span className="text-gray-900">
                <BiLike />
              </span>
              <span>{comment.likes}</span>
            </div>
            <div className="text-gray-900 cursor-pointer hover:text-gray-600">
              <FaReply />
            </div>
          </div>

          {/* Replies */}
          {comment.replies &&
            comment.replies.map((reply) => (
              <div
                key={reply.id}
                className="pl-4 md:pl-8 border-l-4 border-gray-300"
              >
                <div className="flex flex-col space-y-3.5">
                  <div className="gap-1.5 flex flex-col">
                    <p className="text-base font-medium">{reply.author}</p>
                    <p className="text-sm text-gray-400"> {reply.time}</p>
                  </div>
                  <div>
                    <p className="text-base">{reply.content}</p>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <span className="text-gray-900 flex items-center gap-2">
                      <BiLike />
                    {reply.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}

      {/* Load More Comments Button */}
      <div className="flex items-center justify-center mb-10 md:mb-20">
        <div className="border border-[#DDE0E4] py-2 px-8 rounded-xl shadow">
          <button className="hover:text-blue-600 transition-colors">
            Load more comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
