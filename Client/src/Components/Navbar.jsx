import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Navbar = () => {
  const [opensidebar, setOpenSideBar] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className=" sticky z-50 top-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full rounded-full backdrop-blur-2xl shadow-2xl py-6 items-center justify-between flex">
          {/*  one side */}
          <div className="md:px-20 xl:px-32 px-6">
            <a
              href="#"
              className="font-bold text-4xl font-poppins text-blue-700 dark:text-white cursor-pointer"
            >
              Ashik
            </a>
          </div>

          {/* right side */}
          <nav className="hidden font-poppins text-gray-900 dark:text-white md:flex space-x-10 lg:space-x-16 xl:space-x-24 2xl:space-x-32 ">
            <a href="#" className="cursor-pointer hover:underline  font-bold">
              Home
            </a>
            <a
              href="#about"
              className="cursor-pointer hover:underline  font-bold"
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:underline  font-bold"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:underline  font-bold"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer hover:underline  font-bold"
            >
              Contact
            </a>
          </nav>

          {/* hamburger menu */}

          <button>
            <img
              onClick={() => setOpenSideBar(true)}
              src={assets.menu_icon}
              alt="menu"
              className="w-8 cursor-pointer md:hidden mr-8 dark:invert"
            />
          </button>

          {/* theme btn */}
          <div className="md:mr-20 xl:mr-32 mr-6 border rounded-full p-1 border-black dark:border-white">
            {theme === "dark" ? (
              <img
                onClick={() => setTheme("light")}
                src={assets.sun_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
            ) : (
              <img
                src={assets.moon_icon}
                alt=""
                className="w-6 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </div>

        {/* mobile screen */}

        <aside
          className={`md:hidden flex flex-col p-10 z-50 transform w-64 text-white bg-slate-900 fixed top-0 right-0 h-screen gap-5 shadow-lg  duration-300 ease-in-out ${
            opensidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* close icon */}

          <img
            src={assets.close_icon}
            alt=""
            className="md:hidden w-6 cursor-pointer absolute top-6 right-6"
            onClick={() => setOpenSideBar(false)}
          />

          <a
            onClick={() => setOpenSideBar(false)}
            href="#"
            className="cursor-pointer hover:underline hover:text-blue-900 font-bold"
          >
            Home
          </a>
          <a
            onClick={() => setOpenSideBar(false)}
            href="#about"
            className="cursor-pointer hover:underline hover:text-blue-900 font-bold"
          >
            About
          </a>
          <a
            onClick={() => setOpenSideBar(false)}
            href="#skills"
            className="cursor-pointer hover:underline hover:text-blue-900 font-bold"
          >
            Skills
          </a>
          <a
            onClick={() => setOpenSideBar(false)}
            href="#projects"
            className="cursor-pointer hover:underline hover:text-blue-900 font-bold"
          >
            Projects
          </a>
          <a
            onClick={() => setOpenSideBar(false)}
            href="#contact"
            className="cursor-pointer hover:underline hover:text-blue-900 font-bold"
          >
            Contact
          </a>
        </aside>
      </div>
    </motion.header>
  );
};

export default Navbar;
