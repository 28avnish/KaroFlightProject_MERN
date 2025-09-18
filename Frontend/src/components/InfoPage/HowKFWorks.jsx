import Search from "../../assets/images/Search.svg";
import SearchNew from "../../assets/images/SearchNew.jpg";
import Book from "../../assets/images/Book.jpg";
import compare from "../../assets/images/compare.jpg";
import manage from "../../assets/images/manage.jpg";
import { FaSearch } from "react-icons/fa";
import {FaGear} from 'react-icons/fa6'
import { MdCreditCard } from "react-icons/md";
import {VscGraph } from 'react-icons/vsc'

const gradient = "linear-gradient(90deg, #0E064B 0%, #000000 100%)";
const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.7) 0%, rgba(5,36,97,0.7) 50%, rgba(13,64,165,0.7) 100%)";
const gradientBG = "bg-gradient-to-r from-[#040E4E]/100 to-[#FF621F]/100";
const iconBG = "bg-[#040E4E]";
const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-[#FFFFFF]";
const accentColorText = "text-[#FF621F]";
const textLightGray = "text-gray-500";
const textDarkGray = "text-gray-600";
const bgGray = "bg-gray-300";
const headerText = "text-[#f7ccbc]";
const sectionColor = "bg-[#F0F0F0]";
const gradient2 =
  "bg-gradient-to-r from-[#FFFFFF]/0 via-[#F4EBE4]/50 to-[#FFE0BC]/0";
const textWhite = "text-white";
const fadeGradient =
  "linear-gradient(to top, rgba(2,26,75,0.9) 0%, rgba(2,26,75,0.4) 50%, rgba(2,26,75,0) 100%)";
const textQuickAns = "bg-[#171D26]";

const HowKFWorks = () => {
  return (
    <div>
      <section className="py-16 flex items-center justify-center flex-col mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How KaroFlight Works</h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Clear rules. Real-time status.
            </p>
          </div>

          <div className="grid md:grid-cols-4 sm:gap-30 justify-center items-center">
            {[
              {
                image: SearchNew,
                icon: <FaSearch className="text-3xl" />,
                number: 1,
                title: "Search",
                description: "Find flights and destinations",
              },
              {
                image: compare,
                icon: <VscGraph className="text-3xl" />,
                number: 2,
                title: "Compare",
                description: "Compare prices and options",
              },
              {
                image: Book,
                icon: <MdCreditCard className="text-3xl" />,
                number: 3,
                title: "Book",
                description: "Secure checkout process",
              },
              {
                image: manage,
                icon: <FaGear className="text-3xl" />,
                number: 4,
                title: "Manage",
                description: "Change or cancel trips",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-center flex-col h-[376px] w-[284px] "
              >
                <div className="relative mb-6">
                  <div className="w-full h-full  rounded-full flex items-center justify-center  text-2xl font-bold mx-auto">
                    <img src={step.image} className="h-[214px] w-[214px] rounded-2xl " />
                  </div>
                  <div
                    className={`absolute -top-4 -right-8 rounded-full h-8 w-8 shadow-md flex items-center justify-center bg-[#002C52] ${textWhite}`}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="relative mb-6">
                  {/* <div className="w-full h-full rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                      {step.icon}
                    </div> 
                    <div
                      className={`absolute -top-4 -right-8 rounded-full h-8 w-8 shadow-md flex items-center justify-center bg-[#002C52] ${textWhite}`}
                    >
                      {step.number}
                    </div>*/}
                </div>
                <div> {step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className={`${textDarkGray}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowKFWorks;
