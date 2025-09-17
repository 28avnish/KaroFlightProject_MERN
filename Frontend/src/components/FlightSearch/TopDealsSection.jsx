import React from "react";

const TopDealsSection = ({
  topDeals,
  filterOptions,
  activeFilter,
  toggleFilter,
  accentBG,
  whiteText,
  textLightGray,
  accentText,
}) => {
  return (
    <section className="my-8 md:my-12 lg:my-15 px-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-center mb-5">
            Flight options from India
          </h1>
          {/* <div className="flex flex-wrap gap-2 my-5 md:my-7 justify-center">
            {filterOptions.map((item) => {
              const isActive = activeFilter === item;

              return (
                <div
                  key={item}
                  onClick={() => toggleFilter(item)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "bg-[#FF621F] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-[#FF621F] hover:text-white"
                  }`}
                >
                  <p className="text-xs md:text-sm font-medium">{item}</p>
                </div>
              );
            })}
          </div> */}
          <div className="mb-15">
            <p className={`text-[18px] ${textLightGray}`}>
              Here you have the flight options with the most affordable prices.
              Hurry up because of this departure within the upcoming three
              months.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl gap-6 md:gap-8 lg:gap-10">
          {topDeals.map((deal) => (
            <div
              key={deal.id}
              className="overflow-hidden cursor-pointer group rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={deal.image}
                alt={deal.destination}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="rounded-b-2xl border border-t-neutral-50 border-gray-300 p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base md:text-[18px] font-bold">
                      {deal.destination}
                    </p>
                    <p className={`${textLightGray} text-xs md:text-[14px]`}>
                      {deal.country}
                    </p>
                  </div>
                  <div
                    className={`${accentBG} p-1 md:p-2 rounded-xl ${whiteText} text-xs md:text-[12px] font-medium`}
                  >
                    <p>{deal.tag}</p>
                  </div>
                </div>
                <h1
                  className={`${accentText} text-xl md:text-[24px] font-bold mt-2`}
                >
                  {deal.price}
                </h1>
                <p className={`${textLightGray} text-xs md:text-[14px]`}>
                  (return)
                </p>
                <p
                  className={`${textLightGray} text-xs md:text-[14px] mt-2 md:mt-3`}
                >
                  {deal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDealsSection;
