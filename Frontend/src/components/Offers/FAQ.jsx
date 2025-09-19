
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
const FAQ = () => {
  const faqItems = [
    {
      question: "How do Trip Jack deals sync?",
      answer: "Trip Jack deals automatically sync with your booking system in real-time, ensuring all promotions are always up to date across all platforms."
    },
    {
      question: "Can I limit offers by route/date?",
      answer: "Yes, our system allows you to set specific parameters for each offer, including routes, dates, and even time periods for maximum flexibility."
    },
    {
      question: "Where will offers display?",
      answer: "Your offers will display across all our partner platforms, including our website, mobile app, and third-party booking sites that integrate with our API."
    },
    {
      question: "Who can approve offers?",
      answer: "Offer approval can be configured based on your organizational structure. Typically, managers or administrators have approval privileges, which can be customized in settings."
    },
    {
      question: "Can I pause/edit live offers?",
      answer: "Absolutely. You can pause, edit, or remove live offers at any time through the dashboard. Changes take effect immediately across all platforms."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mb-15">
      {/* Header */}
      <h1 className="text-3xl flex items-center justify-center font-bold text-gray-800 mb-8">FAQs</h1>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border  border-gray-200 p-2 rounded-xl">
            <button
              className="w-full text-left flex items-center justify-between focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800 py-2">
                {item.question}
              </h3>
              <span className="ml-2 text-2xl text-gray-400">
                {openIndex === index ? <FaAngleDown className="text-sm text-black" /> : <FaAngleUp  className="text-sm text-black"/>}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 px-2 pb-2 text-[15px] transition-all duration-200">
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