import React, { useState } from "react";
import UAEImg from "../../assets/images/UAEImage.svg";
import Thailand from "../../assets/images/Thailand.svg";
import TravelersModal from "../Modal/TravelersModal";
import HeroSection from "../FlightSearch/HeroSection";
import FlightSearchForm from "../FlightSearch/FlightSearchForm";
import FeatureCards from "../FlightSearch/FeatureCards";
import TopDealsSection from "../FlightSearch/TopDealsSection";
import ExploreDestinationsSection from "../FlightSearch/ExploreDestinationsSection";
// import { FlightSearchProvider } from "../../contexts/FlightSearchContext";
import FAQ from "../FlightSearch/FAQ";
import { FlightSearchProvider } from "../../contexts/FlightSearchContext";
import FlightOptions from "../FlightSearch/FlightOptions";

const accentText = "text-[#FF621F]";
const accentBG = "bg-[#FF621F]";
const whiteText = "text-[#FFFFFF]";
const heroCardBG = "bg-[#F2F2F2]";
const onSelectBG = "bg-[#040A53]";
const whiteBG = "bg-[#ffffff] ";
const textLightGray = "text-[#808080]";

// Dynamic data structures
const featureCards = [
  {
    id: 1,
    icon: (
      <svg
        className="w-5 h-5 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Compare 1,000+ providers",
    description: "We search hundreds of sites so you don't have to",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-5 h-5 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "No hidden fees",
    description: "The price you see is what you pay",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-5 h-5 text-yellow-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Find the cheapest month",
    description: "Use our flexible date tools to save more",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-5 h-5 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Set Price Alerts",
    description: "Get notified when fares change",
    bgColor: "bg-blue-100",
  },
];

const topDeals = [
  {
    id: 1,
    image: UAEImg,
    destination: "Dubai",
    country: "UAE",
    price: "₹12,999",
    tag: "Cheapest",
    description: "Cheapest in March",
  },
  {
    id: 2,
    image: UAEImg,
    destination: "Singapore",
    country: "Singapore",
    price: "₹18,999",
    tag: "Best",
    description: "Cheapest in March",
  },
  {
    id: 3,
    image: UAEImg,
    destination: "Bangkok",
    country: "Thailand",
    price: "₹15,999",
    tag: "Fastest",
    description: "Cheapest in March",
  },
  {
    id: 4,
    image: UAEImg,
    destination: "London",
    country: "UK",
    price: "₹45,999",
    tag: "Cheapest",
    description: "Cheapest in March",
  },
];

const exploreDestinations = [
  { id: 1, image: Thailand, name: "Thailand", price: "from ₹15,999" },
  { id: 2, image: Thailand, name: "UAE", price: "from ₹12,999" },
  { id: 3, image: Thailand, name: "Singapore", price: "from ₹18,999" },
  { id: 4, image: Thailand, name: "UK", price: "from ₹45,999" },
  { id: 5, image: Thailand, name: "Japan", price: "from ₹38,999" },
  { id: 6, image: Thailand, name: "USA", price: "from ₹65,999" },
];

const filterOptions = [
  "Weekend trips",
  "Direct only",
  "Beach",
  "Visa-easy",
  "Family",
];

const FlightHome = () => {
  const [selectView, onSelectView] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeTab, setActiveTab] = useState("flights");

  const cities = [
    "Mumbai (BOM)",
    "Delhi (DEL)",
    "Bangalore (BLR)",
    "Dubai (DXB)",
    "London (LHR)",
    "New York (JFK)",
    "Singapore (SIN)",
    "Tokyo (NRT)",
  ];

  const toggleFilter = (filter) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  return (
    <FlightSearchProvider>
      <div className="relative">
        {/* Modal Overlay */}
        <TravelersModal />

        {/* Hero Section with Search */}
        <HeroSection
          whiteText={whiteText}
          accentText={accentText}
          heroCardBG={heroCardBG}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <FlightSearchForm cities={cities} />
        </HeroSection>

        {/* Feature Cards Section */}
        {/* <FeatureCards featureCards={featureCards} /> */}

        {/* Top Deals Section */}
        <TopDealsSection
          topDeals={topDeals}
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          toggleFilter={toggleFilter}
          accentBG={accentBG}
          whiteText={whiteText}
          textLightGray={textLightGray}
          accentText={accentText}
        />

        {/* Explore Destinations Section */}
        {/* <ExploreDestinationsSection
          exploreDestinations={exploreDestinations}
          accentText={accentText}
        /> */}

        <FlightOptions />
        <FAQ />
      </div>
    </FlightSearchProvider>
  );
};

export default FlightHome;
