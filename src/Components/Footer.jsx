import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [fade, setFade] = useState(true);

  // Backend URL - use localhost in dev, Render in prod
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-backend-j744.onrender.com/api/contact"
      : "http://localhost:5000/api/contact";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setFade(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("Error sending message ❌");
    }

    setTimeout(() => setFade(false), 2500);
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <footer className="dark:bg-[#05040d] text-white mt-16">
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 h-24"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full py-2 rounded"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-center transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                } ${
                  status.includes("✅")
                    ? "text-green-400"
                    : status.includes("❌")
                    ? "text-red-400"
                    : "text-gray-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-400">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/deepak-chauhan-69426622b/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
            </a>
            <a
              href="https://github.com/Code-walah-07"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-gray-400" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/dchauhan2159"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faHackerrank} className="text-green-500" />
            </a>
          </div>
          {/* Footer Bottom */}
          <div className="mt-6 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Deepak Chauhan. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
