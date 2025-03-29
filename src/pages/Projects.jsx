// src/pages/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// === Project Data Array ===
const frontendProjects = [
  {
    id: 1,
    title: "Registration Form",
    description: "A responsive registration form built using HTML, CSS, and JavaScript.",
    logo: "/Nagmani.png",
    link: "https://nagmani-raj.github.io/Registration-Form/",
    github: "https://github.com/nagmani-raj/Registration-Form",
  },
  {
    id: 2,
    title: "Login Page",
    description: "A login page built with HTML, CSS, and JavaScript.",
    logo: "/Nagmani.png",
    link: "https://github.com/nagmani-raj/login-page",
    github: "https://github.com/nagmani-raj/login-page",
  },
];

const fullStackProjects = [
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills, projects, and achievements.",
    logo: "/Nagmani.png",
    link: "https://github.com/nagmani-raj/amazon_clone",
    github: "https://github.com/nagmani-raj/amazon_clone",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "An e-commerce platform with an admin panel built using MERN stack.",
    logo: "/Nagmani.png",
    link: "https://github.com/nagmani-raj/ecommerce",
    github: "https://github.com/nagmani-raj/ecommerce",
  },
];

const backendProjects = [
  {
    id: 5,
    title: "Attendance Tracker",
    description: "A backend API for an attendance tracking system using Node.js and MongoDB.",
    logo: "/Nagmani.png",
    link: "https://github.com/nagmani-raj/attendance-tracker",
    github: "https://github.com/nagmani-raj/attendance-tracker",
  },
];

// === Framer Motion Animation ===
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Projects = () => {
  // === Section Render Function ===
  const renderProjects = (projects, sectionTitle) => (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          {sectionTitle}
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:border-blue-500 transition"
          >
            {/* === Project Logo === */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-48 bg-black flex items-center justify-center"
            >
              <img
                src={project.logo}
                alt={project.title}
                className="h-24 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* === Project Content === */}
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* === GitHub Icon Section === */}
              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* === Section Heading === */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            🚀 My Projects
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Explore my collection of projects in Frontend, Full Stack, and Backend.
          </p>
        </motion.div>

        {/* === Render Frontend Projects === */}
        {renderProjects(frontendProjects, "🎨 Frontend Projects")}

        {/* === Render Full Stack Projects === */}
        {renderProjects(fullStackProjects, "💻 Full Stack Projects")}

        {/* === Render Backend Projects === */}
        {renderProjects(backendProjects, "⚙️ Backend Projects")}
      </div>
    </section>
  );
};

export default Projects;
