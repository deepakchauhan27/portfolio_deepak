import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./Banner.css"; // custom animations

function Banner() {
  const words = ["Coding", "Web Developing", "Frontend Development", "Cricket"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 300);
    }, 3000); // Rotate words every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 pt-20 md:pt-32 pb-10 font-mono text-white">
      {/* -------- Left Content -------- */}
      <div className="w-full md:w-1/2 px-5 flex flex-col mt-6 md:mt-0 text-center md:text-left">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 
  bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 
  bg-clip-text text-transparent animate-gradient"
        >
          Hello! I'm Deepak Chauhan
        </h2>

        {/* Animated Word Rotation */}
        <p className="font-semibold text-lg sm:text-xl md:text-2xl animate-fadeUp delay-200">
          I like{" "}
          <span
            className={`px-3 py-1 rounded-2xl inline-block transition-all duration-300 transform
              bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md
              ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            {words[index]}.
          </span>
        </p>

        {/* Contact Info */}
        <div className="flex flex-col text-sm sm:text-base gap-1 pt-4 animate-fadeUp delay-500">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FontAwesomeIcon className="text-indigo-400" icon={faEnvelope} />
            <span>dchauhan2159@gmail.com</span>
          </div>
          <span className="text-gray-300">Mumbai, India</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl sm:text-3xl mt-5 animate-fadeUp delay-700 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/deepak-chauhan-69426622b/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/deepakchauhan27"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.hackerrank.com/profile/dchauhan2159"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300 text-green-500"
          >
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start animate-fadeUp delay-900">
          <a
            href="/Deepak_Chauhan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium shadow-lg transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg font-medium shadow-lg transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* -------- Right Image -------- */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            className="h-44 sm:h-56 md:h-72 rounded-full border-4 border-white shadow-xl object-cover animate-float hover:scale-105 transition-transform duration-500"
            src="./images/deepak_pic.jpg"
            alt="Deepak Chauhan"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 blur-md opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
