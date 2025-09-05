function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-6 md:px-12 w-full flex flex-col justify-center overflow-hidden rounded-2xl"
      data-aos="fade-up"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-black/40 to-purple-900/40 backdrop-blur-lg rounded-2xl opacity-90"></div>

      {/* Decorative Animated Glow */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Heading */}
      <h2
        className="relative z-10 text-3xl md:text-4xl font-bold mb-6 text-center tracking-wide text-white
        hover:scale-105 transition-transform duration-300"
        data-aos="zoom-in"
      >
        About Me
      </h2>

      {/* Paragraph 1 */}
      <p
        className="relative z-10 text-base md:text-lg leading-relaxed text-justify md:px-6 text-gray-200"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hello! I'm{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
          Deepak Chauhan
        </span>
        , a passionate and driven web developer who loves turning ideas into
        interactive and responsive digital experiences. I specialize in{" "}
        <span className="font-semibold text-indigo-300">frontend development</span>, particularly with
        technologies like{" "}
        <span className="text-indigo-300">React.js, Tailwind CSS, and JavaScript</span>.
      </p>

      {/* Paragraph 2 */}
      <p
        className="relative z-10 text-base md:text-lg leading-relaxed mt-6 text-justify md:px-6 text-gray-300"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Currently, I'm pursuing my studies and constantly learning new tools and
        frameworks to enhance my development skills. I enjoy solving real-world
        problems with code and have a strong interest in crafting{" "}
        <span className="text-cyan-400 font-medium">modern UI/UX designs</span>.
      </p>

      {/* Paragraph 3 */}
      <p
        className="relative z-10 text-base md:text-lg leading-relaxed mt-6 text-justify md:px-6 text-gray-300"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        Outside of tech, I love{" "}
        <span className="text-purple-400 font-medium">playing cricket</span>, exploring new technologies,
        and collaborating with other developers on exciting and creative projects.
      </p>

      {/* Call-to-Action
      <div
        className="relative z-10 mt-8 flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg
          hover:scale-105 transition-transform duration-300"
        >
          Let's Connect
        </a>
      </div> */}
    </section>
  );
}

export default About;
