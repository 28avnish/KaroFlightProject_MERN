import { useEffect, useState } from "react";
import KaroFlightLogo from "/KaroFlightLogo.png";
import { HashLink } from "react-router-hash-link";
import { FaGlobe, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RegionalSettingsModal from "../../components/Modal/RegionalSettingsModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    "English (United Kingdom)"
  );
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("session");
    setIsLoggedIn(!!session);

    // Prevent duplicate script injection
    // if (!window.googleTranslateElementInit) {
    //   window.googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //       {
    //         pageLanguage: "en",
    //         includedLanguages: "en,hi,es,fr,ar",
    //         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    //       },
    //       'google_translate_element'
    //     );
    //   };

    //   const script = document.createElement("script");
    //   script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //   script.async = true;
    //   document.body.appendChild(script);
    // }

    // return () => {
    //   // Optional: remove script and callback on unmount
    //   const existingScript = document.querySelector('script[src*="translate_a/element.js"]');
    //   if (existingScript) existingScript.remove();
    //   delete window.googleTranslateElementInit;
    // };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("session");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  const routes = [
    {
      path: "/about-us",
      label: "About us",
    },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/offer",
      label: "Offer page",
    },
    {
      path: "/info",
      label: "Info page",
    },
    {
      path: "/career",
      label: "Career",
    },
  ];

  const languages = [
    { code: "en", name: "English (United Kingdom)", flag: "🇬🇧" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
  ];

  // Find the current language object based on selectedLanguage
  const currentLanguage =
    languages.find((lang) => lang.name === selectedLanguage) || languages[0];

  const handleLanguageModalOpen = () => {
    setIsLanguageModalOpen(true);
  };

  const handleLanguageModalClose = () => {
    setIsLanguageModalOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={KaroFlightLogo}
            alt="KARO-FLIGHT-LOGO"
            className="w-[124px] h-[49px]"
          />
        </div>
        <div
          id="google_translate_element"
          className=""
          style={{ width: "100px" }}
        ></div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700">
          {routes.map((item) => (
            <HashLink
              key={item.path}
              to={item.path}
              smooth
              className="text-gray-700 hover:text-black transition duration-200 ease-in-out cursor-pointer"
            >
              {item.label}
            </HashLink>
          ))}
        </div>

        {/* Search + Language + Subscribe */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative w-[200px]">
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 w-full rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <FaSearch className="w-4 h-4" />
            </span>
          </div>

          {/* Language Selector - Updated to show flag and code */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-black transition duration-200"
              onClick={handleLanguageModalOpen}
            >
              <span className="bg-[#040E4E] text-white flex items-center justify-center w-8 h-8 rounded-full">
                <FaGlobe className="h-5 w-5" />
              </span>
              {/* <span>{currentLanguage.flag}</span>
              <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg> */}
            </button>
          </div>

          <button className="px-4 py-2 bg-[#002C52] text-white text-sm font-semibold hover:bg-[#3b45d4] transition rounded-[10px]">
            Subscribe
          </button>
          <button
            className="relative group px-4 py-2 bg-[#002C52] text-white text-sm font-semibold hover:bg-[#3b45d4] transition rounded-[10px]"
            onClick={() => {
              if (!isLoggedIn) {
                navigate("/signin");
              } else {
                alert("Please login first to access your profile.");
              }
            }}
            name={isLoggedIn ? "Profile" : "Login"}
          >
            {isLoggedIn ? <FaUser className="h-5.5" /> : "Login"}

            <div className="absolute left-1/2 -translate-x-1/2 mt-2.5 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              {isLoggedIn ? "Profile" : "Login"}
            </div>
          </button>
          <button
            className={`px-4 py-2 bg-[#002C52] text-white text-sm font-semibold hover:bg-[#3b45d4] transition rounded-[10px]
             ${!isLoggedIn ? "hidden" : ""}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          <div className="space-y-2 text-sm font-medium text-gray-700">
            {routes.map((item) => (
              <HashLink
                key={item.path}
                to={item.path}
                smooth
                className="block py-2 text-gray-700 hover:text-black transition duration-200 ease-in-out cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </HashLink>
            ))}
          </div>

          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full rounded-[10px] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <FaSearch className="w-4 h-4" />
              </span>
            </div>

            {/* Mobile Language Selector - Updated to show flag and code */}
            <div className="relative">
              <button
                onClick={handleLanguageModalOpen}
                className="w-full p-2 border border-gray-300 rounded-[10px] text-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
              >
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.code.toUpperCase()}</span>
              </button>
            </div>

            <button className="w-full px-4 py-2 bg-[#002C52] text-white text-sm font-semibold hover:bg-[#3b45d4] transition rounded-[10px]">
              Subscribe
            </button>
            <button
              className="relative group px-4 py-2 bg-[#002C52] text-white text-sm font-semibold hover:bg-[#3b45d4] transition rounded-[10px]"
              onClick={() => {
                if (!isLoggedIn) {
                  navigate("/signin");
                } else {
                  alert("accessing your profile.");
                }
              }}
              name={isLoggedIn ? "Profile" : "Login"}
            >
              {isLoggedIn ? <FaUser className="h-5.5" /> : "Login"}

              <div className="absolute left-1/2 -translate-x-1/2 mt-2.5 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                {isLoggedIn ? "Profile" : "Login"}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Regional Settings Modal */}
      <RegionalSettingsModal
        isOpen={isLanguageModalOpen}
        onClose={handleLanguageModalClose}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
    </nav>
  );
};

export default Header;
