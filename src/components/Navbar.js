import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Fermer le menu après clic
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Mouhamed Fall</div>

        {/* Bouton burger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>

      {/* Menu mobile animé */}
      <div
        className={`md:hidden px-4 pt-2 pb-4 bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <ul className="space-y-3 text-sm font-medium">
          <li><a href="#about" onClick={handleLinkClick} className="block hover:text-indigo-400">About</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="block hover:text-indigo-400">Projects</a></li>
          <li><a href="#experience" onClick={handleLinkClick} className="block hover:text-indigo-400">Experience</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="block hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}