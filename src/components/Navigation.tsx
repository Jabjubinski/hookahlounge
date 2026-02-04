import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#132e34]/95 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              HP KANDELAKI <span className="text-[#7a000a]">LOUNGE</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8 items-center rounded-sm">
            <Link
              to="/"
              className="text-white hover:text-[#7a000a] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-white hover:text-[#7a000a] transition-colors duration-300"
            >
              about
            </Link>

            <a
              href="#contact"
              className="text-white border-2 hover:bg-white hover:text-black transition-colors duration-300 border-white px-2 py-2.5"
            >
              Get in touch
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#7a000a] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="text-white block py-2 hover:text-[#7a000a] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-white block py-2 hover:text-[#7a000a] transition-colors duration-300"
            >
              about
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
