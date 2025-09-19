import React from "react";

const TermsAndSubmit = ({ formData, handleChange, errors, isSubmitting }) => {
  return (
    <>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="acceptTerms" className="font-medium text-gray-700">
            I accept the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Terms and Conditions
            </a>
          </label>
          <p className="text-gray-500">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      {errors.acceptTerms && (
        <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </div>
    </>
  );
};

export default TermsAndSubmit;
