import React from "react";

const EmailField = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Email Address*
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className={`block w-full px-4 py-3 rounded-lg border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        placeholder="Enter your email address"
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
      )}
    </div>
  );
};

export default EmailField;
