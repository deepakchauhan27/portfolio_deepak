function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-6 md:px-20 
      text-white w-full flex flex-col justify-center 
      rounded-2xl "
      data-aos="fade-up"
    >
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 rounded-2xl  opacity-30 animate-pulse"></div>

      <h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center 
        relative z-10 tracking-wide 
        hover:scale-105 transition-transform duration-300"
        data-aos="zoom-in"
      >
        About Me
      </h2>

      <p
        className="text-base md:text-lg leading-relaxed text-justify relative z-10 px-2 md:px-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hello! I'm{" "}
        <span className="font-semibold text-cyan-400">
          Deepak Chauhan
        </span>
        , a passionate and driven web developer who loves turning ideas into
        interactive and responsive digital experiences. I specialize in{" "}
        <strong className="text-indigo-300">frontend development</strong>, particularly with technologies
        like <strong className="text-indigo-300">React.js, Tailwind CSS, and JavaScript</strong>.
      </p>

      <p
        className="text-base md:text-lg leading-relaxed mt-6 text-justify relative z-10 px-2 md:px-12"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Currently, I'm pursuing my studies and constantly learning new tools and
        frameworks to improve my development skills. I enjoy solving real-world
        problems with code and have a strong interest in modern UI/UX design.
      </p>

      <p
        className="text-base md:text-lg leading-relaxed mt-6 text-justify relative z-10 px-2 md:px-12"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        Outside of tech, I love playing cricket, exploring new technologies, and
        collaborating with other developers on creative projects.
      </p>
    </section>
  );
}

export default About;
