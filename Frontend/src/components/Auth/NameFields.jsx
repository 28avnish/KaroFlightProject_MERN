import React from "react";

const NameFields = ({ formData, handleChange, errors }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          First Name*
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          className={`block w-full px-4 py-3 rounded-lg border ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="middleName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Middle Name
        </label>
        <input
          id="middleName"
          name="middleName"
          type="text"
          value={formData.middleName}
          onChange={handleChange}
          className={`block w-full px-4 py-3 rounded-lg border ${
            errors.middleName ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Enter your middle name"
        />
        {errors.middleName && (
          <p className="mt-1 text-sm text-red-600">{errors.middleName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Last Name*
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          className={`block w-full px-4 py-3 rounded-lg border ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Enter your last name"
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
        )}
      </div>
    </div>
  );
};

export default NameFields;
