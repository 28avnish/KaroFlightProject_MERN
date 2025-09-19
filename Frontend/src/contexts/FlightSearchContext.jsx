import React, { createContext, useContext, useState } from "react";

// Create the context
const FlightSearchContext = createContext();

// Custom hook to use the context
export const useFlightSearch = () => {
  const context = useContext(FlightSearchContext);
  if (!context) {
    throw new Error(
      "useFlightSearch must be used within a FlightSearchProvider"
    );
  }
  return context;
};

// Provider component
export const FlightSearchProvider = ({ children: childComponents }) => {
  // Trip details state
  const [tripType, setTripType] = useState("One-way");
  const [from, setFrom] = useState("Mumbai (BOM)");
  const [to, setTo] = useState("Dubai (DXB)");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Travelers state
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  // Options state
  const [flexibleDates, setFlexibleDates] = useState(false);
  const [nearbyAirportsTo, setNearbyAirportsTo] = useState(false);
  const [nearbyAirportsFrom, setNearbyAirportsFrom] = useState(false);
  const [directOnly, setDirectOnly] = useState(false);
  const [priceAlert, setPriceAlert] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  // UI state
  const [activeTab, setActiveTab] = useState("flights");
  const [activeFilter, setActiveFilter] = useState(null);

  // Cities data
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

  // Computed values
  const displayText = `${adults} Adult${
    adults !== 1 ? "s" : ""
  }, ${children} Child${children !== 1 ? "ren" : ""}`;

  // Modal functions
  const toggleModal = (event) => {
    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleApply = () => {
    setIsModalOpen(false);
    setTravelers(adults + children);
    console.log({
      adults,
      children,
      childAges,
      travelClass,
      directOnly,
    });
  };

  // Child management functions
  const updateChildAges = (index, age) => {
    const newChildAges = [...childAges];
    newChildAges[index] = age;
    setChildAges(newChildAges);
  };

  const addChild = () => {
    if (children < 6) {
      setChildren(children + 1);
      setChildAges([...childAges, ""]);
    }
  };

  const removeChild = () => {
    if (children > 0) {
      setChildren(children - 1);
      setChildAges(childAges.slice(0, -1));
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      travelers: adults + children,
      travelClass,
      flexibleDates,
      nearbyAirports: { to: nearbyAirportsTo, from: nearbyAirportsFrom },
      directOnly,
      priceAlert,
    });
  };

  // Filter management
  const toggleFilter = (filter) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  const value = {
    // Trip details
    tripType,
    setTripType,
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,

    // Travelers
    adults,
    setAdults,
    children,
    setChildren,
    childAges,
    setChildAges,
    travelers,
    setTravelers,
    travelClass,
    setTravelClass,
    displayText,

    // Options
    flexibleDates,
    setFlexibleDates,
    nearbyAirportsTo,
    setNearbyAirportsTo,
    nearbyAirportsFrom,
    setNearbyAirportsFrom,
    directOnly,
    setDirectOnly,
    priceAlert,
    setPriceAlert,

    // Modal
    isModalOpen,
    setIsModalOpen,
    modalPosition,
    setModalPosition,
    toggleModal,
    handleApply,

    // UI
    activeTab,
    setActiveTab,
    activeFilter,
    setActiveFilter,

    // Data
    cities,

    // Functions
    updateChildAges,
    addChild,
    removeChild,
    handleSubmit,
    toggleFilter,
  };

  return (
    <FlightSearchContext.Provider value={value}>
      {childComponents}
    </FlightSearchContext.Provider>
  );
};
