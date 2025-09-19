import React, { useState } from 'react';
import {
  FaPlane,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import AddDiscountModal from '../Modal/AddDiscountModal';

const FlightsList = () => {
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedFlight, setSelectedFlight] = useState(null);

  
  const flights = [
    {
      id: 1,
      airline: 'Delta Airlines',
      flightNumber: 'DL 1234',
      departure: { city: 'New York', time: '08:00 AM', code: 'JFK' },
      arrival: { city: 'Los Angeles', time: '11:30 AM', code: 'LAX' },
      duration: '5h 30m',
      price: 299,
      stops: 0,
      aircraft: 'Boeing 737',
    },
    {
      id: 2,
      airline: 'American Airlines',
      flightNumber: 'AA 5678',
      departure: { city: 'New York', time: '10:15 AM', code: 'JFK' },
      arrival: { city: 'Los Angeles', time: '02:45 PM', code: 'LAX' },
      duration: '6h 30m',
      price: 249,
      stops: 1,
      aircraft: 'Airbus A320',
    },
    {
      id: 3,
      airline: 'United Airlines',
      flightNumber: 'UA 9012',
      departure: { city: 'New York', time: '07:30 AM', code: 'JFK' },
      arrival: { city: 'Los Angeles', time: '10:45 AM', code: 'LAX' },
      duration: '5h 15m',
      price: 349,
      stops: 0,
      aircraft: 'Boeing 787',
    },
    {
      id: 4,
      airline: 'JetBlue',
      flightNumber: 'B6 3456',
      departure: { city: 'New York', time: '09:45 AM', code: 'JFK' },
      arrival: { city: 'Los Angeles', time: '01:15 PM', code: 'LAX' },
      duration: '5h 30m',
      price: 279,
      stops: 0,
      aircraft: 'Airbus A321',
    },
  ];

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const sortedFlights = [...flights].sort((a, b) => {
    const modifier = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'price') {
      return (a.price - b.price) * modifier;
    } else if (sortBy === 'duration') {
      return (parseInt(a.duration) - parseInt(b.duration)) * modifier;
    } else if (sortBy === 'departure') {
      return a.departure.time.localeCompare(b.departure.time) * modifier;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FaPlane className="mr-3 text-blue-600" />
            Available Flights
          </h1>
          <p className="text-gray-600 mt-2">New York (JFK) → Los Angeles (LAX)</p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                <FaFilter className="text-sm" />
                Filters
              </button>

              <div className="flex items-center gap-4">
                <span className="text-gray-700">Sort by:</span>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="price">Price</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure Time</option>
                </select>

                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">{sortedFlights.length} flights found</span>
            </div>
          </div>
        </div>

        {/* Flights List */}
        <div className="space-y-4">
          {sortedFlights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {/* Flight Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{flight.airline}</h3>
                    <p className="text-gray-600 text-sm">
                      {flight.flightNumber} • {flight.aircraft}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${flight.price}</div>
                    <p className="text-sm text-gray-600">Round trip per person</p>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  {/* Departure */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
                    <div className="text-gray-600">
                      {flight.departure.city} ({flight.departure.code})
                    </div>
                  </div>

                  {/* Flight Path */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                      <FaPlane className="text-blue-600 transform rotate-90" />
                      <span className="text-sm text-gray-600 mt-1">{flight.duration}</span>
                      <span className="text-xs text-gray-500">
                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                      </span>
                    </div>
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                  </div>

                  {/* Arrival */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
                    <div className="text-gray-600">
                      {flight.arrival.city} ({flight.arrival.code})
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-blue-600" />
                      {flight.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-green-600" />
                      {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </span>
                  </div>

                  {/* Add Discount button */}
                  <button
                    onClick={() => setSelectedFlight(flight)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-semibold"
                  >
                    Add Discount
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No flights found */}
        {sortedFlights.length === 0 && (
          <div className="text-center py-12">
            <FaSearch className="text-gray-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No flights found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      {/* Discount Modal */}
      {selectedFlight && (
        <AddDiscountModal
          flight={selectedFlight}
          onClose={() => setSelectedFlight(null)}
        />
      )}
    </div>
  );
};

export default FlightsList;
