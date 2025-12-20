'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';

// 1. TILT CARD DEMO
export const TiltDemo = () => {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -20;
		const rotateY = ((x - centerX) / centerX) * 20;

		gsap.to(cardRef.current, {
			rotateX: rotateX,
			rotateY: rotateY,
			scale: 1.1,
			duration: 0.1,
			ease: 'power1.out'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
	};

	return (
		<div
			className="w-full h-40 flex items-center justify-center perspective-1000 bg-gray-100 border-2 border-dashed border-gray-300"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div
				ref={cardRef}
				className="w-24 h-24 bg-neo-black text-neo-lime flex items-center justify-center font-black shadow-xl cursor-crosshair text-center text-xs leading-tight"
			>
				MOUSE
				<br />
				TRACKER
			</div>
		</div>
	);
};

// 2. GLITCH TEXT DEMO
export const GlitchDemo = () => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
	const [text, setText] = useState('GLITCH_MODE');
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		let iterations = 0;
		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			setText((prev) =>
				prev
					.split('')
					.map((char, index) => {
						if (index < iterations) return 'GLITCH_MODE'[index];
						return chars[Math.floor(Math.random() * chars.length)];
					})
					.join('')
			);

			if (iterations >= 'GLITCH_MODE'.length && intervalRef.current) clearInterval(intervalRef.current);
			iterations += 1 / 3;
		}, 30);
	};

	return (
		<div
			className="w-full h-40 bg-neo-black flex items-center justify-center overflow-hidden group cursor-pointer"
			onMouseEnter={handleMouseEnter}
		>
			<h1 className="font-mono text-2xl md:text-3xl font-bold text-white group-hover:text-neo-lime transition-colors">
				{text}
			</h1>
		</div>
	);
};

// 3. MAGNETIC BUTTON DEMO
export const MagneticDemo = () => {
	const btnRef = useRef<HTMLButtonElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!btnRef.current) return;
		const rect = btnRef.current.getBoundingClientRect();
		const x = e.clientX - (rect.left + rect.width / 2);
		const y = e.clientY - (rect.top + rect.height / 2);

		gsap.to(btnRef.current, {
			x: x * 0.5,
			y: y * 0.5,
			duration: 0.3,
			ease: 'power2.out'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
	};

	return (
		<div
			className="w-full h-40 bg-neo-lime/20 border-2 border-neo-black flex items-center justify-center overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<button
				ref={btnRef}
				className="bg-neo-black text-neo-white px-6 py-2 font-bold rounded-full shadow-lg hover:bg-neo-lime hover:text-neo-black transition-colors"
			>
				CATCH ME
			</button>
		</div>
	);
};

// 4. MARQUEE DEMO
export const MarqueeDemo = () => {
	return (
		<div className="w-full h-40 bg-white border-2 border-black flex flex-col justify-center overflow-hidden relative">
			<div className="absolute inset-0 flex flex-col gap-2 -rotate-12 scale-125 opacity-20 pointer-events-none">
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className="whitespace-nowrap font-black text-4xl uppercase"
					>
						SCROLLING SCROLLING SCROLLING
					</div>
				))}
			</div>
			<div className="z-10 text-center font-bold bg-neo-lime border-y-4 border-neo-black py-2 rotate-[-5deg]">
				CSS ONLY ANIMATION
			</div>
		</div>
	);
};
