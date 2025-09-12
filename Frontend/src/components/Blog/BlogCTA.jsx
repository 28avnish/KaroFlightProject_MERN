import React, { useState } from "react";

const BlogCTA = ({
  title = "Never Miss a Travel Deal",
  subtitle = "Get our best travel tips, exclusive deals, and destination guides delivered to your inbox.",
  onSubscribe,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubscribe) {
      onSubscribe(email);
    }
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-br from-[#002C52]/100 to-[#0A4376]/100 p-6 md:p-10 flex items-center justify-center text-center flex-col text-white my-10 md:my-15 space-y-2.5 rounded-xl w-full max-w-4xl">
      <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
      <p className="text-sm md:text-base">{subtitle}</p>

      {!subscribed ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-gray-900 py-2 px-4 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="bg-[#F97A1F] py-2 px-4 rounded-xl text-white text-sm mt-2 sm:mt-0 sm:w-auto hover:bg-orange-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <div className="text-green-300 font-medium mt-4">
          ✓ Thanks for subscribing! Check your email for confirmation.
        </div>
      )}
    </div>
  );
};

export default BlogCTA;
