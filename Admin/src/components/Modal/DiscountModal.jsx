import React from "react";

export default function DiscountModal({ hotel, onClose }) {
  if (!hotel) return null; 

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-4">Add Discount</h1>

        <form className="space-y-4">
          {/* Auto-filled fields */}
          <div>
            <label className="block text-sm font-medium">Hotel Name</label>
            <input
              type="text"
              value={hotel.name}
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Current Price</label>
            <input
              type="text"
              value={`$${hotel.price}`}
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Discount input */}
          <div>
            <label className="block text-sm font-medium">Discount (%)</label>
            <input
              type="number"
              placeholder="Enter discount %"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-semibold"
          >
            Apply Discount
          </button>
        </form>
      </div>
    </div>
  );
}
