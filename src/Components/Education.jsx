import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      degree: "Master Of Computer Application",
      institute:
        "Thakur Institute of Management Studies, Career Development and Research, Mumbai",
      year: "2024 - Present",
      grade: "Pursuing",
    },
    {
      degree: "Bachelor of Science Information Technology",
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
    <section id="education" className="py-20 px-6 md:px-20 text-black dark:text-white">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
        Education
      </h2>

      <div className="relative flex flex-col items-start px-20 md:px-5">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="mb-12 flex w-full"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Dot + Card */}
            <div className="relative ml-10 w-full">
              {/* Animated Dot */}
              <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"></div>

              {/* Card */}
              <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-5 transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.institute}
                </p>
                <p className="text-sm font-medium mt-1 text-gray-600 dark:text-gray-400">
                  {item.year}
                </p>
                <p className="text-sm mt-1 italic text-gray-500 dark:text-gray-400">
                  {item.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes growline {
          from { height: 0; }
          to { height: 100%; }
        }
      `}</style>
    </section>
  );
}

export default Education;
