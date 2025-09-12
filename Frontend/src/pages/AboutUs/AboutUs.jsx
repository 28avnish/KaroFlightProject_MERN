import "./Timeline.css";
import Hero from "../../components/AboutUs/Hero";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";
import ImpactNumber from "../../components/AboutUs/ImpactNumber";
import OurJourney from "../../components/AboutUs/OurJourney";
import WhyChooseKF from "../../components/AboutUs/WhyChooseKF";
import HowWeHelp from "../../components/AboutUs/HowWeHelp";
import SustainabilityResponsibility from "../../components/AboutUs/Sustainability&Responsibility";
import CTA from "../../components/AboutUs/CTA";
import Dream from "../../components/AboutUs/Dream";

const sectionColor = "bg-[#F0F0F0]";

const AboutUs = () => {
  return (
    <section className={`${sectionColor}`}>
      <Hero />
      <WhoWeAre />
      <ImpactNumber />
      <Dream />
      {/* <WhyChooseKF /> */}
      {/* <HowWeHelp /> */}
      {/* <SustainabilityResponsibility /> */}
      <CTA />
    </section>
  );
};
export default AboutUs;
