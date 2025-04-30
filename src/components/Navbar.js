import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Mouhamed Fall</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}