import React from "react";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { container, item } from "../utils/animations";

const Skills = () => {
  // ordered from basic -> advanced
  const skill = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Github", icon: <FaGithub /> },
  ];
  return (
    <motion.div
      id="skills"
      className="flex flex-col gap-4 w-full mt-10 items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.p
        variants={item}
        className="md:text-6xl mt-20 text-5xl font-bold font-poppins text-gray-900 dark:text-white"
      >
        Skills
      </motion.p>

      <div className="flex flex-col w-full px-10 flex-wrap ">
        {/* skills list */}
        <motion.p
          variants={item}
          className=" text-xl text-blue-700 dark:text-white pt-3 pb-3 font-medium text-justify"
        >
          My Tech Stack
        </motion.p>
        <motion.p
          variants={item}
          className=" text-lg text-justify dark:text-[#A3ADB8]"
        >
          As a fresher, I am passionate about learning and building with modern
          web technologies. Here are the tools and frameworks I am most
          comfortable with:
        </motion.p>
        {/* skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
          {skill.map((itemSkill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex bg-gray-200 dark:hover:bg-gray-800 flex-col items-center gap-2  dark:bg-gray-800 rounded-xl p-4 shadow-sm transform transition-transform duration-200 hover:scale-105"
            >
              <div className="text-blue-500 text-4xl">{itemSkill.icon}</div>
              <span className="text-lg font-medium text-blue-700 dark:text-[#A3ADB8]">
                {itemSkill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
