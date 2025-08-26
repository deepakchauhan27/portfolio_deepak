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
    }, 3000); // faster rotation (3 sec)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 pt-20 md:pt-32 pb-10 font-mono text-white">
  {/* Left Content */}
  <div className="w-full md:w-1/2 px-6 flex flex-col mt-6 md:mt-0">
    <h2 className="typing-text text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Hello! I'm Deepak Chauhan
    </h2>

    <p className="font-semibold text-lg sm:text-xl md:text-2xl animate-fadeUp delay-200">
      I like{" "}
      <span
        className={`bg-indigo-800 px-3 py-1 rounded-2xl inline-block transition-all duration-300 transform
          ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        {words[index]}.
      </span>
    </p>

    {/* Contact Info */}
    <div className="flex flex-col text-sm sm:text-base gap-1 pt-3 animate-fadeUp delay-500">
      <div className="flex ">
        <FontAwesomeIcon className="pt-1 pr-1" icon={faEnvelope} />
        <h2>dchauhan2159@gmail.com</h2>
      </div>
      <h2>Mumbai, India</h2>
    </div>

    {/* Social Icons */}
    <div className="flex gap-6 text-2xl sm:text-3xl mt-5 animate-fadeUp delay-700 justify-center md:justify-start">
      <a
        href="https://www.linkedin.com/in/deepak-chauhan-69426622b/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-blue-600 hover:scale-125 hover:rotate-12 transition-transform duration-300"
        />
      </a>
      <a
        href="https://github.com/Code-walah-07"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-gray-400 hover:scale-125 hover:rotate-12 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.hackerrank.com/profile/dchauhan2159"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faHackerrank}
          className="text-green-600 hover:scale-125 hover:rotate-12 transition-transform duration-300"
        />
      </a>
    </div>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-center">
    <img
      className="h-44 sm:h-56 md:h-72 rounded-full border-4 border-white shadow-lg object-cover animate-float"
      src="./images/deepak_pic.jpg"
      alt="Deepak Chauhan"
    />
  </div>
</div>

  );
}

export default Banner;
