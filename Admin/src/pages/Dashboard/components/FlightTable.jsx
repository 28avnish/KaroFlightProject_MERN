import React from 'react';
import { LuPlane, LuClock } from 'react-icons/lu';
import { MdCheckCircle, MdOutlineCancel, MdAddAlert } from 'react-icons/md';

const flightData = [
  {
    id: "AI-101",
    airline: "Air India",
    route: "DEL → BOM",
    departure: "06:30",
    arrival: "08:45",
    status: "On Time",
    passengers: 145,
    delay: 0
  },
  {
    id: "6E-202",
    airline: "IndiGo",
    route: "BOM → BLR",
    departure: "09:15",
    arrival: "10:30",
    status: "Delayed",
    passengers: 180,
    delay: 25
  },
  {
    id: "SG-303",
    airline: "SpiceJet",
    route: "BLR → MAA",
    departure: "11:00",
    arrival: "12:15",
    status: "Cancelled",
    passengers: 0,
    delay: 0
  },
  {
    id: "UK-404",
    airline: "Vistara",
    route: "MAA → CCU",
    departure: "14:30",
    arrival: "16:45",
    status: "Boarding",
    passengers: 158,
    delay: 0
  },
  {
    id: "AI-505",
    airline: "Air India",
    route: "CCU → DEL",
    departure: "18:20",
    arrival: "20:35",
    status: "Delayed",
    passengers: 142,
    delay: 15
  }
];

const FlightTable = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'on time':
      case 'boarding':
        return 'text-green-600 bg-green-100';
      case 'delayed':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'on time':
      case 'boarding':
        return <MdCheckCircle size={16} />;
      case 'delayed':
        return <LuClock size={16} />;
      case 'cancelled':
        return <MdOutlineCancel size={16} />;
      default:
        return <MdAddAlert size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <LuPlane size={20} />
          Flight Details
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passengers</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delay</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {flightData.map((flight) => (
              <tr key={flight.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{flight.id}</div>
                    <div className="text-sm text-gray-500">{flight.airline}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{flight.route}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{flight.departure} → {flight.arrival}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(flight.status)}`}>
                    {getStatusIcon(flight.status)}
                    {flight.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{flight.passengers}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {flight.delay > 0 ? (
                    <span className="text-red-600">+{flight.delay}m</span>
                  ) : (
                    <span className="text-green-600">On Time</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightTable;