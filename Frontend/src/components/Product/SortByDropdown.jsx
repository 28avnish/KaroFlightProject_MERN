const SortByDropdown = ({ sortByState, setSortByState, options }) => {
  const handleSelect = (value) => {
    setSortByState({
      open: false,
      selected: value,
    });
  };

  return (
    <div className="absolute z-20 mt-2 w-52 bg-white border border-black  shadow-lg font-helvetica-thin text-[15px] font-bold tracking-wider">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center space-x-2 py-2 px-2 cursor-pointer ${
            sortByState.selected === option.value && "bg-gray-100"
          }`}
          onMouseDown={() => handleSelect(option.value)} // ✅ This runs before blur
        >
          <input
            type="radio"
            name="sort"
            value={option.value}
            checked={sortByState.selected === option.value}
            onChange={() => handleSelect(option.value)}
            className="me-2"
            style={{
              accentColor: "black", // Modern browsers support this
              width: "18px",
              height: "18px",
            }}
          />
          <span className="">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SortByDropdown;
