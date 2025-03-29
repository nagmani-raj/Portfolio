
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

// === Social Media Links ===
const socialLinks = [
  {
    id: 1,
    icon: <FaGithub className="text-white hover:text-gray-400 w-6 h-6" />,
    url: "https://github.com/nagmani-raj",
  },
  {
    id: 2,
    icon: <FaLinkedin className="text-blue-500 hover:text-blue-400 w-6 h-6" />,
    url: "https://www.linkedin.com/in/nagmani-raj",
  },
  {
    id: 3,
    icon: <FaInstagram className="text-pink-500 hover:text-pink-400 w-6 h-6" />,
    url: "https://www.instagram.com/nagmani_raj",
  },
  {
    id: 4,
    icon: <FaTwitter className="text-blue-400 hover:text-blue-300 w-6 h-6" />,
    url: "https://twitter.com/nagmani_raj",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // === Handle Input Change ===
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // === Handle Form Submit ===
  const handleSubmit = (e) => {
    e.preventDefault();

    // === EmailJS Config ===
    const serviceID = "Gaurav_910"; 
    const templateID = "template_1gwkhum"; 
    const publicKey = "i0_RWtY7AK1vUvVCe"; 

    // === Send Email ===
    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        alert("🎉 Message Sent Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      },
      (error) => {
        alert("⚠️ Error Sending Message. Please Try Again!");
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* === Why You Should Hire Me Section (Swapped) === */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center animate__animated animate__fadeInLeft">
          <h2 className="text-4xl font-bold mb-4 text-center text-purple-400">
            💡 Why You Should Hire Me
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed text-justify">
            I am{" "}
            <a
              href="/path-to-your-resume.pdf" 
              target="_blank"
              className="text-blue-400 italic font-bold hover:text-blue-300"
            >
              Nagmani Raj
            </a>
            , a skilled and passionate full-stack developer with expertise in
            modern web technologies such as React, Node.js, MongoDB, and
            Express. My experience in creating scalable and responsive
            applications allows me to contribute effectively to any project or
            organization.
          </p>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed text-justify">
            I have a proven track record of delivering high-quality code,
            collaborating with teams, and solving complex problems. With a
            strong focus on continuous learning and adapting to new
            technologies, I am ready to add value to your team.
          </p>
        </div>

        {/* === Contact Form Section (Swapped) === */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
            📩 Contact Me
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 animate__animated animate__zoomIn"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name *"
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              rows="5"
              className="p-3 rounded bg-gray-700 border border-gray-600 w-full"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition duration-300 animate__animated animate__pulse animate__infinite"
            >
              🚀 Send Message
            </button>
          </form>

          {/* === Social Media Icons === */}
          <div className="flex justify-center mt-8 space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transform hover:scale-125 transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
