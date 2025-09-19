import React from "react";

const PhoneField = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Phone Number*
      </label>

      <div className="flex gap-2">
        {/* Country Code Selector */}
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="px-3 py-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
        </select>

        {/* Phone Input */}
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={`flex-1 px-4 py-3 rounded-lg border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Enter your phone number"
          minLength={8}
          maxLength={15}
          pattern="[0-9]{8,15}"
        />
      </div>

      {/* Error Message */}
      {errors.phone && (
        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
      )}
    </div>
  );
};

export default PhoneField;
