import React from "react";
import {
  FaPlane,
  FaHotel,
  FaUser,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";

const bookings = [
  {
    id: 1,
    customer: "John Doe",
    type: "Flight",
    details: "New York (JFK) → Los Angeles (LAX)",
    date: "2025-09-18",
    amount: 299,
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Sarah Lee",
    type: "Hotel",
    details: "Grand Plaza Hotel - 3 Nights",
    date: "2025-09-20",
    amount: 450,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Michael Smith",
    type: "Flight",
    details: "Chicago (ORD) → Miami (MIA)",
    date: "2025-09-22",
    amount: 199,
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Emma Wilson",
    type: "Hotel",
    details: "Oceanview Resort - 5 Nights",
    date: "2025-09-25",
    amount: 799,
    status: "Confirmed",
  },
];

export default function AllBookings() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">All Bookings</h1>
        <p className="text-gray-600 mt-3">
          View all customer hotel and flight bookings in one place.
        </p>
      </div>

      {/* Table-Like Flex Layout */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-7 gap-4 bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700">
          <span>#</span>
          <span>Customer</span>
          <span>Booking Type</span>
          <span>Details</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {/* Data Rows */}
        {bookings.map((booking, index) => (
          <div
            key={booking.id}
            className="grid grid-cols-7 gap-4 items-center px-6 py-4 border-b hover:bg-gray-50 transition-colors"
          >
            {/* Index */}
            <span className="text-gray-700">{index + 1}</span>

            {/* Customer */}
            <span className="flex items-center gap-2 font-medium text-gray-800">
              <FaUser className="text-blue-600" />
              {booking.customer}
            </span>

            {/* Booking Type */}
            <span className="flex items-center gap-2">
              {booking.type === "Flight" ? (
                <FaPlane className="text-indigo-600" />
              ) : (
                <FaHotel className="text-green-600" />
              )}
              {booking.type}
            </span>

            {/* Details */}
            <span className="text-gray-600">{booking.details}</span>

            {/* Date */}
            <span className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt className="text-orange-500" />
              {booking.date}
            </span>

            {/* Amount */}
            <span className="flex items-center gap-1 font-semibold text-gray-900">
              <FaDollarSign className="text-green-500" />
              {booking.amount}
            </span>

            {/* Status */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium text-center
                ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
