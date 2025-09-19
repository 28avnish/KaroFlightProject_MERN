import React from 'react';
import { LuHotel, LuMapPin, LuStar } from 'react-icons/lu';
import { MdCheckCircle, MdOutlineCancel, MdAddAlert } from 'react-icons/md';

const hotelData = [
  {
    id: "H001",
    name: "Taj Palace Mumbai",
    location: "Mumbai",
    rooms: 350,
    occupied: 320,
    status: "Active",
    revenue: "₹4,50,000",
    rating: 4.8
  },
  {
    id: "H002",
    name: "Oberoi Delhi",
    location: "New Delhi",
    rooms: 280,
    occupied: 245,
    status: "Active",
    revenue: "₹3,80,000",
    rating: 4.9
  },
  {
    id: "H003",
    name: "Leela Bangalore",
    location: "Bangalore",
    rooms: 200,
    occupied: 0,
    status: "Closed",
    revenue: "₹0",
    rating: 4.6
  },
  {
    id: "H004",
    name: "ITC Grand Chennai",
    location: "Chennai",
    rooms: 300,
    occupied: 180,
    status: "Active",
    revenue: "₹2,70,000",
    rating: 4.7
  },
  {
    id: "H005",
    name: "Hyatt Pune",
    location: "Pune",
    rooms: 150,
    occupied: 145,
    status: "Active",
    revenue: "₹1,95,000",
    rating: 4.5
  }
];

const HotelTable = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'closed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <MdCheckCircle size={16} />;
      case 'closed':
        return <MdOutlineCancel size={16} />;
      default:
        return <MdAddAlert size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <LuHotel size={20} />
          Hotel Details
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotelData.map((hotel) => (
              <tr key={hotel.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{hotel.name}</div>
                    <div className="text-sm text-gray-500">{hotel.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <LuMapPin size={14} className="mr-1" />
                    {hotel.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {hotel.occupied}/{hotel.rooms}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(hotel.occupied / hotel.rooms) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(hotel.status)}`}>
                    {getStatusIcon(hotel.status)}
                    {hotel.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {hotel.revenue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm">
                    <LuStar size={14} className="text-yellow-400 mr-1" fill="currentColor" />
                    {hotel.rating}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelTable;