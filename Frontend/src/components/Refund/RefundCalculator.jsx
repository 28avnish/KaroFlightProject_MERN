import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RefundCalculator = () => {
  const [formData, setFormData] = useState({
    bookingAmount: '',
    departureDateTime: '',
    cancellationDateTime: new Date().toISOString().slice(0, 16),
    hasInsurance: false,
    isPeakSeason: false,
    addOnsAmount: '0'
  });

  const [refundDetails, setRefundDetails] = useState(null);
  const [errors, setErrors] = useState({});

  const calculateRefund = () => {
    // Validate form
    const newErrors = {};
    if (!formData.bookingAmount || formData.bookingAmount <= 0) {
      newErrors.bookingAmount = 'Please enter a valid booking amount';
    }
    if (!formData.departureDateTime) {
      newErrors.departureDateTime = 'Please select departure date and time';
    }
    if (!formData.cancellationDateTime) {
      newErrors.cancellationDateTime = 'Please select cancellation date and time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const bookingAmount = parseFloat(formData.bookingAmount);
    const addOnsAmount = parseFloat(formData.addOnsAmount) || 0;
    const totalAmount = bookingAmount + addOnsAmount;

    const departureDate = new Date(formData.departureDateTime);
    const cancellationDate = new Date(formData.cancellationDateTime);
    
    const hoursUntilDeparture = (departureDate - cancellationDate) / (1000 * 60 * 60);

    let refundPercentage = 0;
    let refundReason = '';

    if (hoursUntilDeparture > 48) {
      refundPercentage = 0.8;
      refundReason = 'Cancelled more than 48 hours before departure';
    } else if (hoursUntilDeparture > 24) {
      refundPercentage = 0.5;
      refundReason = 'Cancelled 24-48 hours before departure';
    } else if (hoursUntilDeparture > 0) {
      refundPercentage = 0;
      refundReason = 'Cancelled less than 24 hours before departure - no refund applicable';
    } else {
      refundPercentage = 0;
      refundReason = 'Departure time has already passed';
    }

    // Apply insurance benefit (full refund if insured)
    if (formData.hasInsurance && hoursUntilDeparture > 0) {
      refundPercentage = 1;
      refundReason = 'Full refund due to travel insurance coverage';
    }

    // Peak season penalty
    if (formData.isPeakSeason && refundPercentage > 0) {
      refundPercentage *= 0.9; // 10% penalty during peak season
      refundReason += ' (10% peak season penalty applied)';
    }

    const baseRefund = bookingAmount * refundPercentage;
    // Add-ons are only refundable if cancelled more than 48 hours in advance
    const addOnsRefund = hoursUntilDeparture > 48 ? addOnsAmount : 0;
    const totalRefund = baseRefund + addOnsRefund;

    const processingFee = totalRefund > 0 ? 50 : 0; // ₹50 processing fee
    const netRefund = Math.max(0, totalRefund - processingFee);

    setRefundDetails({
      totalAmount,
      refundPercentage: refundPercentage * 100,
      baseRefund,
      addOnsRefund,
      processingFee,
      netRefund,
      hoursUntilDeparture: Math.max(0, hoursUntilDeparture),
      refundReason,
      isEligible: netRefund > 0
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateRefund();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Refund Calculator
        </h1>
        <p className="text-gray-600">
          Estimate your refund amount based on our cancellation policy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Booking Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Booking Amount (₹)
              </label>
              <input
                type="number"
                value={formData.bookingAmount}
                onChange={(e) => handleInputChange('bookingAmount', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.bookingAmount ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter amount"
                min="0"
              />
              {errors.bookingAmount && (
                <p className="text-red-500 text-sm mt-1">{errors.bookingAmount}</p>
              )}
            </div>

            {/* Add-ons Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add-ons Amount (₹) - Refundable if cancelled 48+ hours before
              </label>
              <input
                type="number"
                value={formData.addOnsAmount}
                onChange={(e) => handleInputChange('addOnsAmount', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter add-ons amount"
                min="0"
              />
            </div>

            {/* Departure Date & Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departure Date & Time
              </label>
              <input
                type="datetime-local"
                value={formData.departureDateTime}
                onChange={(e) => handleInputChange('departureDateTime', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.departureDateTime ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.departureDateTime && (
                <p className="text-red-500 text-sm mt-1">{errors.departureDateTime}</p>
              )}
            </div>

            {/* Cancellation Date & Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cancellation Date & Time
              </label>
              <input
                type="datetime-local"
                value={formData.cancellationDateTime}
                onChange={(e) => handleInputChange('cancellationDateTime', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cancellationDateTime ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.cancellationDateTime && (
                <p className="text-red-500 text-sm mt-1">{errors.cancellationDateTime}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.hasInsurance}
                  onChange={(e) => handleInputChange('hasInsurance', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I have travel insurance
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isPeakSeason}
                  onChange={(e) => handleInputChange('isPeakSeason', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Peak season booking (10% penalty applies)
                </span>
              </label>
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Calculate Refund
            </button>
          </form>
        </div>

        {/* Results Panel */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Refund Estimate</h2>
          
          {refundDetails ? (
            <div className="space-y-4">
              {/* Refund Summary */}
              <div className={`p-4 rounded-lg ${
                refundDetails.isEligible ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <h3 className="font-semibold text-gray-800 mb-2">Refund Status</h3>
                <p className={refundDetails.isEligible ? 'text-green-700' : 'text-red-700'}>
                  {refundDetails.refundReason}
                </p>
              </div>

              {/* Refund Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium">{formatCurrency(refundDetails.totalAmount)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Refund Percentage:</span>
                  <span className="font-medium">{refundDetails.refundPercentage.toFixed(1)}%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Base Refund:</span>
                  <span className="font-medium">{formatCurrency(refundDetails.baseRefund)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Add-ons Refund:</span>
                  <span className="font-medium">{formatCurrency(refundDetails.addOnsRefund)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee:</span>
                  <span className="font-medium">-{formatCurrency(refundDetails.processingFee)}</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-800">Net Refund:</span>
                  <span className={refundDetails.isEligible ? 'text-green-600' : 'text-red-600'}>
                    {formatCurrency(refundDetails.netRefund)}
                  </span>
                </div>
              </div>

              {/* Time Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Time Information</h4>
                <p className="text-sm text-gray-600">
                  {Math.floor(refundDetails.hoursUntilDeparture / 24)} days,{' '}
                  {Math.floor(refundDetails.hoursUntilDeparture % 24)} hours until departure
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500">Enter your booking details to calculate your refund amount</p>
            </div>
          )}
        </div>
      </div>

      {/* Policy Summary */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Policy Summary</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• 48+ hours before departure: 80% refund</li>
          <li>• 24-48 hours before departure: 50% refund</li>
          <li>• Less than 24 hours: No refund</li>
          <li>• Travel insurance provides full refund coverage</li>
          <li>• Peak season bookings incur 10% additional penalty</li>
          <li>• ₹50 processing fee applies to all refunds</li>
          <li>• Add-ons refundable only if cancelled 48+ hours before departure</li>
        </ul>
      </div>


      {/* TripJack */}
      <div className='flex items-center justify-center bg-red-500 hover:bg-red-700 text-white p-2 rounded-full text-xl'>
        <Link to='/tripjack'>Tripjack</Link>
      </div>
    </div>
  );
};

export default RefundCalculator;