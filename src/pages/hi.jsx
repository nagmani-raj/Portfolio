import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
  "GSAP",
  "LocomotiveJS",
  "Web Design",
  "MySQL",
  "Java",
  "WEB",
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
  const controls = useAnimation();

  // === Skill Animation Controls ===
  useEffect(() => {
    controls.start({
      y: [0, -30, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden"
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

        {/* === Skill Section with 3D Parallax Effect === */}
        <div className="relative w-full h-[400px] overflow-hidden bg-transparent flex items-center justify-center mb-12">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-900/20 to-black/80 opacity-50"></div>
          <motion.div
            className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            animate={controls}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 15,
                  backgroundColor: "#1e40af",
                  boxShadow: "0 10px 30px rgba(59,130,246,0.8)",
                  transition: { duration: 0.5 },
                }}
                className="relative bg-gray-800 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-10 blur-lg rounded-xl"></div>
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* === Timeline with Experience Box === */}
        <div className="relative w-full flex flex-col items-center">
          <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            <h3>EXPERIENCE</h3>
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

        {/* === Background Glow Effect === */}
        <div className="absolute inset-0 w-full h-full bg-gradient-radial from-blue-900 via-transparent to-black opacity-30 blur-3xl z-0 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default About;
