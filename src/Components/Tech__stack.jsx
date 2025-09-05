import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function TechStack() {
  const tech = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-20 text-center overflow-hidden"
    >
      {/* Decorative Glowing Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Section Heading */}
      <h2
        className="relative text-3xl md:text-4xl font-bold mb-12  bg-clip-text text-white"
        data-aos="zoom-in-up"
      >
        Tech Stack
      </h2>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 z-10">
        {tech.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-[2px] rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
            hover:shadow-lg hover:shadow-indigo-500/30 transition duration-500"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Inner Card */}
            <div
              className="bg-white dark:bg-[#1f1f1f] rounded-xl flex flex-col items-center justify-center px-4 py-6 h-full
              transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
            >
              <div className="text-6xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
