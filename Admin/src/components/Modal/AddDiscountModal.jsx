import React, { useState } from 'react';

const AddDiscountModal = ({ flight, onClose }) => {
  const [discount, setDiscount] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Discount:', {
      airline: flight.airline,
      flightNumber: flight.flightNumber,
      basePrice: flight.price,
      discount,
      code,
    });
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Discount</h2>

        {/* Flight Info (auto-filled) */}
        <div className="bg-gray-100 p-3 rounded-md mb-4">
          <p className="text-gray-700 font-medium">
            {flight.airline} — {flight.flightNumber}
          </p>
          <p className="text-gray-600 text-sm">
            Base Price: <span className="font-semibold">${flight.price}</span>
          </p>
        </div>

        {/* Discount Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Discount Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g. SAVE20"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Discount Percentage</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g. 20"
              min="1"
              max="100"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDiscountModal;
