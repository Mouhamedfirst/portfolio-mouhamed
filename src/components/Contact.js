import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-gray-300">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Contact Me</h2>
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-indigo-400 text-xl" />
          <a href="mailto:fallmouhamedkhairy@gmail.com" className="hover:underline text-sm md:text-base">
            fallmouhamedkhairy@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-indigo-400 text-xl" />
          <a href="https://linkedin.com/in/mouhamed-fall-b4b48b15b" className="hover:underline text-sm md:text-base">
            linkedin.com/in/mouhamed-fall
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaGithub className="text-indigo-400 text-xl" />
          <a href="https://github.com/Mouhamedfirst" className="hover:underline text-sm md:text-base">
          https://github.com/Mouhamedfirst
          </a>
        </div>
      </div>
    </section>
  );
}