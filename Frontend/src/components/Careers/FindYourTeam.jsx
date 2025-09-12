import imageSvg from "../../assets/images/Image.svg";

const FindYourTeam = () => {
  const teams = [
    {
      image: imageSvg,
      title: "Product & Design",
      description:
        "Shape our experiences that delight millions of travelers. From strategy to visual design and prototyping.",
      roles: ["Product Strategy", "UX/UI Design", "Research"],
      buttonText: "View Product & Design Roles",
    },
    {
      image: imageSvg,
      title: "Engineering & Data",
      description:
        "Build scalable systems and derive insights from data. Work with cutting-edge technology to power the future of travel.",
      roles: ["Full Stack Engineering", "Machine Learning", "Data Science"],
      buttonText: "View Engineering & Data Roles",
    },
    {
      image: imageSvg,
      title: "Growth & Partnerships",
      description:
        "Drive our growth and forge strategic partnerships. Scale our impact through marketing, sales, and business development.",
      roles: ["Business Development", "Analytics", "Content Strategy"],
      buttonText: "View Growth & Partnerships Roles",
    },
    {
      image: imageSvg,
      title: "Operations & Support",
      description:
        "Create exceptional customer experiences and operational excellence. Be the backbone that enables everything else to thrive.",
      roles: ["Customer Success", "Operations", "Quality Assurance", "Finance"],
      buttonText: "View Operations & Support Roles",
    },
  ];
  return (
    <div>
      <section className="py-16 px-6 sm:px-10 lg:px-20 ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[48px] font-bold text-gray-800 mb-4">
              Find Your Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[20px]">
              Each team brings unique expertise and perspectives to create
              extraordinary travel experiences.
            </p>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-black">
            {teams.map((team, index) => (
              <div
                key={index}
                className=" p-6 hover:scale-105 hover:bg-[#f1f2f4] transition-all duration-150 group"
              >
                <img src={team.image} className="rounded-t-xl shadow" />
                <h3 className="text-[24px] font-normal text-gray-800 mb-4">
                  {team.title}
                </h3>
                <p className="text-gray-600 mb-4">{team.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {team.roles.map((role, i) => (
                      <span
                        key={i}
                        className="bg-[#F1F2F4] px-3 py-1 rounded-full text-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <button className=" font-medium group-hover:bg-[#052461] group-hover:text-white bg-white rounded-lg shadow w-full h-auto p-2">
                  {team.buttonText} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindYourTeam;
