import React from "react";
import { motion } from "framer-motion";

// === Skill Array ===
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "Express JS",
  "MongoDB",
  "NextJS",
  "Bootstrap",
  "Tailwind CSS",
  "Web Design",
  "MySQL",
  "Java",
];

// === Experience Array ===
const experiences = [
  {
    title: "Internship at Google",
    position: "Full Stack Developer",
    icon: "🏢",
  },
  {
    title: "Coding Club Leader",
    position: "Coding Commandos",
    icon: "📚",
  },
  {
    title: "Built Bagrit",
    position: "Eco-Friendly E-commerce Platform",
    icon: "💡",
  },
  {
    title: "Bihar Startup Pitching Finalist",
    position: "Bagrit",
    icon: "🏆",
  },
];

const About = () => {
  // === Animation Variants for Skills ===
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      backgroundColor: "#0f172a",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* === Main Section === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me 👨‍💻</h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Hi, I’m <span className="text-blue-400 font-bold">Nagmani Raj</span>,
            a passionate web developer with experience in building dynamic and
            responsive websites. I love exploring new technologies and solving
            real-world problems with creative solutions. 🚀
          </p>
        </motion.div>

        {/* === Skill Section with Epic Animation === */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 relative mb-12 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">⚡ Skills</h3>
          <div className="relative w-full h-full flex flex-wrap gap-4 justify-center items-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={skillVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-br from-blue-500 to-green-400 text-black text-sm font-bold px-4 py-2 rounded-full shadow-xl hover:shadow-lg transition-all cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Timeline with Experience Box === */}
        <div className="relative w-full flex flex-col items-center">
          <div className="text-4x2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-yellow-400 dark:to-red-500 mb-6">
            <h1>EXPERIENCE</h1>
          </div>
          <hr className="w-full border-t-2 border-gray-700 my-4" />
          <div className="w-full max-w-4xl relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative w-full lg:w-1/2 mb-8 p-4 rounded-lg shadow-lg bg-gray-800 border ${
                  index % 2 === 0
                    ? "ml-auto border-blue-500"
                    : "mr-auto border-red-500"
                }`}
              >
                <h3 className="text-lg font-bold text-white">
                  {exp.icon} {exp.title}
                </h3>
                <p className="text-gray-300 text-sm">{exp.position}</p>
                <div
                  className={`absolute top-1/2 w-5 h-5 bg-red-500 border-4 border-gray-900 rounded-full transform ${
                    index % 2 === 0
                      ? "-left-6 lg:left-auto lg:-right-6"
                      : "-right-6 lg:right-auto lg:-left-6"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
