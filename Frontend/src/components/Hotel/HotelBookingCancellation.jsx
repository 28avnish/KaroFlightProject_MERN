import React, { useState } from 'react';

const HotelBookingCancellation = () => {
  const [step, setStep] = useState('search'); // 'search', 'confirm', 'success'
  const [searchData, setSearchData] = useState({
    bookingId: '',
    email: '',
    phone: ''
  });
  const [bookingDetails, setBookingDetails] = useState(null);
  const [cancellationReason, setCancellationReason] = useState('');
  const [refundPreference, setRefundPreference] = useState('original');

  // Mock booking data - in a real app, this would come from an API
  const mockBooking = {
    id: 'BK123456',
    hotelName: 'Grand Plaza Hotel',
    checkIn: '2023-12-15',
    checkOut: '2023-12-20',
    guests: 2,
    rooms: 1,
    totalAmount: '$450',
    status: 'Confirmed',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call to fetch booking details
    setBookingDetails(mockBooking);
    setStep('confirm');
  };

  const handleCancelBooking = () => {
    // In a real app, this would be an API call to cancel the booking
    console.log('Cancelling booking:', bookingDetails.id);
    console.log('Reason:', cancellationReason);
    console.log('Refund preference:', refundPreference);
    setStep('success');
  };

  const cancellationReasons = [
    'Change of plans',
    'Found better accommodation',
    'Travel restrictions',
    'Dissatisfied with hotel policies',
    'Financial reasons',
    'Other'
  ];

  const refundOptions = [
    { value: 'original', label: 'Original payment method' },
    { value: 'credit', label: 'Hotel credit for future stay' },
    { value: 'voucher', label: 'Travel voucher' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Cancel Hotel Booking</h1>
          <p className="text-gray-600">Manage your hotel reservations</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`flex flex-col items-center ${step !== 'search' ? 'text-indigo-600' : 'text-gray-800'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step !== 'search' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200'}`}>
                {step !== 'search' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span>1</span>
                )}
              </div>
              <span className="text-sm mt-2">Search Booking</span>
            </div>
            
            <div className={`h-1 w-16 mx-2 ${step !== 'search' ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex flex-col items-center ${step === 'confirm' ? 'text-indigo-600' : step === 'success' ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'confirm' || step === 'success' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200'}`}>
                {step === 'success' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span>2</span>
                )}
              </div>
              <span className="text-sm mt-2">Confirm</span>
            </div>
            
            <div className={`h-1 w-16 mx-2 ${step === 'success' ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex flex-col items-center ${step === 'success' ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'success' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200'}`}>
                <span>3</span>
              </div>
              <span className="text-sm mt-2">Complete</span>
            </div>
          </div>
        </div>

        {/* Search Form */}
        {step === 'search' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Your Booking</h2>
            <p className="text-gray-600 mb-6">Enter your booking details to find your reservation</p>
            
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booking ID *
                </label>
                <input
                  type="text"
                  value={searchData.bookingId}
                  onChange={(e) => setSearchData({...searchData, bookingId: e.target.value})}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., BK123456"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={searchData.email}
                    onChange={(e) => setSearchData({...searchData, email: e.target.value})}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={searchData.phone}
                    onChange={(e) => setSearchData({...searchData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors mt-4"
              >
                Find Booking
              </button>
            </form>
          </div>
        )}

        {/* Confirmation Step */}
        {step === 'confirm' && bookingDetails && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cancel Your Booking</h2>
            
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Booking Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Booking ID</p>
                  <p className="font-medium">{bookingDetails.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hotel</p>
                  <p className="font-medium">{bookingDetails.hotelName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="font-medium">{bookingDetails.checkIn}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="font-medium">{bookingDetails.checkOut}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="font-medium">{bookingDetails.guests}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-medium">{bookingDetails.totalAmount}</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-1">Cancellation Policy</h4>
                <p className="text-sm text-yellow-700">{bookingDetails.cancellationPolicy}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Cancellation
              </label>
              <select
                value={cancellationReason}
                onChange={(e) => setCancellationReason(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                {cancellationReasons.map(reason => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Refund Preference
              </label>
              <div className="space-y-2">
                {refundOptions.map(option => (
                  <label key={option.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="refundPreference"
                      value={option.value}
                      checked={refundPreference === option.value}
                      onChange={() => setRefundPreference(option.value)}
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setStep('search')}
                className="flex-1 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCancelBooking}
                className="flex-1 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancellation Complete!</h2>
            <p className="text-gray-600 mb-6">
              Your booking has been successfully cancelled. A confirmation email has been sent to your email address.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Refund Information</h3>
              <p className="text-sm text-gray-600">
                Your refund of {bookingDetails?.totalAmount} will be processed within 5-10 business days to your {refundPreference === 'original' ? 'original payment method' : refundPreference === 'credit' ? 'hotel credit account' : 'travel voucher'}.
              </p>
            </div>
            
            <button
              onClick={() => {
                setStep('search');
                setSearchData({ bookingId: '', email: '', phone: '' });
              }}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Done
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800">Call Us</h4>
              <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800">Email Us</h4>
              <p className="text-sm text-gray-600">support@hotelbookings.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800">Live Chat</h4>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingCancellation;