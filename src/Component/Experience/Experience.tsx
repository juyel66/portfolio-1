

import {  GraduationCap, Rocket } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "MERN Stack Intern (Full-Time)",
    company: "Softvance Agency",
    duration: "July 2024 – September 2024",
    icon: <GraduationCap size={22} />,
    description:
      "Completed a full-time professional internship focused on MERN Stack development. Worked on real-world projects, REST APIs, authentication systems, MongoDB database design, and modern React UI with Tailwind CSS.",
  },
  {
    id: 2,
    title: "Full Stack Developer (Full-Time)",
    company: "Join Venture AI",
    duration: "October 1, 2024 – Present",
    icon: <Rocket size={22} />,
    description:
      "Working as a full-time Full Stack Developer building AI-powered web platforms, dashboards, APIs and payment-enabled SaaS systems. Responsible for both frontend (React, TypeScript, Tailwind) and backend (Node.js, Express, MongoDB) development.",
  },
];

const Experience = () => {
  return (
    <div className="mt-20 mb-20 px-5 text-white">
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-2xl md:text-3xl text-center font-bold border-b-2 border-[#64B5F6] pb-2">
          My <span className="text-[#64B5F6]">Experience</span>
        </h1>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-[#64B5F6] transition-all duration-300 hover:shadow-lg hover:shadow-[#64B5F6]/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#64B5F6]/20 flex items-center justify-center text-[#64B5F6]">
                {exp.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
              </div>
            </div>

            <p className="text-xs text-[#64B5F6] mb-3">{exp.duration}</p>

            <p className="text-sm text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
