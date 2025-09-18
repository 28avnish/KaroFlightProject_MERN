import { useState, useEffect } from "react";
import {
  LuBell,
  LuGlobe,
  LuHotel,
  LuShield,
  LuTag,
  LuTicket,
} from "react-icons/lu";

const darkBlackText = "text-[#000000]";
const accentText = "text-[#FF621F]";
const whiteBG = "bg-[#ffffff]";
const textLightGray = "text-[#808080]";

const englishContent = {
  title: "Finding the best flight options anywhere across the world?",
  description:
    "It is quite an easy task with Karo Flight. We are the best choice of approximately 80 million travellers from the world. They blindly trust us to compare flight prices and offer deals from more than 1,000 airlines and travel partners. They get multiple options at one place. You can also save money and make hassle-free bookings. Here is how you can do so;",
  viewAllButton: "View All Options",
  showLessButton: "Show Less",
  flightOptionsData: [
    {
      id: 1,
      icon: LuGlobe,
      title: "Look for 'Everywhere' & Visit 'Anywhere'",
      description:
        "Mention your departure airport detail with travel dates afterwards select 'everywhere' option. You will have multiple flight deals to every place across the world. It starts showing the lowest prices.",
    },
    {
      id: 2,
      icon: LuTag,
      title: "Save more with accurate price",
      description:
        "Here you get the cheapest flight deals without any hidden charges. It means you need to pay what you exactly see.",
    },
    {
      id: 3,
      icon: LuBell,
      title: "Book best with price alerts",
      description:
        "In case you have selected your flight but are not ready to confirm it yet. You can enable price alerts and we will keep you posted if prices go ups and downs.",
    },
    {
      id: 4,
      icon: LuShield,
      title: "Travel Stress Free",
      description:
        "It is our top most priority to help you travel stress-free and make your journey as comfortable as possible.",
    },
    {
      id: 5,
      icon: LuTicket,
      title: "Discover flexible flight options",
      description:
        "It is recommended that you should always go for flexible flight ticket offers so you do not lose money in case your flight is cancelled or changed.",
    },
    {
      id: 6,
      icon: LuHotel,
      title: "Include hotels and rental cars",
      description:
        "Do not forget to complete your journey without including hotels and rental cars. With this option you can keep all your bookings at one place.",
    },
  ],
};

const FlightOptions = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);

      if (width < 640) {
        setVisibleCards(3);
      } else if (width < 1024) {
        setVisibleCards(4);
      } else {
        setVisibleCards(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-8 md:py-16">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center space-y-4 mx-auto px-4 max-w-[1368px]">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${darkBlackText}`}
          >
            {englishContent.title}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl ${textLightGray} text-center`}
          >
            {englishContent.description}
          </p>
        </div>

        <div className="w-full py-8 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 md:gap-6 lg:gap-x-16 xl:gap-x-24 md:max-w-[1368px] max-w-7xl mx-auto px-4 sm:px-6">
          {englishContent.flightOptionsData
            .slice(0, visibleCards)
            .map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  className={`w-full max-w-sm sm:max-w-none sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[440px] min-h-[230px] flex flex-col items-center p-4 md:p-5 ${whiteBG} border border-gray-300 rounded-xl space-y-3 transition-all duration-300 hover:shadow-lg`}
                >
                  <IconComponent
                    className={`${accentText} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12`}
                  />
                  <h3
                    className={`${darkBlackText} text-base sm:text-lg font-bold text-center`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`${textLightGray} text-center text-xs sm:text-sm md:text-base`}
                  >
                    {option.description}
                  </p>
                </div>
              );
            })}
        </div>

        {visibleCards < englishContent.flightOptionsData.length && (
          <button
            type="button"
            onClick={() =>
              setVisibleCards(englishContent.flightOptionsData.length)
            }
            className={`mt-4 px-6 py-2 rounded-lg ${accentText} border border-[#FF621F] hover:bg-[#FF621F] hover:text-white transition-colors`}
          >
            {englishContent.viewAllButton}
          </button>
        )}

        {visibleCards === englishContent.flightOptionsData.length &&
          (isMobile || isTablet) && (
            <button
              type="button"
              onClick={() => {
                if (isMobile) {
                  setVisibleCards(3);
                } else if (isTablet) {
                  setVisibleCards(4);
                }
              }}
              className={`mt-4 px-6 py-2 rounded-lg ${accentText} border border-[#FF621F] hover:bg-[#FF621F] hover:text-white transition-colors`}
            >
              {englishContent.showLessButton}
            </button>
          )}
      </div>
    </div>
  );
};

export default FlightOptions;
