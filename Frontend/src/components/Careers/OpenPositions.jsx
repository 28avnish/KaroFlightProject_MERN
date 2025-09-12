import React, { useState } from "react";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const accentColor = "bg-[#FF621F]";
const whiteBG = "bg-[#FFFFFF]";
const textWhite = "text-white";

const OpenPositions = () => {
  const jobs = [
    {
      title: "Senior Frontend Engineer",
      description:
        "Build beautiful, performant user interfaces that delight millions of travelers worldwide.",
      location: "San Francisco",
      posted: "Posted 3d ago",
      salary: "₹140k - ₹180k",
      team: "Engineering",
      tags: ["React", "TypeScript", "GraphQL", "CSS"],
      labels: ["New", "Hybrid"],
    },
    {
      title: "Product Designer",
      description:
        "Design intuitive experiences that make travel planning effortless and enjoyable.",
      location: "Remote",
      posted: "Posted 5d ago",
      salary: "₹140k - ₹180k",
      team: "Design",
      tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
      labels: ["Urgent", "Remote"],
    },
    {
      title: "Growth Marketing Manager",
      description:
        "Drive user acquisition and engagement through data-driven marketing campaigns.",
      location: "New York",
      posted: "Posted 7d ago",
      salary: "₹140k - ₹180k",
      team: "Marketing",
      tags: ["Performance Marketing", "Analytics", "A/B Testing", "SEO"],
      labels: ["Hybrid"],
    },
    {
      title: "Data Scientist",
      description:
        "Extract insights from travel data to improve personalization and business decisions.",
      location: "Remote",
      posted: "Posted 2d ago",
      salary: "₹140k - ₹180k",
      team: "Engineering",
      tags: ["Python", "Machine Learning", "SQL", "Statistics"],
      labels: ["New", "Remote"],
    },
  ];

  const uniqueTeams = ["All Teams", ...new Set(jobs.map((job) => job.team))];
  const uniqueLocations = [
    "All Locations",
    ...new Set(jobs.map((job) => job.location)),
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredJobs = jobs.filter((job) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(term) ||
      job.team.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ||
      job.tags.some((tag) => tag.toLowerCase().includes(term));

    const matchesTeam =
      selectedTeam === "All Teams" || job.team === selectedTeam;

    const matchesLocation =
      selectedLocation === "All Locations" || job.location === selectedLocation;

    return matchesSearch && matchesTeam && matchesLocation;
  });

  return (
    <div>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="mt-2 text-[19px] text-gray-600">
              Join our mission to revolutionize travel. Find your perfect role
              and start making an <br /> impact.
            </p>
          </div>

          {/* Filters */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 items-center p-6 rounded-2xl ${whiteBG} shadow mb-5`}
          >
            {/* Search Input */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 sm:pr-6 md:pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Team Select */}
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="min-w-[200px] w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Teams</option>
              {uniqueTeams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>

            {/* Location Select */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="min-w-[200px] w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* Save Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 sm:px-10 md:px-12 py-2 rounded-lg w-full">
              Save Search
            </button>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Left */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A212D]">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {job.description}
                      </p>
                      <div className="flex gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <IoLocationOutline />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MdOutlineWatchLater /> <span>{job.posted}</span>
                        </span>
                        <span>{job.salary}</span>
                        <span className="flex items-center gap-1">
                          <IoPeopleOutline />
                          <span> {job.team}</span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {job.labels.map((label) => (
                          <span
                            key={label}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              label === "New"
                                ? `${accentColor} ${textWhite}`
                                : label === "Urgent"
                                ? "text-white bg-red-500/80"
                                : label === "Remote"
                                ? "border-gray-300 border text-gray-800"
                                : "border-gray-300 border text-gray-800"
                            }`}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          className={` text-sm px-4 py-1.5 rounded-lg ${accentColor} ${textWhite}`}
                        >
                          Apply Now
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm px-4 py-1.5 rounded-lg">
                          Quick Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No positions match your filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenPositions;
