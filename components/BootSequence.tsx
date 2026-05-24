"use client";


import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const handleComplete = () => {
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      <div className="w-full max-w-3xl border border-gray-800 bg-black/80 backdrop-blur-md p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        {/* Terminal Top Bar */}
        <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
          <div className="w-3 h-3 bg-red-900/50"></div>
          <div className="w-3 h-3 bg-yellow-900/50"></div>
          <div className="w-3 h-3 bg-green-900/50"></div>
          <p className="ml-4 font-vt323 text-gray-500 text-sm">terminal — bash</p>
        </div>

        <div className="font-vt323 text-xl sm:text-2xl lg:text-3xl text-gray-300">
          <TypeAnimation
            sequence={[
              "> INITIALIZING PROFILE...",
              800,
              "> INITIALIZING PROFILE...\n> ACCESS GRANTED.",
              800,
              "> INITIALIZING PROFILE...\n> ACCESS GRANTED.\n\nFull-stack engineer building immersive AI systems, automation tools, and futuristic web experiences. I merge low-level optimizations with high-end cinematic design.",
              1500, // wait a bit longer so user can read it before it fades out
              handleComplete,
            ]}
            wrapper="div"
            cursor={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
            speed={70}
          />
        </div>
      </div>
    </motion.div>
  );
}
