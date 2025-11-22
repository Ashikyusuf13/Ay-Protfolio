import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { item } from "../utils/animations";

const AllProjects = () => {
  const projects = [
    {
      title: "Mern Authentication",
      description:
        "A full-stack web application that implements user authentication using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and access protected routes after authentication.",
      imageUrl: assets.Mern_auth,
      projectUrl: "https://mern-auth-sigma-ashen.vercel.app/",
    },

    {
      title: "LMS Platform",
      description:
        "An online Learning Management System (LMS) platform developed using MERN stack (MongoDB, Express.js, React.js, Node.js). It provides features for course management, user enrollment, progress tracking, and interactive learning experiences.",
      imageUrl: assets.Ademy,
      projectUrl: "https://ay-ademy.vercel.app/",
    },
    {
      title: "AY-GPT",
      description:
        "Ashik GPT is a MERN-based AI platform with Gemini/OpenAI chat, ImageKit image generation, Stripe payments, JWT authentication, encrypted passwords, and secure middleware-protected APIs.",
      imageUrl: assets.Aygpt,
      projectUrl: "https://ashik-gpt.vercel.app",
    },
  ];

  const Projects2 = [
    {
      title: "E-commerce Website",
      description:
        "An e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features product listings, a shopping cart, user authentication, and order management functionalities.",
      imageUrl: assets.Ecormerce,
      projectUrl: "https://shirtzone.netlify.app/",
    },
    {
      title: "STRONG PASSWORD GENERATOR",
      description:
        "A web application that generates strong and secure passwords based on user-defined criteria. Users can specify the length and character types (uppercase, lowercase, numbers, symbols) to create customized passwords for enhanced security.",
      imageUrl: assets.Password_generator,
      projectUrl: "https://zeroguess.netlify.app",
    },
    {
      title: "QR Code Generator",
      description:
        "A web application that allows users to generate QR codes for various types of data, such as URLs, text, contact information, and more. Users can customize the design and download the generated QR codes for personal or business use.",
      imageUrl: assets.qrcode,
      projectUrl: "https://scanspark.netlify.app",
    },
    {
      title: "Currency Converter",
      description:
        "A web application that provides real-time currency conversion rates between different currencies. Users can input an amount in one currency and receive the equivalent value in another currency based on the latest exchange rates.",
      imageUrl: assets.currency,
      projectUrl: "https://globarate.netlify.app",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col w-full items-center justify-center pt-10 mb-5"
    >
      <h1 className="text-4xl md:text-5xl font-bold">MERN Stack Projects</h1>

      <div className="flex flex-wrap mt-10 gap-8 px-4 md:px-10 w-full ">
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            variants={item}
            className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300"
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 md:h-56 lg:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  MERN
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl mt-10 font-bold">Projects</h1>

      <div className="flex flex-wrap mt-10 gap-8 px-4 md:px-10 w-full max-w-6xl">
        {Projects2.map((project, idx) => (
          <motion.article
            key={idx}
            variants={item}
            className="w-full  max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300"
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 md:h-56 lg:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default AllProjects;
