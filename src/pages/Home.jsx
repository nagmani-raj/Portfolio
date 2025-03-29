import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Typed from "typed.js";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  // Reference for Typed.js
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Web Designer", "Digital Marketer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Clean up to destroy instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* === Left Side Text Section === */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Hi, There 👏
          </h1>
          <p className="text-3xl mb-2">
            My name is{" "}
            <span className="text-4x2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-yellow-400 dark:to-red-500 mb-6">
              Nagmani Raj
            </span>
          </p>
          <p className="text-xl text-gray-300 mb-6">
          <span className="text-red-500 font-bold">And</span>, I am a passionate <br />
            <span ref={typedRef} className="text-purple-400">|</span> 🚀
          </p>

          {/* === Social Media Links === */}
          <div className="flex space-x-4 text-2xl justify-center lg:justify-start">
            <a
              href="https://github.com/nagmani-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nagmani-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nagmani-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/nagmani-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* === Right Side Profile Picture === */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.img
            src={profilePic}
            alt="Nagmani Raj"
            className="w-64 h-64 rounded-full border-4 border-black shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
