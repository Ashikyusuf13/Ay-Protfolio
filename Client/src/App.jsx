import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import AllProjects from "./Pages/AllProjects";
import CustomCursor from "./Components/CustomCursor";

const App = () => {
  const location = useLocation();
  return (
    <div
      className="min-w-screen min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-blue-200
  dark:from-gray-800  dark:via-zinc-900  dark:to-gray-800
 transition-colors duration-500 ease-in-out dark:text-white"
    >
      <Toaster />

      <CustomCursor />
      {location.pathname === "/allprojects" ? null : <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
