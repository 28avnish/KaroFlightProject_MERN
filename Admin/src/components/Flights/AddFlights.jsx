import React, { useState } from "react";
import {
  FaPlane,
  FaPlus,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaPaperPlane,
} from "react-icons/fa";

const AddFlight = () => {
  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    departure: {
      airport: "",
      city: "",
      time: "",
      date: "",
    },
    arrival: {
      airport: "",
      city: "",
      time: "",
      date: "",
    },
    duration: "",
    price: "",
    stops: 0,
    aircraft: "",
    capacity: "",
    status: "scheduled",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.airline) newErrors.airline = "Airline is required";
    if (!formData.flightNumber)
      newErrors.flightNumber = "Flight number is required";
    if (!formData.departure.airport)
      newErrors.departureAirport = "Departure airport is required";
    if (!formData.arrival.airport)
      newErrors.arrivalAirport = "Arrival airport is required";
    if (!formData.departure.time)
      newErrors.departureTime = "Departure time is required";
    if (!formData.arrival.time)
      newErrors.arrivalTime = "Arrival time is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Valid price is required";
    if (!formData.aircraft) newErrors.aircraft = "Aircraft type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Flight data submitted:", formData);
      alert("Flight added successfully!");

      // Reset form
      setFormData({
        airline: "",
        flightNumber: "",
        departure: {
          airport: "",
          city: "",
          time: "",
          date: "",
        },
        arrival: {
          airport: "",
          city: "",
          time: "",
          date: "",
        },
        duration: "",
        price: "",
        stops: 0,
        aircraft: "",
        capacity: "",
        status: "scheduled",
      });
    } catch (error) {
      console.error("Error adding flight:", error);
      alert("Error adding flight. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const airlines = [
    "Delta Airlines",
    "American Airlines",
    "United Airlines",
    "JetBlue",
    "Southwest",
    "Alaska Airlines",
    "Frontier",
    "Spirit",
  ];

  const aircraftTypes = [
    "Boeing 737",
    "Boeing 787",
    "Airbus A320",
    "Airbus A321",
    "Airbus A330",
    "Boeing 777",
    "Embraer E190",
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center flex gap-5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaPlus className="text-2xl text-blue-600" />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="text-3xl font-bold text-gray-900">Add New Flight</h1>
            <p className="text-gray-600 mt-2">
              Fill in the details to add a new flight to the system
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6"
        >
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaPlane className="mr-2 text-blue-600" />
              Flight Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Airline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airline *
                </label>
                <select
                  name="airline"
                  value={formData.airline}
                  onChange={handleInputChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.airline ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Airline</option>
                  {airlines.map((airline) => (
                    <option key={airline} value={airline}>
                      {airline}
                    </option>
                  ))}
                </select>
                {errors.airline && (
                  <p className="text-red-500 text-sm mt-1">{errors.airline}</p>
                )}
              </div>

              {/* Flight Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flight Number *
                </label>
                <input
                  type="text"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., DL 1234"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.flightNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.flightNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.flightNumber}
                  </p>
                )}
              </div>

              {/* Aircraft */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aircraft Type *
                </label>
                <select
                  name="aircraft"
                  value={formData.aircraft}
                  onChange={handleInputChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.aircraft ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Aircraft</option>
                  {aircraftTypes.map((aircraft) => (
                    <option key={aircraft} value={aircraft}>
                      {aircraft}
                    </option>
                  ))}
                </select>
                {errors.aircraft && (
                  <p className="text-red-500 text-sm mt-1">{errors.aircraft}</p>
                )}
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaUsers className="inline mr-1 text-gray-500" />
                  Passenger Capacity
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  placeholder="e.g., 180"
                  min="1"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Departure Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              Departure Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airport Code *
                </label>
                <input
                  type="text"
                  name="departure.airport"
                  value={formData.departure.airport}
                  onChange={handleInputChange}
                  placeholder="e.g., JFK"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.departureAirport
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.departureAirport && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.departureAirport}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="departure.city"
                  value={formData.departure.city}
                  onChange={handleInputChange}
                  placeholder="e.g., New York"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-1 text-gray-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="departure.date"
                  value={formData.departure.date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline mr-1 text-gray-500" />
                  Time *
                </label>
                <input
                  type="time"
                  name="departure.time"
                  value={formData.departure.time}
                  onChange={handleInputChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.departureTime ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.departureTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.departureTime}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Arrival Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-600" />
              Arrival Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airport Code *
                </label>
                <input
                  type="text"
                  name="arrival.airport"
                  value={formData.arrival.airport}
                  onChange={handleInputChange}
                  placeholder="e.g., LAX"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.arrivalAirport ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.arrivalAirport && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.arrivalAirport}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="arrival.city"
                  value={formData.arrival.city}
                  onChange={handleInputChange}
                  placeholder="e.g., Los Angeles"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-1 text-gray-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="arrival.date"
                  value={formData.arrival.date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline mr-1 text-gray-500" />
                  Time *
                </label>
                <input
                  type="time"
                  name="arrival.time"
                  value={formData.arrival.time}
                  onChange={handleInputChange}
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.arrivalTime ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.arrivalTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.arrivalTime}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaClock className="mr-2 text-purple-600" />
              Flight Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration *
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 5h 30m"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.duration ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.duration && (
                  <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaDollarSign className="inline mr-1 text-gray-500" />
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g., 299"
                  min="0"
                  step="0.01"
                  className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Stops
                </label>
                <select
                  name="stops"
                  value={formData.stops}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>Non-stop</option>
                  <option value={1}>1 stop</option>
                  <option value={2}>2 stops</option>
                  <option value={3}>3+ stops</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Adding Flight...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Add Flight
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlight;
