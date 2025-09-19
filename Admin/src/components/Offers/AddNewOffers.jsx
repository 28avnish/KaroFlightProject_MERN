import React, { useState } from 'react';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPercent, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMoneyBillWave,  FaImages, FaTag, FaUserFriends } from 'react-icons/fa';
import { MdTitle, MdDescription, MdLocalOffer, MdMeetingRoom } from 'react-icons/md';

const AddNewOffersPage = () => {
  const [offerType, setOfferType] = useState('hotel');
  const [formData, setFormData] = useState({
    // Common fields
    title: '',
    description: '',
    discount: '',
    originalPrice: '',
    discountedPrice: '',
    startDate: '',
    endDate: '',
    image: '',
    tags: [],
    
    // Hotel specific
    hotelName: '',
    location: '',
    roomType: '',
    duration: '',
    amenities: [],
    
    // Flight specific
    airline: '',
    departure: '',
    destination: '',
    flightClass: '',
    stops: '',
    
    // Package specific
    packageType: '',
    inclusions: [],
  });

  const [currentTag, setCurrentTag] = useState('');
  const [currentAmenity, setCurrentAmenity] = useState('');
  const [currentInclusion, setCurrentInclusion] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayField = (field, value) => {
    if (value.trim() !== '') {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], value.trim()]
      }));
      if (field === 'tags') setCurrentTag('');
      if (field === 'amenities') setCurrentAmenity('');
      if (field === 'inclusions') setCurrentInclusion('');
    }
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Offer Data:', formData);
    alert('Offer created successfully!');
  };

  const offerTypes = [
    { id: 'hotel', name: 'Hotel Offer', icon: <FaHotel className="mr-2" /> },
    { id: 'flight', name: 'Flight Offer', icon: <FaPlane className="mr-2" /> },
    { id: 'package', name: 'Vacation Package', icon: <FaUmbrellaBeach className="mr-2" /> },
  ];

  const amenitiesList = [
    'Free WiFi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Restaurant', 
    'Airport Transfer', 'Breakfast Included', 'Free Parking', 'Room Service'
  ];

  const flightClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-600 px-6 py-4 flex items-center">
          <MdLocalOffer className="text-white text-2xl mr-2" />
          <h1 className="text-white text-2xl font-bold">Create New Offer</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-6">
          {/* Offer Type Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Offer Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {offerTypes.map(type => (
                <div
                  key={type.id}
                  onClick={() => setOfferType(type.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${offerType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                >
                  <div className="flex items-center justify-center">
                    {type.icon}
                    <span className="font-medium">{type.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Fields */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MdTitle className="mr-1 text-gray-500" /> Offer Title
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Summer Beach Getaway"
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaPercent className="mr-1 text-gray-500" /> Discount (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.discount}
                  onChange={(e) => handleInputChange('discount', e.target.value)}
                  placeholder="e.g., 25"
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaMoneyBillWave className="mr-1 text-gray-500" /> Original Price
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.originalPrice}
                  onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                  placeholder="e.g., 500"
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaMoneyBillWave className="mr-1 text-gray-500" /> Discounted Price
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.discountedPrice}
                  onChange={(e) => handleInputChange('discountedPrice', e.target.value)}
                  placeholder="e.g., 375"
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaCalendarAlt className="mr-1 text-gray-500" /> Start Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
              </div>
              
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaCalendarAlt className="mr-1 text-gray-500" /> End Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MdDescription className="mr-1 text-gray-500" /> Description
                </label>
                <textarea
                  rows="3"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe the offer in detail..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FaImages className="mr-1 text-gray-500" /> Image URL
                </label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaTag className="mr-1 text-gray-500" /> Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                  {tag}
                  <button 
                    type="button"
                    onClick={() => removeArrayItem('tags', index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag (e.g., Summer Sale)"
              />
              <button
                type="button"
                onClick={() => handleArrayField('tags', currentTag)}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>

          {/* Type-Specific Fields */}
          {offerType === 'hotel' && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Hotel Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.hotelName}
                    onChange={(e) => handleInputChange('hotelName', e.target.value)}
                    placeholder="e.g., Grand Resort & Spa"
                  />
                </div>
                
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-gray-500" /> Location
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Bali, Indonesia"
                  />
                </div>
                
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <MdMeetingRoom className="mr-1 text-gray-500" /> Room Type
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.roomType}
                    onChange={(e) => handleInputChange('roomType', e.target.value)}
                    placeholder="e.g., Deluxe Ocean View"
                  />
                </div>
                
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <FaClock className="mr-1 text-gray-500" /> Duration
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    placeholder="e.g., 5 Days / 4 Nights"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.amenities.map((amenity, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                        {amenity}
                        <button 
                          type="button"
                          onClick={() => removeArrayItem('amenities', index)}
                          className="ml-1 text-green-600 hover:text-green-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {amenitiesList.map(amenity => (
                      <div key={amenity} className="flex items-center">
                        <input
                          type="checkbox"
                          id={amenity}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleArrayField('amenities', amenity);
                            } else {
                              const index = formData.amenities.indexOf(amenity);
                              if (index > -1) removeArrayItem('amenities', index);
                            }
                          }}
                          checked={formData.amenities.includes(amenity)}
                        />
                        <label htmlFor={amenity} className="ml-2 block text-sm text-gray-700">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {offerType === 'flight' && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Flight Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Airline</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.airline}
                    onChange={(e) => handleInputChange('airline', e.target.value)}
                    placeholder="e.g., Sky Airways"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Departure From</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.departure}
                    onChange={(e) => handleInputChange('departure', e.target.value)}
                    placeholder="e.g., New York (JFK)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    placeholder="e.g., London (LHR)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Flight Class</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.flightClass}
                    onChange={(e) => handleInputChange('flightClass', e.target.value)}
                  >
                    <option value="">Select Class</option>
                    {flightClasses.map(cls => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stops</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.stops}
                    onChange={(e) => handleInputChange('stops', e.target.value)}
                  >
                    <option value="">Select Stops</option>
                    <option value="Non-stop">Non-stop</option>
                    <option value="1 Stop">1 Stop</option>
                    <option value="2+ Stops">2+ Stops</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {offerType === 'package' && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Package Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.packageType}
                    onChange={(e) => handleInputChange('packageType', e.target.value)}
                  >
                    <option value="">Select Package Type</option>
                    <option value="All Inclusive">All Inclusive</option>
                    <option value="Family Vacation">Family Vacation</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Adventure">Adventure</option>
                    <option value="City Break">City Break</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
                
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <FaUserFriends className="mr-1 text-gray-500" /> For
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="Solo">Solo Traveler</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inclusions</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.inclusions.map((inclusion, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded flex items-center">
                        {inclusion}
                        <button 
                          type="button"
                          onClick={() => removeArrayItem('inclusions', index)}
                          className="ml-1 text-purple-600 hover:text-purple-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={currentInclusion}
                      onChange={(e) => setCurrentInclusion(e.target.value)}
                      placeholder="Add an inclusion (e.g., Free Breakfast)"
                    />
                    <button
                      type="button"
                      onClick={() => handleArrayField('inclusions', currentInclusion)}
                      className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOffersPage;