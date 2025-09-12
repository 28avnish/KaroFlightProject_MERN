import imageSvg from "../../assets/images/Image.svg";

const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-[#FFFFFF]";
const textLightGray = "text-gray-500";
const fadeGradient =
  "linear-gradient(to top, rgba(2,26,75,0.9) 0%, rgba(2,26,75,0.4) 50%, rgba(2,26,75,0) 100%)";

const WhyChooseKF = () => {
  const features = [
    {
      image: imageSvg,
      title: "Innovation at Scale",
      description:
        "Work on cutting-edge technology that impacts millions of travelers worldwide—from human-supervised recommendations to real-time booking systems.",
    },
    {
      image: imageSvg,
      title: "Growth & Learning",
      description:
        "Accelerate your career with mentorship programs, learning budgets, and opportunities to work with industry leaders.",
    },
    {
      image: imageSvg,
      title: "Global Impact",
      description:
        "Your work directly shapes the future of travel. Build products that connect people, cultures, and experiences across the globe.",
    },
    {
      image: imageSvg,
      title: "Work-Life Harmony",
      description:
        "Flexible remote work options, unlimited PTO, and a culture that prioritizes your wellbeing and personal growth.",
    },
  ];

  return (
    <div>
      <section className="py-16 px-6 sm:px-10 lg:px-20 ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold  mb-6">
              Why Choose KaroFlight?
            </h2>
            <p className={`text-lg ${textLightGray}`}>
              Discover what makes our workplace exceptional and why top talent
              chooses to build their careers with us.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group flex items-center justify-center"
              >
                <img
                  src={feature.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{ background: fadeGradient }}
                ></div>

                {/* Text Content */}
                <div className="absolute bottom-4 left-4 z-20 text-white gap-2 ">
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className={`${accentColor} rounded-xl w-[32px] h-[32px] flex items-center justify-center`}
                    >
                      <div
                        className={`h-[16px] w-[16px]  p-1 ${whiteBG} rounded-full`}
                      ></div>
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseKF;
