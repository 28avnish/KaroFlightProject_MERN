import Hero from "../../components/InfoPage/Hero";
import QuickQAns from "../../components/InfoPage/QuickQAns";
import HowKFWorks from "../../components/InfoPage/HowKFWorks";
import WhereWeOperate from "../../components/InfoPage/WhereWeOperate";
import CancellationRefund from "../../components/InfoPage/CancellationRefund";
import PaymentsSecurity from "../../components/InfoPage/Payments&Security";
import TravelEssentials from "../../components/InfoPage/TravelEssentials";
import ContactSupport from "../../components/InfoPage/Contact&Support";

const Info = () => {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <QuickQAns />
      <HowKFWorks />
      <WhereWeOperate />
      <CancellationRefund />
      <PaymentsSecurity />
      <TravelEssentials />
      <ContactSupport />
    </div>
  );
};

export default Info;
