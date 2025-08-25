import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header_class() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["About", "Education", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-transparent shadow-md"
          : "bg-transparent"
      } text-white`}
    >
      <div className="flex items-center justify-between px-6 py-4 backdrop:blur-2xl">
        
        {/* Logo with animation */}
        <div
          className="relative text-3xl font-bold text-indigo-800 px-3 py-2 rounded-2xl group cursor-pointer"
        >
          <span className="absolute inset-00 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center z-[-1] rounded-2xl"></span>
          <span className="relative">DC</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-md font-semibold">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 transition-all duration-100 ease-in-out 
                hover:text-white overflow-hidden rounded-2xl group"
            >
              <span className="absolute inset-0 bg-indigo-800 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center z-[-1] rounded-2xl"></span>
              {item}
            </a>
          ))}
        </nav>

        {/* Resume Link (Desktop) with same hover animation */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            className="relative text-lg font-semibold px-4 py-2 rounded-2xl group overflow-hidden"
          >
            <span className="absolute inset-0 bg-indigo-800 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center z-[-1] rounded-2xl"></span>
            <span className="relative">Resume</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-6 w-52 bg-indigo-300 shadow-lg rounded-xl flex flex-col gap-4 p-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:bg-indigo-800 px-3 py-2 rounded-md transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="bg-indigo-800 text-white text-center px-3 py-2 rounded-md hover:bg-indigo-800 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Header_class;
