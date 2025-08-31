const Marquee = () => {
  return (
    <div
      className="bg-[#28282B] py-2 font-sage text-center overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to right, white -80%, #FF4900 50%, white 150%)",
      // }}
    >
      <p
        className="text-[#F4ECD7] text-sm lg:text-xl "
        style={{
          animation: "marquee 10s linear infinite",
          whiteSpace: "nowrap", // To prevent text from wrapping
        }}
      >
        <strong>NEW STOCK LANDING EVERY DAY FROM NOW UNTIL MAY!</strong>
      </p>
    </div>
  );
};

export default Marquee;
