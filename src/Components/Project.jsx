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
  // {
  //   title: "Mini Google Lens",
  //   description:
  //     "A smart visual assistant app built in Python that detects objects, reads text, translates it, and speaks it back using AI and Streamlit.",
  //   tech: ["YOLOv5", "OCR", "TTS", "Streamlit"],
  //   link: "https://github.com/your-pylens",
  //   image: "/images/project3.jpg",
  // },
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 dark:text-white">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
      Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 bg-white dark:bg-[#1e1e1e]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
