import React, { useState } from "react";
import { Link } from "react-router";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="bg-base-100 shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-primary">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-primary">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-primary">Register</Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-base-200">
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-base-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-3 bg-base-100 shadow-lg p-4 rounded-lg">
          <li>
            <Link to="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-primary" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-primary" onClick={() => setIsOpen(false)}>Register</Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-base-200">
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
