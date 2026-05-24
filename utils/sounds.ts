/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
export let isSoundEnabled = true;

export const toggleSound = () => {
  isSoundEnabled = !isSoundEnabled;
  if (isSoundEnabled) {
    playHoverSound(); // feedback
  }
  return isSoundEnabled;
};

// Simple web audio context
let audioCtx: AudioContext | null = null;

const getCtx = () => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
};

export const playHoverSound = () => {
  if (!isSoundEnabled) return;
  const ctx = getCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

  gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.05);
};

export const playClickSound = () => {
  if (!isSoundEnabled) return;
  const ctx = getCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = "square";
  osc.frequency.setValueAtTime(150, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.1);
};

export const playGlitchSound = () => {
  if (!isSoundEnabled) return;
  const ctx = getCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') ctx.resume();

  const bufferSize = ctx.sampleRate * 0.1; // 100ms
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  // Bandpass filter for that digital "zap" sound
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 2000;

  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  noise.start();
};

export const playTypeSound = () => {
  if (!isSoundEnabled) return;
  const ctx = getCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(400 + Math.random() * 200, ctx.currentTime);

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // increased from 0.02
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.03);
};
