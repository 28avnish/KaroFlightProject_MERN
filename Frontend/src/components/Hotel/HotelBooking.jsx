import React, { useState } from 'react';

const HotelBooking = () => {
  const [formData, setFormData] = useState({
    checkinDate: '',
    checkoutDate: '',
    city: '',
    nationality: '',
    currency: 'INR',
    ratings: [],
    fsc: false,
    sync: false,
    rooms: [
      {
        numberOfAdults: 1,
        numberOfChild: 0,
        childAge: []
      }
    ]
  });

  const cities = [
    { id: '110203', name: 'New York' },
    { id: '110204', name: 'London' },
    { id: '110205', name: 'Paris' },
    { id: '110206', name: 'Tokyo' },
    { id: '110207', name: 'Dubai' }
  ];

  const nationalities = [
    { id: '106', name: 'Indian' },
    { id: '107', name: 'American' },
    { id: '108', name: 'British' },
    { id: '109', name: 'French' },
    { id: '110', name: 'Japanese' }
  ];

  const currencies = [
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'fsc') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else if (name === 'sync') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle ratings checkboxes
        const ratingValue = parseInt(value);
        if (checked) {
          setFormData(prev => ({
            ...prev,
            ratings: [...prev.ratings, ratingValue]
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            ratings: prev.ratings.filter(r => r !== ratingValue)
          }));
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRoomChange = (index, field, value) => {
    const updatedRooms = [...formData.rooms];
    
    if (field === 'childAge') {
      // Parse child ages as integers
      const ages = value.split(',').map(age => parseInt(age.trim())).filter(age => !isNaN(age));
      updatedRooms[index][field] = ages;
    } else {
      updatedRooms[index][field] = parseInt(value) || 0;
    }
    
    setFormData(prev => ({ ...prev, rooms: updatedRooms }));
  };

  const addRoom = () => {
    if (formData.rooms.length < 5) {
      setFormData(prev => ({
        ...prev,
        rooms: [
          ...prev.rooms,
          {
            numberOfAdults: 1,
            numberOfChild: 0,
            childAge: []
          }
        ]
      }));
    }
  };

  const removeRoom = (index) => {
    if (formData.rooms.length > 1) {
      const updatedRooms = [...formData.rooms];
      updatedRooms.splice(index, 1);
      setFormData(prev => ({ ...prev, rooms: updatedRooms }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the data in the required format
    const requestData = {
      searchQuery: {
        checkinDate: formData.checkinDate,
        checkoutDate: formData.checkoutDate,
        roomInfo: formData.rooms.map(room => ({
          numberOfAdults: room.numberOfAdults,
          numberOfChild: room.numberOfChild,
          ...(room.numberOfChild > 0 && { childAge: room.childAge })
        })),
        searchCriteria: {
          city: formData.city,
          nationality: formData.nationality,
          currency: formData.currency
        },
        searchPreferences: {
          ratings: formData.ratings.length > 0 ? formData.ratings.sort() : [1, 2, 3, 4, 5],
          fsc: formData.fsc
        }
      },
      sync: formData.sync
    };

    console.log('Hotel Booking Request:', JSON.stringify(requestData, null, 2));
    alert('Check the console for the formatted request data!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Hotel Booking Form</h1>
          <p className="text-indigo-200">Fill in your hotel search preferences</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in Date *
              </label>
              <input
                type="date"
                name="checkinDate"
                value={formData.checkinDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out Date *
              </label>
              <input
                type="date"
                name="checkoutDate"
                value={formData.checkoutDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Search Criteria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationality *
              </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select nationality</option>
                {nationalities.map(nat => (
                  <option key={nat.id} value={nat.id}>{nat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency *
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {currencies.map(curr => (
                  <option key={curr.code} value={curr.code}>{curr.code} - {curr.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Room Information */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Room Information</h2>
              <button
                type="button"
                onClick={addRoom}
                disabled={formData.rooms.length >= 5}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Add Room ({formData.rooms.length}/5)
              </button>
            </div>
            
            <div className="space-y-6">
              {formData.rooms.map((room, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-700">Room {index + 1}</h3>
                    {formData.rooms.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRoom(index)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Adults *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={room.numberOfAdults}
                        onChange={(e) => handleRoomChange(index, 'numberOfAdults', e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Children
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="12"
                        value={room.numberOfChild}
                        onChange={(e) => handleRoomChange(index, 'numberOfChild', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Children Ages (comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 5, 7"
                        value={room.childAge.join(', ')}
                        onChange={(e) => handleRoomChange(index, 'childAge', e.target.value)}
                        disabled={room.numberOfChild === 0}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Search Preferences */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Search Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel Ratings (Optional)
                </label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <label key={rating} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        value={rating}
                        checked={formData.ratings.includes(rating)}
                        onChange={handleInputChange}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-gray-700">{rating} Star{rating > 1 ? 's' : ''}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Preferences
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="fsc"
                    checked={formData.fsc}
                    onChange={handleInputChange}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">Free Cancellation (FSC)</span>
                </label>
                
                <label className="flex items-center space-x-3 mt-4">
                  <input
                    type="checkbox"
                    name="sync"
                    checked={formData.sync}
                    onChange={handleInputChange}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">Synchronous Search</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search Hotels
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelBooking;