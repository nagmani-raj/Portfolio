import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle Dark Mode with LocalStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <img
          src="/Nagmani.png"
          alt="Nagmani Logo"
          className="h-28 w-auto cursor-pointer" 
        />

        {/* Links Section */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>

          {/* 🌙 / ☀️ Dark/Light Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded-full transition duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
