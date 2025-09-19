import React, { useState } from 'react';
import { FaHotel, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaStar, FaBed, FaParking, FaWifi, FaSwimmingPool, FaUtensils, FaDumbbell, FaPaw, FaImage, FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import { MdDescription, MdMeetingRoom, MdFamilyRestroom } from 'react-icons/md';

const AddHotelPage = () => {
  const [hotelData, setHotelData] = useState({
    basicInfo: {
      name: '',
      description: '',
      starRating: '',
      category: '',
    },
    location: {
      address: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      latitude: '',
      longitude: '',
    },
    contact: {
      phone: '',
      email: '',
      website: '',
    },
    amenities: {
      parking: false,
      wifi: false,
      pool: false,
      gym: false,
      restaurant: false,
      petFriendly: false,
      familyRooms: false,
    },
    roomInfo: {
      totalRooms: '',
      roomTypes: [{ type: '', price: '', quantity: '' }],
    },
    media: {
      images: [],
    },
    policies: {
      checkIn: '',
      checkOut: '',
      cancellation: '',
      paymentMethods: [],
    }
  });

  const handleInputChange = (section, field, value) => {
    setHotelData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleAmenityChange = (amenity) => {
    setHotelData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  const addRoomType = () => {
    setHotelData(prev => ({
      ...prev,
      roomInfo: {
        ...prev.roomInfo,
        roomTypes: [...prev.roomInfo.roomTypes, { type: '', price: '', quantity: '' }]
      }
    }));
  };

  const removeRoomType = (index) => {
    setHotelData(prev => ({
      ...prev,
      roomInfo: {
        ...prev.roomInfo,
        roomTypes: prev.roomInfo.roomTypes.filter((_, i) => i !== index)
      }
    }));
  };

  const handleRoomTypeChange = (index, field, value) => {
    const updatedRoomTypes = [...hotelData.roomInfo.roomTypes];
    updatedRoomTypes[index][field] = value;
    
    setHotelData(prev => ({
      ...prev,
      roomInfo: {
        ...prev.roomInfo,
        roomTypes: updatedRoomTypes
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Hotel Data:', hotelData);
    alert('Hotel information submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 px-6 py-4 flex items-center">
          <FaHotel className="text-white text-2xl mr-2" />
          <h1 className="text-white text-2xl font-bold">Add New Hotel</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-6">
          {/* Basic Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaHotel className="mr-2 text-blue-500" /> Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.basicInfo.name}
                  onChange={(e) => handleInputChange('basicInfo', 'name', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Star Rating</label>
                <div className="flex items-center">
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={hotelData.basicInfo.starRating}
                    onChange={(e) => handleInputChange('basicInfo', 'starRating', e.target.value)}
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                  <FaStar className="ml-2 text-yellow-500" />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <div className="flex">
                  <textarea
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={hotelData.basicInfo.description}
                    onChange={(e) => handleInputChange('basicInfo', 'description', e.target.value)}
                  ></textarea>
                  <MdDescription className="ml-2 text-gray-500 text-xl mt-2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.basicInfo.category}
                  onChange={(e) => handleInputChange('basicInfo', 'category', e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="budget">Budget</option>
                  <option value="mid-range">Mid-Range</option>
                  <option value="luxury">Luxury</option>
                  <option value="boutique">Boutique</option>
                  <option value="resort">Resort</option>
                  <option value="business">Business</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Rooms</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={hotelData.roomInfo.totalRooms}
                    onChange={(e) => handleInputChange('roomInfo', 'totalRooms', e.target.value)}
                  />
                  <FaBed className="ml-2 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" /> Location Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.location.address}
                  onChange={(e) => handleInputChange('location', 'address', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.location.city}
                  onChange={(e) => handleInputChange('location', 'city', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.location.state}
                  onChange={(e) => handleInputChange('location', 'state', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.location.country}
                  onChange={(e) => handleInputChange('location', 'country', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.location.zipCode}
                  onChange={(e) => handleInputChange('location', 'zipCode', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaPhone className="mr-2 text-blue-500" /> Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaPhone className="mr-1 text-gray-500" /> Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.contact.phone}
                  onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaEnvelope className="mr-1 text-gray-500" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.contact.email}
                  onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaGlobe className="mr-1 text-gray-500" /> Website
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.contact.website}
                  onChange={(e) => handleInputChange('contact', 'website', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Amenities Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="parking"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.parking}
                  onChange={() => handleAmenityChange('parking')}
                />
                <label htmlFor="parking" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaParking className="mr-1" /> Parking
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="wifi"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.wifi}
                  onChange={() => handleAmenityChange('wifi')}
                />
                <label htmlFor="wifi" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaWifi className="mr-1" /> Free WiFi
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pool"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.pool}
                  onChange={() => handleAmenityChange('pool')}
                />
                <label htmlFor="pool" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaSwimmingPool className="mr-1" /> Swimming Pool
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gym"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.gym}
                  onChange={() => handleAmenityChange('gym')}
                />
                <label htmlFor="gym" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaDumbbell className="mr-1" /> Gym
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="restaurant"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.restaurant}
                  onChange={() => handleAmenityChange('restaurant')}
                />
                <label htmlFor="restaurant" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaUtensils className="mr-1" /> Restaurant
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="petFriendly"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.petFriendly}
                  onChange={() => handleAmenityChange('petFriendly')}
                />
                <label htmlFor="petFriendly" className="ml-2  text-sm text-gray-700 flex items-center">
                  <FaPaw className="mr-1" /> Pet Friendly
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="familyRooms"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={hotelData.amenities.familyRooms}
                  onChange={() => handleAmenityChange('familyRooms')}
                />
                <label htmlFor="familyRooms" className="ml-2  text-sm text-gray-700 flex items-center">
                  <MdFamilyRestroom className="mr-1" /> Family Rooms
                </label>
              </div>
            </div>
          </div>
          
          {/* Room Types Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdMeetingRoom className="mr-2 text-blue-500" /> Room Types
            </h2>
            
            {hotelData.roomInfo.roomTypes.map((room, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border border-gray-200 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={room.type}
                    onChange={(e) => handleRoomTypeChange(index, 'type', e.target.value)}
                    placeholder="e.g., Standard Double"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price per Night</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="0"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={room.price}
                      onChange={(e) => handleRoomTypeChange(index, 'price', e.target.value)}
                    />
                    <FaMoneyBillWave className="ml-2 text-gray-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={room.quantity}
                    onChange={(e) => handleRoomTypeChange(index, 'quantity', e.target.value)}
                  />
                </div>
                
                <div className="flex items-end">
                  {hotelData.roomInfo.roomTypes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRoomType(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addRoomType}
              className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              + Add Another Room Type
            </button>
          </div>
          
          {/* Policies Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Policies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Time</label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.policies.checkIn}
                  onChange={(e) => handleInputChange('policies', 'checkIn', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Time</label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.policies.checkOut}
                  onChange={(e) => handleInputChange('policies', 'checkOut', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation Policy</label>
                <textarea
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotelData.policies.cancellation}
                  onChange={(e) => handleInputChange('policies', 'cancellation', e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotelPage;