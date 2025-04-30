import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const messages = [
  "Développeur Full Stack passionné",
  "Full Stack Developer passionate about code",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white relative flex items-center justify-center text-center px-6 rounded-b-3xl overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Mouhamed Fall</h1>
        <p className="text-xl md:text-2xl mb-6">{messages[index]}</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://linkedin.com/in/mouhamed-fall-b4b48b15b" className="hover:text-indigo-400"><FaLinkedin /></a>
          <a href="https://github.com/Mouhamedfirst" className="hover:text-indigo-400"><FaGithub /></a>
          <a href="mailto:fallmouhamedkhairy@gmail.com" className="hover:text-indigo-400"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}