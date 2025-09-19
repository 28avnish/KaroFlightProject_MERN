import heroImg from "../../assets/images/heroImg.svg";

const heroGradient =
  "linear-gradient(to bottom right, rgba(2,26,75,0.7) 0%, rgba(5,36,97,0.7) 50%, rgba(13,64,165,0.7) 100%)";
const accentColor = "bg-[#FF621F]";
const accentColorText = "text-[#FF621F]";
const textWhite = "text-white";

const Hero = () => {
  return (
    <div>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Travel landscape"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div
          className="absolute inset-0  flex items-center justify-center flex-col px-4 z-10"
          style={{ background: heroGradient }}
        >
          {/* Main Heading */}
          <h1
            className={`max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-semibold ${textWhite} mb-4 lg:mb-6`}
          >
            Grow your career <br /> with{" "}
            <span className={`${accentColorText}`}>KaroFlight</span>
          </h1>

          {/* Gradient Text Box */}
          <div
            className={`w-full max-w-3xl rounded-lg ${textWhite} py-3 px-4 mb-6 lg:mb-8`}
          >
            <p className="text-base sm:text-sm md:text-[23px] font-extralight text-center">
              Join a team that's revolutionizing travel technology. Build
              meaningful products, work with amazing people, and make an impact
              that scales globally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6 lg:mb-8">
            <button
              className={`${accentColor} rounded-lg py-3 px-6 ${textWhite} font-medium text-base sm:text-lg transition-all hover:opacity-90`}
            >
              Browse Open Roles
            </button>
            <button
              className={`bg-gray-500/30 rounded-lg py-3 px-6 ${textWhite}  text-base sm:text-lg  hover:bg-gray-400/40`}
            >
              Learn About Our Culture
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            <div className={` ${textWhite} text-sm md:text-base`}>
              500+ Team Members
            </div>
            <div className={` ${textWhite} text-sm md:text-base`}>
              Best Places to Work 2024
            </div>
            <div className={` ${textWhite} text-sm md:text-base`}>
              15+ Countries
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
