"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LiveStats({ githubData }: { githubData?: any }) {
  const [loc, setLoc] = useState(14361);
  const [hours, setHours] = useState(2);

  useEffect(() => {
    if (githubData?.hoursAgo !== undefined) {
      setHours(githubData.hoursAgo);
    }
  }, [githubData]);

  useEffect(() => {
    // Simulate lines of code increasing organically over time starting from 14,361
    const interval = setInterval(() => {
      setLoc(prev => prev + Math.floor(Math.random() * 5));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="absolute bottom-10 left-4 md:left-10 z-20 font-vt323 text-gray-500 text-sm md:text-base hidden sm:flex flex-col gap-1 border-l-2 border-gray-800 pl-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <p>LIVE.METRICS</p>
      <p className="text-green-500">&gt; LINES OF CODE: {loc.toLocaleString()}</p>
      <p className="text-yellow-500">&gt; LATEST COMMIT: {hours} HOURS AGO</p>
    </motion.div>
  );
}
