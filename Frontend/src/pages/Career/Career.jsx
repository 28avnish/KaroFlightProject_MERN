import Hero from "../../components/Careers/Hero";
import WhyChooseKF from "../../components/Careers/WhyChooseKF";
import FindYourTeam from "../../components/Careers/FindYourTeam";
import OpenPositions from "../../components/Careers/OpenPositions";
import Benefits from "../../components/Careers/Benefits";

const heroGradient = "bg-[#F1F2F4]";

const Career = () => {
  return (
    <div className={heroGradient}>
      <Hero />
      <WhyChooseKF />
      <FindYourTeam />
      <OpenPositions />
      <Benefits />
    </div>
  );
};

export default Career;
