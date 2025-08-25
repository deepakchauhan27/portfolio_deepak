function Education() {
  const timeline = [
    {
      degree: "Master Of Computer Application",
      institute: "Thakur Institute of Management Studies,Career Development and Research, Mumbai",
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
    <section
      id="education"
      className="py-20 px-6 md:px-20 text-black"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
        Education
      </h2>

      <div className="relative border-l-[2px] border-orange-200 pl-6 ml-3">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="mb-12 relative group"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-ingigo-300 border-4 border-white dark:border-[#0f172a] rounded-full -left-[23px] top-2 z-10 shadow-md group-hover:scale-110 transition-transform duration-300"></div>

            {/* Card */}
            <div className="rounded-lg p-5 border border-gray-300 dark:border-gray-700 bg-transparent">
              <h3 className="text-xl font-semibold  mb-1">
                {item.degree}
              </h3>
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
        ))}
      </div>
    </section>
  );
}

export default Education;
