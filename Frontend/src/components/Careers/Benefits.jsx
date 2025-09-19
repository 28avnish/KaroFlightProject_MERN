import { FaBolt, FaGlobe, FaGraduationCap, FaHome, FaRegHeart, FaShieldAlt } from 'react-icons/fa';

const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-[#FFFFFF]";
const textLightGray = "text-gray-500";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRegHeart />,
      title: "Health & Wellness",
      description:
        "Comprehensive health coverage and wellness programs to keep you at your best.",
      features: [
        "Premium health insurance",
        "Mental health support",
        "Fitness membership",
        "Wellness stipend",
      ],
    },
    {
      icon: <FaGlobe />,
      title: "Travel & Explore",
      description:
        "See the world with generous travel benefits and flexible time off policies.",
      features: [
        "Unlimited PTO policy",
        "Travel credits & discounts",
        "Sabbatical programs",
        "Workation allowance",
      ],
    },
    {
      icon: <FaGraduationCap />,
      title: "Learn & Grow",
      description:
        "Invest in your professional development with learning opportunities and mentorship.",
      features: [
        "$5,000 annual learning budget",
        "Conference attendance",
        "Internal mentorship",
        "Skill development tracks",
      ],
    },
    {
      icon: <FaHome />,
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements that fit your lifestyle and maximize your productivity.",
      features: [
        "Remote-first culture",
        "Flexible hours",
        "Home office setup",
        "Coworking allowance",
      ],
    },
    {
      icon: <FaBolt />,
      title: "Innovation Time",
      description:
        "Dedicate time to personal projects and innovative ideas that could shape our future.",
      features: [
        "20% innovation time",
        "Hackathon events",
        "Side project support",
        "Patent bonuses",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Financial Security",
      description:
        "Competitive compensation and benefits to secure your financial future.",
      features: [
        "Equity participation",
        "401k matching",
        "Life insurance",
        "Disability coverage",
      ],
    },
  ];
  return (
    <div>
      <section className="py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-[48px] font-bold text-gray-800 mb-6">
              Benefits & Perks
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best
              work and live their best lives.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-sm ${whiteBG}`}
              >
                <div className="flex items-center justify-center flex-col">
                  <div
                    className={`text-3xl mb-6  ${accentColor} text-white rounded-xl p-3`}
                  >
                    {benefit.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-[#1A212D] mb-4">
                    {benefit.title}
                  </h2>
                  <p className={`${textLightGray} mb-6 text-center`}>
                    {benefit.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`mr-2 ${accentColor} rounded-full h-2 w-2 mt-2`}
                      ></span>
                      <span className={`${textLightGray}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
