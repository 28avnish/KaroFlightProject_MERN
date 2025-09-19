import React from "react";
import Hero from "../../components/Offers/Hero";
import Promotions from "../../components/Offers/Promotions";
import WhatUDoInOfferPanel from "../../components/Offers/WhatUDoInOfferPanel";
import TravelTimeline from "../../components/Offers/TravelTimeline";
import OfferWorkflowSteps from "../../components/Offers/TravelTimeline";
import UsersOffers from "../../components/Offers/UsersOffers";
import WhatMatters from "../../components/Offers/WhatMatters";
import GovernanceApproval from "../../components/Offers/GovernanceApproval";
import FAQ from "../../components/Offers/FAQ";

const Offers = () => {
  return (
    <div className="w-full px-0 md:px-2 lg:px-4 xl:px-0 max-w-full">
      <Hero />
      <Promotions />
      <WhatUDoInOfferPanel />
      <OfferWorkflowSteps />
      <UsersOffers />
      <WhatMatters />
      <GovernanceApproval />
      <FAQ />
    </div>
  );
};

export default Offers;
