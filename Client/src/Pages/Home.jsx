import React from "react";
import assets from "../assets/assets";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { container, item, smallItem } from "../utils/animations";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col justify-center items-center px-10 mt-8 mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="flex flex-wrap justify-between items-center md:px-10 w-full">
        {/* ---------- LEFT SIDE (TEXT) ---------- */}
        <div className="max-w-lg flex flex-col justify-center items-center md:items-start pace-y-5">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi,
          </motion.h1>

          <motion.p
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ashik Yusuf
            </span>
          </motion.p>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl font-medium dark:text-[#A3ADB8] tracking-wide"
          >
            <span className=" pr-2 animate-pulse">Web Developer</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed text-justify mt-4"
          >
            A passionate full-stack web developer specializing in the MERN
            stack. I build modern, responsive web applications with clean code
            and smooth performance.
          </motion.p>

          {/* ---------- BUTTONS ---------- */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mt-4"
          >
            <motion.a
              variants={smallItem}
              href="#contact"
              className="md:px-6 px-3 py-3 text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </motion.a>
            {/* Place your CV file (ASHIK_YUSUF_CTS.docx or .pdf) in the Client/public folder
                then use a root-relative href so the browser can download it. */}
            <motion.a
              variants={smallItem}
              href="/ASHIK_YUSUF_CTS.docx"
              download="ASHIK_YUSUF_RESUME.docx"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* ---------- RIGHT SIDE (IMAGE + EFFECTS) ---------- */}
        <motion.div
          variants={item}
          className="relative flex items-center justify-center px-5 mt-10 md:mt-0"
        >
          {/* Outer animated ring */}
          <div className="absolute w-72 h-72 rounded-full animate-spin-slow blur-[2px] opacity-75"></div>

          {/* Inner soft-glow gradient border */}
          <div className="relative flex items-center justify-center w-64 h-64 rounded-full   p-[4px] shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-700 ease-in-out hover:scale-105">
            <motion.img
              variants={item}
              src={assets.Ashikimg}
              alt="Ashik"
              className="w-full h-full rounded-full bg-transparent object-cover border-[6px] border-transparent"
            />
          </div>

          {/* Subtle floating glow */}
          <div className="absolute -z-10 w-80 h-80 bg-emerald-400/20 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>

      {/* ---------- SOCIAL ICONS ---------- */}
      <motion.div
        variants={container}
        className="flex items-center mt-8 justify-center gap-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full px-30 py-4 shadow-lg"
      >
        {/* LinkedIn Icon */}
        <motion.div
          variants={smallItem}
          className="transition-transform duration-300 hover:rotate-12"
        >
          <a href="https://www.linkedin.com/in/ashikyusuf13">
            <FaLinkedinIn className="text-white text-3xl cursor-pointer hover:text-yellow-400 transition-colors duration-300 outline-none" />
          </a>
        </motion.div>

        {/* GitHub Icon */}
        <motion.div
          variants={smallItem}
          className="transition-transform duration-300 hover:rotate-12"
        >
          <a href="https://github.com/Ashikyusuf13">
            <FaGithub className="text-white text-3xl cursor-pointer hover:text-yellow-400 transition-colors duration-300  outline-none" />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
