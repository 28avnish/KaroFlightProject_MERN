import React from 'react';
import { LuUsers, LuPhone, LuMail, LuCalendar, LuStar } from 'react-icons/lu';

const customerData = [
  {
    id: "C001",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.k@email.com",
    country: "India",
    booked: "Flight + Hotel",
    totalBookings: 12,
    reviews: 4.8,
    lastBooking: "2024-09-15"
  },
  {
    id: "C002",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2fd?w=40&h=40&fit=crop&crop=face",
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya.sharma@email.com",
    country: "India",
    booked: "Flight",
    totalBookings: 8,
    reviews: 4.6,
    lastBooking: "2024-09-12"
  },
  {
    id: "C003",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    name: "Michael Johnson",
    phone: "+1 555 123 4567",
    email: "m.johnson@email.com",
    country: "USA",
    booked: "Hotel",
    totalBookings: 5,
    reviews: 4.9,
    lastBooking: "2024-09-10"
  },
  {
    id: "C004",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    name: "Sarah Williams",
    phone: "+44 20 7946 0958",
    email: "sarah.w@email.com",
    country: "UK",
    booked: "Flight + Hotel",
    totalBookings: 15,
    reviews: 4.7,
    lastBooking: "2024-09-08"
  },
  {
    id: "C005",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    name: "David Chen",
    phone: "+65 9123 4567",
    email: "david.chen@email.com",
    country: "Singapore",
    booked: "Flight",
    totalBookings: 7,
    reviews: 4.5,
    lastBooking: "2024-09-05"
  }
];

const CustomerTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <LuUsers size={20} />
          Customer Details
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Booking</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Bookings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customerData.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={customer.image} alt={customer.name} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div className="flex items-center mb-1">
                      <LuPhone size={12} className="mr-1" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center">
                      <LuMail size={12} className="mr-1" />
                      {customer.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.country}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{customer.booked}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <LuCalendar size={10} className="mr-1" />
                    {customer.lastBooking}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {customer.totalBookings} bookings
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm">
                    <LuStar size={14} className="text-yellow-400 mr-1" fill="currentColor" />
                    {customer.reviews}
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

export default CustomerTable;