import React, { useState } from "react";
import { motion } from "motion/react";
import { container, item } from "../utils/animations";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0266645b-d2d8-4785-b72d-392df7a24f97",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      id="contact"
      className="flex w-full flex-col gap-4 px-10 mt-20 mb-10 items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h3
        variants={item}
        className="text-5xl mt-15 md:text-6xl font-poppins text-gray-900 dark:text-white font-bold "
      >
        Contact
      </motion.h3>

      <motion.form
        onSubmit={handleSubmit}
        variants={item}
        className="flex flex-col gap-4 w-full max-w-lg mt-10"
      >
        <div className="flex flex-col">
          <label className="font-bold mb-4">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            name="name"
            className="py-4 placeholder:text-gray-500 px-3 outline-none rounded-md border border-gray-300 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold mb-4">Email:</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your Email"
            className="py-4 placeholder:text-gray-500 px-3 outline-none rounded-md border border-gray-300 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold mb-4">Message:</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            required
            name="message"
            placeholder="Enter your message"
            className="py-4 placeholder:text-gray-500 px-3 outline-none rounded-md border border-gray-300 focus:border-blue-500"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          variants={item}
          className="bg-blue-600 text-white font-bold py-4 px-6 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
