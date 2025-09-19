import React from "react";

const FeatureCards = ({ featureCards }) => {
  return (
    <section className="p-6 md:p-10 lg:p-16 bg-white">
      <div className="mx-auto px-2 md:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center text-center md:flex-row md:text-left"
          >
            <div
              className={`w-10 h-10 ${card.bgColor} rounded-full flex items-center justify-center mb-3 md:mb-0 md:mr-4`}
            >
              {card.icon}
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
