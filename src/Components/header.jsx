import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = ["About", "Education", "Skills", "Projects"];

  // Detect scroll for sticky header shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPosition = window.scrollY + 150; // Offset for better detection
      let current = "";
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition) {
          current = navItems[index];
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          isMenuOpen
            ? "bg-gray-900 shadow-lg" // Solid background when menu is open
            : isScrolled
            ? "backdrop-blur-md bg-black/50 shadow-lg" // Blurred background when scrolled
            : "bg-transparent"
        } text-white`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="relative text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          DC
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-lg font-medium gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative px-4 py-2 transition-all duration-300 rounded-xl overflow-hidden group
                ${
                  activeSection === item
                    ? "text-indigo-400 font-semibold"
                    : "text-gray-200 hover:text-white"
                }`}
            >
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-indigo-800 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center z-[-1] rounded-xl"></span>
              {item}
            </a>
          ))}
        </nav>

        {/* Resume Link (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/Deepak_Chauhan_Resume.pdf"
            download="Deepak_Chauhan_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            <FontAwesomeIcon icon={faDownload} />
            Resume
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Side Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-6 p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="text-white hover:text-indigo-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === item
                      ? "bg-indigo-700 text-white"
                      : "hover:bg-indigo-800 hover:text-white text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Resume Button in Mobile Menu */}
            <a
              href="/Deepak_Chauhan_Resume.pdf"
              download="Deepak_Chauhan_Resume.pdf"
              className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header_class;
