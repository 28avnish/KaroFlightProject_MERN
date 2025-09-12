import React from "react";

const ExploreDestinationsSection = ({ exploreDestinations, accentText }) => {
  return (
    <section className="my-8 md:my-10 lg:my-12 px-4">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold mb-6 md:mb-8 lg:mb-10 text-center">
          Not sure where to go? Explore Everywhere from India
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mx-auto max-w-7xl gap-3 md:gap-4 lg:gap-5">
          {exploreDestinations.map((destination) => (
            <div
              key={destination.id}
              className="border-gray-300 border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="rounded-t-xl md:w-64 w-full h-24 md:h-28 lg:h-32 object-cover"
              />
              <div className="flex items-center justify-center flex-col rounded-b-xl p-2 md:p-3 lg:p-4 gap-1 md:gap-2">
                <p className="text-sm md:text-[16px] font-medium text-center">
                  {destination.name}
                </p>
                <p
                  className={`${accentText} text-sm md:text-[16px] font-medium`}
                >
                  {destination.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* More destinations button */}
        <div className="py-3 md:py-4 px-6 md:px-8 hover:bg-[#FF621F] hover:text-white flex items-center justify-center mt-6 md:mt-8 lg:mt-10 rounded-2xl border border-gray-200 bg-white transition duration-300 cursor-pointer">
          <p className="text-xs md:text-[14px] font-medium">
            View all destinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinationsSection;
