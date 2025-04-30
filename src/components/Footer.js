import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-800 text-gray-300 text-sm">
      &copy; {new Date().getFullYear()} Mouhamed Fall — Built with React & Tailwind CSS
    </footer>
  );
}