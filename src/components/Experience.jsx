import React from "react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative border-l border-gray-700">
          {experience.map((exp) => (
            <div key={exp.id} className="ml-6 mb-10">
              <div className="absolute w-3 h-3 bg-teal-400 rounded-full mt-2 -left-1.5"></div>

              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} • {exp.period}</p>

              <p className="text-gray-300 mt-2">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-800 text-sm px-2 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
