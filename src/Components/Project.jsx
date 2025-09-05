import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built using React, Tailwind CSS, and deployed with GitHub Pages. Includes sections like About, Skills, Projects, and Contact.",
    tech: ["React", "Tailwind CSS", "AOS"],
    link: "https://deepak-portfolio-khaki.vercel.app/",
    image: "/images/Portfolio_pic.jpg",
  },
  {
    title: "GearPro.",
    description:
      "A full-stack e-commerce web app with cart, authentication, and product filtering. Built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://gearpro.vercel.app/",
    image: "/images/gearpro_pic.jpg",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 dark:text-white">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
        Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg 
                       bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-[2px]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Inner Container */}
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl flex flex-col h-full">
              
              {/* Image Section - Fixed Height */}
              <div className="relative overflow-hidden h-56 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-semibold">{project.title}</p>
                </div>
              </div>

              {/* Content Section - Evenly spaced */}
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full 
                                   bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                                   font-medium shadow-md transition-transform duration-300 hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button at bottom */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-lg
                             bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                             hover:opacity-90 transition-opacity"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
