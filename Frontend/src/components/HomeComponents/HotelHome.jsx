import React, { useState } from "react";
import HeroSection from "../HotelSearch/Hero";

import PerfectChoice from "../HotelSearch/PerfectChoice";
import QuickInfo from "../HotelSearch/QuickInfo";
import FAQ from "../HotelSearch/FAQ";

const HotelHome = () => {
  return (
    <>
      <HeroSection />
      <PerfectChoice />
      <QuickInfo />
      <FAQ />
    </>
  );
};

export default HotelHome;
