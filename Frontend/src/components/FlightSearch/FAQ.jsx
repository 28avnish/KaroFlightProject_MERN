import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I find out the best flight deals for me?",
      answer: "Find the flights but do not mention your departure date. Instead, it is better to go with 'whole month' option, thereafter choose 'cheapest month'. Now the results you will have, shows you the cheapest days to fly out and return to India. Be active and look for a perfect deal everywhere. In case you know when you want to visit but your destination is flexible 'Everywhere Search Option' gives you the best flight deals from your selected place. You can simply mention your details of the departure airport and dates then hit the everywhere button. If you have a pre decided destination and preferred dates handy, you can get notified about price ups and downs with our price alert feature. You can sign up to receive the best weekly or monthly flight deals directly in your inbox."
    },
    {
      question: "How can I find the best last minute flight deals?",
      answer: "Sometimes it is better to wait until the last minute to check out if airlines decrease the price of their leftover seats on their flights but it can be a risk too. Here are some methods to have a great flight ticket deal a week or two prior to your flight with our 'Flight Search Option'. If you plan a vacation but do not worry about where it spends. You can search flights to 'Everywhere' for the best flight deals and avail yourself of offers to any place in the upcoming future. In case you have a fixed destination in your mind and wish to find the best deals for flights for the upcoming few weeks then you can choose the 'whole month' when you are checking then choose the next month to look for the cheapest days to travel."
    },
    {
      question: "Where should I book a flight right now?",
      answer: "New Delhi is one of the trending destinations among the travellers right now. But in case you want more amazing destinations go ahead with our search everywhere option to find out the best flight deal to anywhere in the world."
    },
    {
      question: "How can I receive alerts on flight deals and low prices?",
      answer: "If you have a trip in your mind but you are not yet ready to execute. There is no pressure. You can have an eye on the ups and downs of price in two different ways; Enable Price Alert: We will be observing fares for you and keep you posted through an email in case they go up and down. You can go one step ahead with subscribing to us so that price alerts reach you directly in your phone through our website."
    },
    {
      question: "What happens after I have booked my flight ticket?",
      answer: "Once you choose your flight, you will directly book with one of our reliable travel partners or airlines, generally on their websites. You will directly receive a confirmation email and other information you may require from them only. In case you book with Karo Flight directly, you will receive the confirmation email. If you have directly booked from us, you can look into your account or visit our website to check your booking details. In case you further need any assistant, you can also get in touch with our 24/7 dedicated customer support team of specialists."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-gray-800">
        FAQs
      </h1>
      
      <div className="space-y-3 sm:space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              className="flex justify-between items-center w-full p-3 sm:p-4 md:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800 text-xs sm:text-sm md:text-base pr-2">
                <span className="hidden sm:inline">{index + 1}) </span>
                {faq.question}
              </span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500 flex-shrink-0 ml-2 text-sm sm:text-base" />
              ) : (
                <FaChevronDown className="text-gray-500 flex-shrink-0 ml-2 text-sm sm:text-base" />
              )}
            </button>
            
            {activeIndex === index && (
              <div className="p-3 sm:p-4 md:p-5 bg-gray-50">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;