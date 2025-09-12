import React, { useState } from 'react';

const RegionalSettingsModal = ({ 
  isOpen, 
  onClose, 
  selectedLanguage, 
  setSelectedLanguage, 
  selectedCountry, 
  setSelectedCountry, 
  selectedCurrency, 
  setSelectedCurrency 
}) => {
  const [tempLanguage, setTempLanguage] = useState(selectedLanguage);
  const [tempCountry, setTempCountry] = useState(selectedCountry);
  const [tempCurrency, setTempCurrency] = useState(selectedCurrency);

  const languages = [
    { code: 'en', name: 'English (United Kingdom)', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' }
  ];

  const countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'FR', name: 'France' },
    { code: 'ES', name: 'Spain' }
  ];

  const currencies = [
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' }
  ];

  const handleSave = () => {
    setSelectedLanguage(tempLanguage);
    setSelectedCountry(tempCountry);
    setSelectedCurrency(tempCurrency);
    onClose();
  };

  const handleCancel = () => {
    setTempLanguage(selectedLanguage);
    setTempCountry(selectedCountry);
    setTempCurrency(selectedCurrency);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Regional settings</h2>
          
          {/* Language Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Language</h3>
            <select
              value={tempLanguage}
              onChange={(e) => setTempLanguage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.name}>
                  {language.flag} {language.name}
                </option>
              ))}
            </select>
          </div>

          {/* Country/Region Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Country / Region</h3>
            <p className="text-xs text-gray-500 mb-3">
              Selecting the country you're in will give you local deals and information.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  value={tempCountry}
                  onChange={(e) => setTempCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={tempCurrency}
                  onChange={(e) => setTempCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.symbol}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalSettingsModal;