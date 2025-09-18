import React, { useState } from 'react';
import { FaHotel, FaPlane, FaUmbrellaBeach, FaPercent, FaClock, FaMapMarkerAlt, FaStar, FaUser, FaHeart, FaShare, FaShoppingCart, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdFamilyRestroom, MdLocalOffer, MdEventAvailable, MdEventBusy } from 'react-icons/md';

const OffersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Beach Paradise Getaway",
      description: "Enjoy 7 nights in a luxury beachfront resort with breakfast included",
      discount: "35% OFF",
      originalPrice: "$1,200",
      discountedPrice: "$780",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "hotel",
      duration: "7 Days",
      location: "Maldives",
      rating: 4.8,
      reviews: 1245,
      expiry: "2023-12-15",
      tags: ["All Inclusive", "Free Spa", "Airport Transfer"],
      active: true
    },
    {
      id: 2,
      title: "Early Bird Flight Deal",
      description: "Book your flight 60 days in advance and save big on international destinations",
      discount: "25% OFF",
      originalPrice: "$899",
      discountedPrice: "$674",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "flight",
      duration: "Various",
      location: "Multiple Destinations",
      rating: 4.5,
      reviews: 892,
      expiry: "2023-11-30",
      tags: ["International", "Multiple Airlines", "Flexible Dates"],
      active: false
    },
    {
      id: 3,
      title: "Family Vacation Package",
      description: "Special rates for families with kids. Children under 12 stay and eat free",
      discount: "40% OFF",
      originalPrice: "$2,400",
      discountedPrice: "$1,440",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "package",
      duration: "5 Days",
      location: "Orlando, Florida",
      rating: 4.9,
      reviews: 1567,
      expiry: "2023-12-20",
      tags: ["Kids Free", "Theme Park Tickets", "Family Activities"],
      active: true
    },
    {
      id: 4,
      title: "Last Minute Hotel Deal",
      description: "Spontaneous getaway? Book within 48 hours of your stay for incredible savings",
      discount: "45% OFF",
      originalPrice: "$300",
      discountedPrice: "$165",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "hotel",
      duration: "2 Days",
      location: "Various Cities",
      rating: 4.3,
      reviews: 765,
      expiry: "2023-12-31",
      tags: ["Last Minute", "Free Cancellation", "24/7 Support"],
      active: true
    },
    {
      id: 5,
      title: "Business Class Upgrade",
      description: "Special offer on business class flights to European destinations",
      discount: "30% OFF",
      originalPrice: "$3,500",
      discountedPrice: "$2,450",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "flight",
      duration: "Various",
      location: "Europe",
      rating: 4.7,
      reviews: 543,
      expiry: "2023-12-10",
      tags: ["Business Class", "Lounge Access", "Extra Baggage"],
      active: false
    },
    {
      id: 6,
      title: "Luxury All-Inclusive Resort",
      description: "Experience ultimate luxury with our all-inclusive package at a 5-star resort",
      discount: "40% OFF",
      originalPrice: "$2,800",
      discountedPrice: "$1,680",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "hotel",
      duration: "6 Days",
      location: "Bali, Indonesia",
      rating: 4.9,
      reviews: 2310,
      expiry: "2024-01-15",
      tags: ["All Inclusive", "Spa Credit", "Private Pool"],
      active: true
    },
    {
      id: 7,
      title: "Weekend City Break",
      description: "Explore exciting cities with our specially curated weekend packages",
      discount: "35% OFF",
      originalPrice: "$650",
      discountedPrice: "$422",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "package",
      duration: "3 Days",
      location: "New York, Paris, Tokyo",
      rating: 4.6,
      reviews: 987,
      expiry: "2023-12-25",
      tags: ["City Tour", "Museum Passes", "Dining Credit"],
      active: false
    },
    {
      id: 8,
      title: "Honeymoon Special",
      description: "Celebrate your love with our romantic honeymoon package with special amenities",
      discount: "30% OFF",
      originalPrice: "$3,200",
      discountedPrice: "$2,240",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      category: "package",
      duration: "8 Days",
      location: "Santorini, Greece",
      rating: 4.9,
      reviews: 1345,
      expiry: "2024-02-14",
      tags: ["Romantic Dinner", "Spa Treatment", "Private Excursion"],
      active: true
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Offers', icon: <MdLocalOffer className="mr-2" /> },
    { id: 'hotel', name: 'Hotels', icon: <FaHotel className="mr-2" /> },
    { id: 'flight', name: 'Flights', icon: <FaPlane className="mr-2" /> },
    { id: 'package', name: 'Packages', icon: <FaUmbrellaBeach className="mr-2" /> }
  ];

  // Toggle offer active status
  const toggleOfferStatus = (id) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, active: !offer.active } : offer
    ));
  };

  const filteredOffers = selectedCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sortBy === 'popularity') return b.reviews - a.reviews;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'discount') {
      const discountA = parseInt(a.discount);
      const discountB = parseInt(b.discount);
      return discountB - discountA;
    }
    if (sortBy === 'status') return a.active === b.active ? 0 : a.active ? -1 : 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Manage Special Offers & Deals</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Activate or deactivate promotional offers for hotels, flights, and vacation packages.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {sortedOffers.length} offers available • 
            <span className="ml-2">
              Active: {offers.filter(o => o.active).length} • 
              Inactive: {offers.filter(o => !o.active).length}
            </span>
          </p>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="discount">Discount</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedOffers.map(offer => (
            <div key={offer.id} className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${!offer.active ? 'opacity-70' : ''}`}>
              {/* Image with discount badge */}
              <div className="relative">
                <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-red-500 text-white py-1 px-3 rounded-full font-bold flex items-center">
                  <FaPercent className="mr-1" /> {offer.discount}
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaShare className="text-gray-600" />
                  </button>
                </div>
                {/* Status indicator */}
                <div className={`absolute bottom-4 left-4 py-1 px-3 rounded-full text-sm font-medium ${offer.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {offer.active ? 'Active' : 'Inactive'}
                </div>
              </div>

              {/* Offer details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{offer.title}</h3>
                  <div className="flex items-center bg-blue-100 text-blue-800 py-1 px-2 rounded-md text-sm">
                    <FaStar className="mr-1" /> {offer.rating}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{offer.description}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaMapMarkerAlt className="mr-1" />
                  <span className="mr-4">{offer.location}</span>
                  <FaClock className="mr-1" />
                  <span>{offer.duration}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {offer.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and status section */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-gray-500 line-through">{offer.originalPrice}</p>
                    <p className="text-2xl font-bold text-gray-900">{offer.discountedPrice}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <button 
                    onClick={() => toggleOfferStatus(offer.id)}
                    className={`flex items-center justify-center py-2 px-4 rounded-lg font-medium ${offer.active ? 'bg-red-100 hover:bg-red-200 text-red-700' : 'bg-green-100 hover:bg-green-200 text-green-700'}`}
                  >
                    {offer.active ? (
                      <>
                        <FaToggleOff className="mr-2 text-xl" />
                        Deactivate
                      </>
                    ) : (
                      <>
                        <FaToggleOn className="mr-2 text-xl" />
                        Activate
                      </>
                    )}
                  </button>
                </div>

                {/* Expiry */}
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <MdEventAvailable className="mr-1" />
                  <span>Expires: {offer.expiry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Offers Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700">{offers.length}</div>
              <div className="text-blue-600">Total Offers</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700">{offers.filter(o => o.active).length}</div>
              <div className="text-green-600">Active Offers</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-700">{offers.filter(o => !o.active).length}</div>
              <div className="text-red-600">Inactive Offers</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-700">{offers.filter(o => new Date(o.expiry) > new Date()).length}</div>
              <div className="text-purple-600">Valid Offers</div>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bulk Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              Activate All
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              Deactivate All
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              <FaShoppingCart className="mr-2" />
              Export Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;