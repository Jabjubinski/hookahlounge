import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#132e34]/95 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white">
              HP KANDELAKI <span className="text-[#7a000a]">LOUNGE</span>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
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
              About
            </Link>
            <Link
              to="/menu"
              className="text-white hover:text-[#7a000a] transition-colors duration-300"
            >
              Menu
            </Link>
            <a
              href="#contact"
              className="text-white border-2 hover:bg-white hover:text-black transition-colors duration-300 border-white px-4 py-2"
            >
              Get in touch
            </a>
          </div>

          <div className="md:hidden z-60">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#7a000a] transition-colors focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#132e34]/90 backdrop-blur-md h-dvh transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-white text-3xl font-semibold hover:text-[#7a000a] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={toggleMenu}
            className="text-white text-3xl font-semibold hover:text-[#7a000a] transition-colors"
          >
            About
          </Link>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-white text-2xl border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
