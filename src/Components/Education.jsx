import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      degree: "Master of Computer Application (MCA)",
      institute:
        "Thakur Institute of Management Studies, Career Development and Research, Mumbai",
      year: "2024 - Present",
      grade: "Pursuing",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc IT)",
      institute: "Thakur College of Science and Commerce, Mumbai",
      year: "2021 - 2024",
      grade: "CGPA: 8.43",
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institute: "Thakur College of Science and Commerce, Mumbai",
      year: "2019 - 2021",
      grade: "Percentage: 76.67%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "St Xavier's High School, Mumbai",
      year: "Up to 2019",
      grade: "Percentage: 71.8%",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 text-black dark:text-white bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Heading */}
      <h2
        className="relative text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 z-10"
        data-aos="fade-up"
      >
        Education
      </h2>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full opacity-40"></div>

        {/* Education Cards */}
        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg animate-pulse border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Connector Line Animation */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-indigo-500 opacity-50"></div>
              )}

              {/* Card */}
              <div
                className={`w-full md:w-[45%] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl z-10 ${
                  index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                }`}
              >
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.institute}
                </p>
                <p className="text-sm font-medium mt-2 text-gray-600 dark:text-gray-400">
                  {item.year}
                </p>
                <p className="text-sm mt-1 italic text-gray-500 dark:text-gray-400">
                  {item.grade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
