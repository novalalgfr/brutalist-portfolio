import { TiltDemo, GlitchDemo, MagneticDemo, MarqueeDemo } from './LabComponents';

export const experiments = [
	{
		id: 'EXP-001',
		title: '3D TILT CARD',
		tags: ['GSAP', 'MOUSE'],
		desc: 'Interactive 3D rotation based on mouse coordinates relative to element center.',
		difficulty: 'MEDIUM',
		component: <TiltDemo />,
		code: `// --- 3D TILT CARD SNIPPET ---
import { useRef } from 'react';
import gsap from 'gsap';

export const TiltCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-20 to 20 deg)
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    gsap.to(cardRef.current, {
      rotateX, rotateY, scale: 1.1, duration: 0.1
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { 
      rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 
    });
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="perspective-1000">
      <div ref={cardRef} className="bg-black text-white p-10">
        HOVER ME
      </div>
    </div>
  );
};`
	},
	{
		id: 'EXP-002',
		title: 'HACKER TEXT',
		tags: ['JS', 'ALGO'],
		desc: 'Random character shuffling effect that resolves to original text on hover.',
		difficulty: 'EASY',
		component: <GlitchDemo />,
		code: `// --- HACKER TEXT SNIPPET ---
import { useState, useRef } from 'react';

export const HackerText = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const [text, setText] = useState("GLITCH_MODE");
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    let iterations = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setText(prev => prev.split("").map((char, index) => {
        if (index < iterations) return "GLITCH_MODE"[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      
      if (iterations >= 11) clearInterval(intervalRef.current);
      iterations += 1 / 3;
    }, 30);
  };

  return <h1 onMouseEnter={handleMouseEnter}>{text}</h1>;
};`
	},
	{
		id: 'EXP-003',
		title: 'MAGNETIC BTN',
		tags: ['GSAP', 'MATH'],
		desc: 'Button element that acts like a magnet, attracted to cursor position.',
		difficulty: 'HARD',
		component: <MagneticDemo />,
		code: `// --- MAGNETIC BUTTON SNIPPET ---
import { useRef } from 'react';
import gsap from 'gsap';

export const MagneticButton = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    gsap.to(btnRef.current, { x: x * 0.5, y: y * 0.5, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <button ref={btnRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      CATCH ME
    </button>
  );
};`
	},
	{
		id: 'EXP-004',
		title: 'VISUAL NOISE',
		tags: ['SVG', 'FILTER'],
		desc: 'Marquee style layout with rotated text background.',
		difficulty: 'EASY',
		component: <MarqueeDemo />,
		code: `// --- VISUAL NOISE CSS ---
// Tailwind Classes Used:
// .container { relative overflow-hidden flex flex-col justify-center }
// .background-text { absolute inset-0 -rotate-12 scale-125 opacity-20 pointer-events-none }
// .foreground-badge { z-10 rotate-[-5deg] bg-lime-400 border-y-4 border-black }

/* No complex JS needed, just pure CSS transform & absolute positioning layer */`
	}
];
