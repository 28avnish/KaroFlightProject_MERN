import { useState } from "react";

const FAQSection = () => {
  const questions = [
    {
      title: "Refund timeline",
      answer: "Refunds are typically processed within 5–7 business days after approval.",
    },
    {
      title: "Failed booking",
      answer: "If your booking fails, please retry or contact support with your transaction ID.",
    },
    {
      title: "Contacting support",
      answer: "You can reach support via live chat or email at support@example.com.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h3>

      <div className="divide-y-2 divide-gray-300">
        {questions.map((q, index) => (
          <div key={index} className="py-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <span className="font-medium">{q.title}</span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
