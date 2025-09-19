import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  FaAngleRight, FaAngleDown } from "react-icons/fa";
const FAQ = () => {
  const navigate = useNavigate();
  const faqItems = [
    {
      question: "How can I find the best hotels in my budget on Karo Flight?",
      answer: (
        <>
          You need to search your travel destination with your preferred dates,
          then select an option shown as “Best”. For your clarity, by “best”, it
          means the hotels with the highest score regarding value for money,
          travellers’ reviews and locations.
          <br />
          <br />
          If you are searching for the best hotels deals with discounts, you had
          better visit our{" "}
          <button
            type="button"
            className="text-[#FF621F] underline hover:text-[#C23E04] focus:outline-none font-bold"
            onClick={() => navigate("/hotel-deals")}
          >
            Hotel deals page
          </button>
          .
        </>
      ),
    },
    {
      question: "How does Karo Flight rank hotels? ",
      answer:
        "Well, there is no hidden magic behind it. It is completely a smart search process. We browse all the top hotel providing websites like Agoda, booking.com, as well as trip.com. After pulling data from there, we show you the best deals available with price comparison. \n\nYou also have an amazing option to click on “best” to have our preferred hotels. These hotels are the best value for money with positive reviews, and centre locations.",
    },
    {
      question: "Do I book my hotel direct from Karo Flight?",
      answer:
        "Your offers will display across all our partner platforms, including our website, mobile app, and third-party booking sites that integrate with our API.",
    },
    {
      question: "Who can approve offers?",
      answer:
        "No! Karo Flight is only a travel search engine. We just show you a good number of hotel deals, but we do not manage any booking or payments. Once you choose a hotel, we take you to the hotel provider’s platform in order to complete your booking.",
    },
    {
      question: "How can I confirm if I have the best deal price?",
      answer:
        "We show you the best available deals which our hotel partners are currently offerings with discounted prices. You always see the most updated price and deals offered here. ",
    },
    {
      question: "How can Karo Flight help me plan my travel?",
      answer:
        "We help you make your trip planning as easy as pie with our simple search options. It contains our reliable hotel partners with up-to-date price and deals. You also have an amazing feature to keep all at one place by comparing price of rental cars and flights.",
    },
    {
      question:
        "How can I choose the best hotel? There are multiple options available?",
      answer:
        "It is quite normal to feel confused with multiple options. You don’t need to worry about it. Remove all the options and decide what matters you the most for your trip. You may end up with finding the best hotels for families, business meetings, and couples. You can have one more filter with essentials such us free parking space, pools, or spa.",
    },
    {
      question: "Will it be cheaper to book a hotel at the last minute?",
      answer:
        "Yes, it can be. It all depends on the demand and availability. In case you are booking a hotel in a side location during the off-season time, there will be more rooms available. In this situation, booking at the last minute will be quite cheaper. But if it is the main city and peak holiday season, you will save by booking in advance for sure.  ",
    },
    {
      question: "Are hotels cheaper at certain times of the year?",
      answer:
        "Yes, it can be. But it depends on a few factors like when and where you travelling. Some tourist spots offer cheaper price during off-peak months while other famous destinations remain costly throughout the year. There is no as such rule, therefore it is better to have an eye on the deals and offers.  ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mb-15">
      {/* Header */}
      <h1 className="text-3xl flex items-center justify-center font-bold text-gray-800 mb-8">
        FAQs
      </h1>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border  border-gray-200 p-2 rounded-xl">
            <button
              className="w-full text-left flex items-center justify-between focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="font-medium text-gray-800 text-xs sm:text-sm md:text-base pr-2 py-2">
                {item.question}
              </h3>
              <span className="ml-2 text-2xl text-gray-400">
                {openIndex === index ? (
                  <FaAngleDown className="text-sm text-black" />
                ) : (
                  <FaAngleRight className="text-sm text-black" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-[#808080] px-2 pb-2 text-[15px] transition-all duration-200 whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
