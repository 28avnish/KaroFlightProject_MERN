import { useFlightSearch } from "../../contexts/FlightSearchContext";

const TravelersModal = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    modalPosition,
    adults,
    setAdults,
    children,
    addChild,
    removeChild,
    childAges,
    updateChildAges,
    travelClass,
    setTravelClass,
    directOnly,
    setDirectOnly,
    handleApply,
  } = useFlightSearch();
  const travelClasses = [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];

  const displayText = `${adults} Adult${
    adults !== 1 ? "s" : ""
  }, ${children} Child${children !== 1 ? "ren" : ""}`;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="absolute -top-17.5 right-0 inset-0 z-50"
      onClick={handleClose}
    >
      <div
        className="absolute bg-white rounded-xl shadow-2xl border border-gray-200 min-w-[320px] max-w-md overflow-hidden"
        style={{
          top: modalPosition.top,
          left: modalPosition.left,
          minWidth: modalPosition.width || 320,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Travelers & Cabin Class
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Travelers</h3>

            {/* Adults counter */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium">Adults</p>
                <p className="text-xs text-gray-500">Aged 18+</p>
              </div>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-50"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                >
                  -
                </button>
                <span className="mx-3 w-6 text-center">{adults}</span>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-50"
                  onClick={() => setAdults(adults + 1)}
                  disabled={adults >= 9}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children counter */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium">Children</p>
                <p className="text-xs text-gray-500">Aged 0 to 17</p>
              </div>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-50"
                  onClick={removeChild}
                  disabled={children <= 0}
                >
                  -
                </button>
                <span className="mx-3 w-6 text-center">{children}</span>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-50"
                  onClick={addChild}
                  disabled={children >= 6 || adults + children >= 9}
                >
                  +
                </button>
              </div>
            </div>

            {/* Child age selectors */}
            {childAges.map((age, index) => (
              <div key={index} className="mb-4 ml-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age of child {index + 1}
                </label>
                <select
                  value={age}
                  onChange={(e) => updateChildAges(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select age</option>
                  {Array.from({ length: 18 }, (_, i) => (
                    <option key={i} value={i}>
                      {i} years
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <p className="text-xs text-gray-500 mt-2">
              Your age at time of travel must be valid for the age category
              booked. Airlines have restrictions on under 10-travelling class.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Cabin class</h3>
            <div className="space-y-2">
              {travelClasses.map((cls) => (
                <div key={cls} className="flex items-center">
                  <input
                    type="radio"
                    id={cls}
                    name="travelClass"
                    checked={travelClass === cls}
                    onChange={() => setTravelClass(cls)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={cls}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {cls}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We can only show Economy prices for this search. To see Business,
              Premium Economy, and First Class options, please tell us your
              travel dates and destination.
            </p>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="directOnly"
              checked={directOnly}
              onChange={() => setDirectOnly(!directOnly)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="directOnly"
              className="ml-2 block text-sm text-gray-700"
            >
              Direct flights only
            </label>
          </div>

          <button
            onClick={handleApply}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelersModal;
