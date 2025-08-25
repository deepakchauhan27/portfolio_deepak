function About() {
  return (
    <section
      id="about"
      className="py-5 px-3 md:px-20 
      text-black w-4/4 flex flex-col justify-center"
      // data-aos="fade-up"
    >
      <h2
        className="text-xl px-20 md:text-2xl font-mono mb-6 text-center justify-center"
        data-aos="fade-up"
      >
        About Me
      </h2>

      <p
        className="text-sd leading-relaxed text-justify px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Hello! I'm{" "}
        <span className="font-mono text-indigo-500">
          Deepak Chauhan
        </span>
        , a passionate and driven web developer who loves turning ideas into
        interactive and responsive digital experiences. I specialize in{" "}
        <strong>frontend development</strong>, particularly with technologies
        like <strong>React.js, Tailwind CSS, and JavaScript</strong>.
      </p>

      <p
        className="text-sd leading-relaxed mt-4 text-justify px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Currently, I'm pursuing my studies and constantly learning new tools and
        frameworks to improve my development skills. I enjoy solving real-world
        problems with code and have a strong interest in modern UI/UX design.
      </p>

      <p
        className="text-sd leading-relaxed mt-4 text-justify px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Outside of tech, I love playing cricket, exploring new technologies, and
        collaborating with other developers on creative projects.
      </p>
    </section>
  );
}

export default About;
