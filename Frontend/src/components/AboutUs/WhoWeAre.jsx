import React from "react";
import img1 from "../../assets/aboutImages/img1.svg";
import img2 from "../../assets/aboutImages/img2.svg";
import img3 from "../../assets/aboutImages/img3.svg";
import img4 from "../../assets/aboutImages/img4.svg";
import img5 from "../../assets/aboutImages/img5.svg";

const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-white";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";

const WhoWeAre = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-20 lg:py-35 px-4 sm:px-8 lg:px-15">
        <div className="flex flex-col max-w-full lg:max-w-2/4 gap-4 lg:gap-6 mb-8 lg:mb-0 lg:mr-10 xl:mr-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left">
            Who We Are
          </h1>
          <p className={`text-left text-sm sm:text-base ${textDarkGray}`}>
            When we started in 2024, we had a dream to make travel easier for
            everybody. At that time, almost all the websites were confusing.
            They showed options in a difficult way which made travel planning a
            rocket science. Instead of visiting multiple messy websites, we
            created one such a simple and easy to use platform where you can
            access all the options of your choice at one place.
          </p>
          <p className={`text-left text-sm sm:text-base ${textDarkGray}`}>
            Now that small idea has turned worldwide. More than 5 million people
            use our online travel booking website every month. They visit our
            website to compare hotels, flights, and rental cars with a simple
            search. This made us an online trusted global travel service
            platform worldwide.
          </p>
          <p className={`text-left text-sm sm:text-base ${textDarkGray}`}>
            We always prioritize transparency and clarity. It means there is no
            hidden cost or biased results. Firstly, we research thousands of
            prices and come up with the best deals of your choice. We are here
            for more than a price comparison. We aim to make travel planning and
            booking hassle-free. We also connect you with reliable partners not
            only for simple but also for safe bookings.
          </p>
          <p className={`text-left text-sm sm:text-base ${textDarkGray}`}>
            Travel should not feel stressful. It should be simple, clear, and
            easy. We are always trying to make your travel experience better.
            From your initial search to your final bookings, we are with you.
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <div className="mb-4 lg:mb-0">
            <img src={img1} className="rounded-xl w-full h-fit" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 mt-4 lg:mt-5">
            <img src={img2} className="rounded-xl w-full h-fit" />
            <img src={img3} className="rounded-xl w-full h-fit" />
            <img src={img2} className="rounded-xl w-full h-fit" />
            <img src={img3} className="rounded-xl w-full h-fit" />
            {/* <img src={img4} className="rounded-xl w-full h-full" />
                    <img src={img5} className="rounded-xl w-full h-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
