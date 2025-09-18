import React, { useState } from "react";
import {
  FaStar,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaSnowflake,
} from "react-icons/fa";
import DiscountModal from "../Modal/DiscountModal";

const HotelLists = () => {
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "NYC",
      rating: 4.5,
      price: 199,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      amenities: ["wifi", "pool", "restaurant", "ac"],
      description: "Luxury hotel in Manhattan",
      reviews: 1247,
    },
    {
      id: 2,
      name: "Oceanview Resort",
      location: "Miami Beach",
      rating: 4.8,
      price: 299,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      amenities: ["wifi", "pool", "parking", "ac", "restaurant"],
      description: "Beachfront resort with stunning ocean views",
      reviews: 892,
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen",
      rating: 4.2,
      price: 149,
      image:
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=400",
      amenities: ["wifi", "parking", "ac"],
      description: "Cozy mountain hotel",
      reviews: 567,
    },
    {
      id: 4,
      name: "Urban Boutique Hotel",
      location: "San Francisco",
      rating: 4.6,
      price: 229,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      amenities: ["wifi", "restaurant", "ac"],
      description: "Modern boutique hotel",
      reviews: 1034,
    },
  ];

  const amenityIcons = {
    wifi: <FaWifi className="text-blue-600" />,
    pool: <FaSwimmingPool className="text-blue-500" />,
    parking: <FaParking className="text-green-600" />,
    restaurant: <FaUtensils className="text-red-600" />,
    ac: <FaSnowflake className="text-blue-400" />,
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedHotels = [...hotels].sort((a, b) => {
    const modifier = sortOrder === "asc" ? 1 : -1;
    if (sortBy === "price") return (a.price - b.price) * modifier;
    if (sortBy === "rating") return (a.rating - b.rating) * modifier;
    if (sortBy === "name") return a.name.localeCompare(b.name) * modifier;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-semibold">{hotel.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {hotel.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${hotel.price}
                    </div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                  <button
                    onClick={() => setSelectedHotel(hotel)} 
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Add Discount
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Discount Modal */}
        <DiscountModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      </div>
    </div>
  );
};

export default HotelLists;
