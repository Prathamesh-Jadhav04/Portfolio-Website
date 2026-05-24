"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound, playTypeSound } from "@/utils/sounds";

const AnimatedBotLogo = () => (
  <div className="relative w-full h-full flex items-center justify-center text-[var(--primary-color,#00ff41)]">
    <motion.div 
      className="absolute w-[20%] h-[20%] bg-current rounded-full shadow-[0_0_10px_currentColor]"
      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute w-[60%] h-[60%] rounded-full border-2 border-dashed border-current opacity-80"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute w-[90%] h-[90%] rounded-full border border-dotted border-current opacity-50"
      animate={{ rotate: -360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default function PrathameshAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "INITIALIZING PRATHAMESH.AI NEURAL NET...\nWAITING FOR COMMAND INPUT." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    playClickSound();
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: `> ${userMsg}` }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      
      setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "ai", content: "ERR: CONNECTION TIMEOUT." }]);
    }
    
    setIsLoading(false);
    playClickSound(); // Sound when reply arrives
  };

  return (
    <>
      <button
        onClick={() => { setIsOpen(!isOpen); playClickSound(); }}
        className="fixed bottom-6 right-6 z-[9990] w-12 h-12 rounded-full border-2 border-[var(--primary-color,#00ff41)] overflow-hidden shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:scale-110 transition-transform flex items-center justify-center bg-black cursor-crosshair group"
      >
        <AnimatedBotLogo />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-6 z-[9990] w-[90vw] max-w-[400px] h-[500px] border border-gray-800 bg-black/90 backdrop-blur-md flex flex-col font-vt323 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="border-b border-gray-800 p-3 flex items-center justify-between bg-black cursor-crosshair">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                  <AnimatedBotLogo />
                </div>
                <div>
                  <h3 className="text-white font-press text-[10px]">PRATHAMESH.AI</h3>
                  <p className="text-green-500 text-xs">ONLINE // GEMINI_SYS</p>
                </div>
              </div>
              <button onClick={() => { setIsOpen(false); playClickSound(); }} className="text-gray-500 hover:text-white px-2">X</button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 text-lg">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <span className={`px-3 py-2 max-w-[85%] whitespace-pre-wrap border ${m.role === "user" ? "border-gray-700 bg-gray-900 text-gray-300" : "border-green-900/50 bg-green-900/10 text-green-400"}`}>
                    {m.content}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-green-500 animate-pulse flex flex-col items-start">
                  <span className="px-3 py-2 border border-green-900/50 bg-green-900/10 text-green-400">
                    [ PROCESSING NEURAL QUERY... ]
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-800 flex gap-2">
              <span className="text-green-500 text-xl">{">"}</span>
              <input
                type="text"
                value={input}
                onChange={e => { setInput(e.target.value); playTypeSound(); }}
                className="flex-1 bg-transparent border-none outline-none text-white text-xl"
                placeholder="ENTER DIRECTIVE..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
