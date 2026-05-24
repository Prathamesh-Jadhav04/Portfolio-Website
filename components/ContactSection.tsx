"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PixelButton from "./PixelButton";
import { useRetroSounds } from "@/hooks/useRetroSounds";
import { playGlitchSound } from "@/utils/sounds";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { playSound } = useRetroSounds();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound("click");
    setStatus("sending");
    
    // Simulate sending data
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      playSound("type"); // success sound placeholder
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    playSound("type");
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="font-press text-xl md:text-2xl text-white mb-12 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="glitch-hover cursor-crosshair"
            data-text="OPEN_CONNECTION"
            onMouseEnter={playGlitchSound}
          >
            OPEN_CONNECTION
          </span>
        </motion.h2>

        <motion.div
          className="border border-gray-800 bg-black/60 p-6 md:p-10 backdrop-blur-md relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal Top Bar */}
          <div className="flex items-center gap-2 mb-8 border-b border-gray-800 pb-4">
            <div className="w-3 h-3 bg-red-900/50"></div>
            <div className="w-3 h-3 bg-yellow-900/50"></div>
            <div className="w-3 h-3 bg-green-900/50"></div>
            <p className="ml-4 font-vt323 text-gray-500 text-sm">SECURE_CHANNEL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side: Contact Info */}
            <div className="flex flex-col gap-8 font-vt323 text-lg md:text-xl text-gray-400 border-r-0 md:border-r border-gray-800 pr-0 md:pr-8">
              <div className="flex flex-col gap-2">
                <p className="text-white mb-2">{">"} NODE_IDENTIFIER:</p>
                <p className="text-[var(--primary-color)] pl-4">PRATHAMESH JADHAV</p>
                <p className="pl-4">AI/ML ENGINEER</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-white">{">"} DIRECT_CHANNELS:</p>
                <a href="mailto:Prathamesh.Jadhav.Office@gmail.com" className="pl-4 flex items-center gap-3 hover:text-white transition-colors group cursor-crosshair">
                  <span className="text-gray-600 group-hover:text-[var(--primary-color)] transition-colors">[MAIL]</span> 
                  <span className="truncate">Prathamesh.Jadhav.Office@gmail.com</span>
                </a>
                <p className="pl-4 flex items-center gap-3">
                  <span className="text-gray-600">[COMM]</span> 
                  +91 99709 53232
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-gray-800">
                <p className="text-white">{">"} EXTERNAL_LINKS:</p>
                <a href="https://linkedin.com/in/prathamesh-jadhav04" target="_blank" rel="noopener noreferrer" className="pl-4 hover:text-[var(--primary-color)] transition-colors cursor-crosshair">
                  [ LINKEDIN ]
                </a>
                <a href="https://github.com/Prathamesh-Jadhav04" target="_blank" rel="noopener noreferrer" className="pl-4 hover:text-[var(--primary-color)] transition-colors cursor-crosshair">
                  [ GITHUB ]
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-vt323 text-xl text-gray-300">
              <div className="flex flex-col gap-2 group">
                <label htmlFor="name" className="text-gray-500 group-focus-within:text-white transition-colors">
                  {">"} ENTER_NAME:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border-b border-gray-800 focus:border-[var(--primary-color)] outline-none py-2 text-white transition-colors"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label htmlFor="email" className="text-gray-500 group-focus-within:text-white transition-colors">
                  {">"} ENTER_EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border-b border-gray-800 focus:border-[var(--primary-color)] outline-none py-2 text-white transition-colors"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-2 group flex-grow">
                <label htmlFor="message" className="text-gray-500 group-focus-within:text-white transition-colors">
                  {">"} ENTER_PAYLOAD:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border border-gray-800 focus:border-[var(--primary-color)] outline-none p-2 text-white transition-colors resize-none h-full min-h-[120px]"
                ></textarea>
              </div>

              <div className="mt-2 flex flex-col items-center gap-4">
                <div 
                  className="w-full flex justify-center"
                  onMouseEnter={() => playSound("hover")}
                >
                  <PixelButton text={status === "sending" ? "[ TRANSMITTING... ]" : "[ TRANSMIT_DATA ]"} />
                </div>
                
                {status === "success" && (
                  <p className="text-[var(--primary-color)] animate-pulse text-sm">DATA_TRANSMITTED_SUCCESSFULLY.</p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
