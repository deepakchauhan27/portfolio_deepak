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
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 text-center dark:text-white"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-12"
        data-aos="zoom-in-up"
      >
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {tech.map((item, idx) => (
          <div
            key={idx}
            className="relative group p-[2px] rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="bg-white dark:bg-[#1f1f1f] rounded-xl flex flex-col items-center justify-center px-4 py-6 h-full transition-transform duration-500 transform group-hover:scale-105 group-hover:animate-pulse">
              <div className="text-6xl mb-2">{item.icon}</div>
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
