import React, { useState, useContext } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { LanguageContext } from "../../contexts/LanguageContext"; // your context

const RegionalSettingsModal = ({
  isOpen,
  onClose,
  selectedLanguage,
  setSelectedLanguage,
  selectedCountry,
  setSelectedCountry,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const { setLang } = useContext(LanguageContext);

  const languages = [
    { code: "en", countryCode: "GB", name: "English (UK)" },
    { code: "hi", countryCode: "IN", name: "Indian Language" }, 
    { code: "es", countryCode: "ES", name: "Spanish" },
    { code: "fr", countryCode: "FR", name: "French" },
    { code: "ar", countryCode: "SA", name: "Arabic" },
  ];

  const countries = [
    { code: "IN", name: "India" },
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "FR", name: "France" },
    { code: "ES", name: "Spain" },
  ];

  const currencies = [
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  ];

  const [tempLanguage, setTempLanguage] = useState(selectedLanguage);
  const [tempCountry, setTempCountry] = useState(selectedCountry);
  const [tempCurrency, setTempCurrency] = useState(selectedCurrency);

  const handleSave = () => {
    const selectedLangObj = languages.find((l) => l.code === tempLanguage);
    if (selectedLangObj) {
      setLang(selectedLangObj.code);
      setSelectedLanguage && setSelectedLanguage(tempLanguage);
    }
    setSelectedCountry && setSelectedCountry(tempCountry);
    setSelectedCurrency && setSelectedCurrency(tempCurrency);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Regional settings
          </h2>

          {/* Language with Flag + Name */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Language</h3>
            <Select
              value={languages.find((lang) => lang.code === tempLanguage)}
              onChange={(option) => setTempLanguage(option.code)}
              options={languages}
              getOptionLabel={(e) => (
                <div className="flex items-center space-x-2">
                  <ReactCountryFlag
                    countryCode={e.countryCode}
                    svg
                    style={{ fontSize: "1.2em" }}
                  />
                  <span>{e.name}</span>
                </div>
              )}
              getOptionValue={(e) => e.code}
              className="w-full"
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Country / Region
            </h3>
            <select
              value={tempCountry}
              onChange={(e) => setTempCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Currency */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Currency</h3>
            <select
              value={tempCurrency}
              onChange={(e) => setTempCurrency(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.symbol}
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 border-t pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalSettingsModal;
