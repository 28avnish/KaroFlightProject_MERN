import React from "react";

const BlogContent = ({ content }) => {
  const defaultContent = {
    introduction:
      "Planning your next adventure shouldn't break the bank or overwhelm your schedule. Whether you're a seasoned traveler or planning your first major trip, these essential strategies will help you save money, travel smarter, and maximize every moment of your journey.",
    sections: [
      {
        title: "Timing is Everything: When to Book for Maximum Savings",
        content:
          "The secret to affordable travel lies in strategic timing. Airlines typically release their best deals 6-8 weeks before domestic flights and 8-12 weeks before international departures. However, this isn't a hard rule—flexibility is your greatest asset.",
        points: [
          "Tuesday afternoons often see price drops as airlines adjust to competitor pricing",
          "Off-season travel can save you 30-50% on flights and accommodations",
          "Mid-week departures (Tuesday-Thursday) are typically cheaper than weekend flights",
          "Red-eye flights offer significant savings for those who can handle the schedule",
        ],
        quote:
          "The best time to book a flight is when you find a good deal that fits your budget and schedule. Don't overthink it—great prices can appear and disappear quickly.",
      },
      {
        title: "Mastering the Art of Flexible Travel",
        content:
          "Flexibility in your travel dates and destinations opens up a world of savings opportunities. Consider these approaches:",
        subsections: [
          {
            title: "Use Flexible Date Search Tools",
            content:
              "Most booking platforms offer calendar views that show price variations across different dates. This bird's-eye view can reveal significant savings just a day or two away from your preferred dates.",
          },
          {
            title: "Consider Alternative Airports",
            content:
              "Major cities often have multiple airports, and smaller regional airports can offer substantial savings. Factor in transportation costs, but don't overlook these alternatives:",
            points: [
              "Secondary airports often have lower fees and more competitive pricing",
              "Regional carriers frequently offer better deals than major airlines",
              "Ground transportation might add time but save significant money",
            ],
          },
        ],
      },
      {
        title: "Essential Safety and Preparation Tips",
        content:
          "Smart travel preparation goes beyond saving money—it's about ensuring a smooth, safe, and enjoyable experience from start to finish.",
        subsections: [
          {
            title: "Document Preparation",
            points: [
              "Check passport expiration dates (many countries require 6 months validity)",
              "Research visa requirements well in advance",
              "Make digital and physical copies of important documents",
              "Register with your embassy for international travel",
            ],
          },
          {
            title: "Health and Safety Considerations",
            content:
              "Your health and safety should never be compromised for savings. Research your destination's health requirements, vaccination needs, and safety conditions. Travel insurance might seem like an extra expense, but it's invaluable protection against unexpected medical costs or trip disruptions.",
          },
        ],
      },
      {
        title: "Airport Navigation and Experience Tips",
        content:
          "The airport experience can make or break your trip's start. These strategies will help you navigate airports like a seasoned traveler:",
        points: [
          "Check in online and download mobile boarding passes",
          "Join TSA Precheck or Global Entry for faster security screening",
          "Pack smart with TSA-compliant liquids and electronics easily accessible",
          "Arrive early but not excessively—2 hours for domestic, 3 hours for international",
        ],
        subsections: [
          {
            title: "Making the Most of Layovers",
            content:
              "Long layovers don't have to be a burden. Many airports offer excellent amenities, and some cities allow visa-free transit tours. Research your layover airport in advance—you might discover unexpected opportunities to explore a new destination.",
          },
        ],
      },
      {
        title: "Building Long-term Travel Success",
        content:
          "Sustainable travel habits develop over time. Start building relationships with preferred airlines and hotel chains, but don't become so loyal that you miss better deals elsewhere. Track your travel patterns and preferences to make increasingly informed decisions.",
      },
    ],
    conclusion: [
      "Remember, the best travel deal is one that fits your budget, schedule, and comfort preferences. Don't sacrifice your peace of mind for minor savings, but don't overpay for unnecessary luxury either. The perfect balance is different for every traveler.",
      "Happy travels, and remember—every journey begins with a single step, and every expert traveler was once a beginner. Start planning your next adventure today!",
    ],
  };

  const articleContent = content || defaultContent;

  return (
    <div className="mt-10 mb-5">
      {/* Introduction */}
      <p className="mb-4 text-base">{articleContent.introduction}</p>

      {/* Main Sections */}
      {articleContent.sections?.map((section, index) => (
        <div key={index} className="mb-6">
          <h1 className="font-bold mb-4 text-xl md:text-2xl">
            {section.title}
          </h1>

          {section.content && (
            <p className="mb-4 text-base">{section.content}</p>
          )}

          {/* Main Points */}
          {section.points && (
            <div className="mb-4 ml-2 md:ml-6 flex flex-col gap-5 text-base">
              {section.points.map((point, pointIndex) => (
                <p key={pointIndex}>
                  <b>{point.split(" ")[0] + " " + point.split(" ")[1]}</b>{" "}
                  {point.split(" ").slice(2).join(" ")}
                </p>
              ))}
            </div>
          )}

          {/* Quote */}
          {section.quote && (
            <div className="pl-4 md:pl-6 border-l-4 py-4 mb-4 text-[#F97A1F] italic text-base">
              <p>"{section.quote}"</p>
            </div>
          )}

          {/* Subsections */}
          {section.subsections?.map((subsection, subIndex) => (
            <div key={subIndex} className="mb-4">
              <h2 className="font-semibold mb-4 text-lg md:text-xl">
                {subsection.title}
              </h2>

              {subsection.content && (
                <p className="mb-4 text-base">{subsection.content}</p>
              )}

              {subsection.points && (
                <div className="mb-7 pl-4 md:pl-9 gap-3 flex flex-col text-base">
                  {subsection.points.map((point, pointIndex) => (
                    <p key={pointIndex}>{point}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Conclusion */}
      {articleContent.conclusion?.map((paragraph, index) => (
        <p key={index} className={index === 0 ? "text-base" : "my-5 text-base"}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default BlogContent;
