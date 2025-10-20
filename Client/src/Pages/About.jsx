import React from "react";
import assets from "../assets/assets";
import Ashik2 from "../assets/photo2.jpg";
import { motion } from "motion/react";
import { container, item } from "../utils/animations";

const About = () => {
  return (
    <motion.div
      id="about"
      className="flex w-full flex-col gap-4 px-10 mt-25 mb-10 items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.p
        variants={item}
        className="text-5xl mt-20 font-poppins text-gray-900 md:text-6xl font-bold  dark:text-white"
      >
        About
      </motion.p>

      <div className="md:flex w-full flex-wrap justify-around items-center gap-8">
        {/* img */}

        <motion.img
          variants={item}
          src={Ashik2}
          alt=""
          className="w-66 rounded-lg m-5"
        />
        {/*  content */}

        <motion.p
          variants={item}
          className="max-w-2xl text-lg text-justify text-gray-700 dark:text-[#A3ADB8]"
        >
          Hi, <span className="text-blue-800 font-bold">I'm Ashik </span>, a
          final year Computer Science student with an interest in full stack web
          development, mainly using the MERN stack (MongoDB, Express.js,
          React.js, Node.js). I am learning these technologies from online
          platforms like YouTube and improving my knowledge step by step. I know
          the basic concepts clearly and consider myself at an intermediate
          level in this field. I am a self-learner, hardworking, and always
          ready to learn new things. I like working on simple ideas to improve
          my skills and become better every day. I can speak Tamil and English.
          My English is at a medium level, but I am trying to improve it by
          practicing regularly
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
