"use client";

import { motion } from "framer-motion";

interface PixelButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PixelButton({ text, onClick }: PixelButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative px-6 py-3 font-press text-sm md:text-base text-gray-300 bg-transparent border-2 border-gray-800 hover:border-white hover:text-black overflow-hidden transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>

      {/* Glitch/Invert background layer */}
      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out z-0"></div>

      {/* Subtle corner pixels */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.button>
  );
}
