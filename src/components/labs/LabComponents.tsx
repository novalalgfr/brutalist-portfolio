'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

// --- EXISTING COMPONENTS (UPDATED WITH NEW ONES BELOW) ---

// 1. MARQUEE DEMO (EASY)
export const MarqueeDemo = () => {
	return (
		<div className="w-full h-40 bg-white border-2 border-black flex flex-col justify-center overflow-hidden relative group">
			<div className="absolute inset-0 flex flex-col gap-2 -rotate-12 scale-125 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
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

// 2. ACCORDION DEMO (EASY)
export const AccordionDemo = () => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			gsap.to(contentRef.current, {
				height: isOpen ? 'auto' : 0,
				duration: 0.4,
				ease: 'power2.out'
			});
		}
	}, [isOpen]);

	return (
		<div className="w-full h-40 bg-gray-100 flex items-center justify-center p-4">
			<div className="w-full max-w-[200px] border-2 border-neo-black bg-white shadow-neo">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full p-2 font-bold flex justify-between bg-neo-black text-neo-white hover:bg-neo-lime hover:text-neo-black transition-colors"
				>
					<span>CLICK ME</span>
					<span>{isOpen ? '-' : '+'}</span>
				</button>
				<div
					ref={contentRef}
					className="overflow-hidden h-0 bg-white"
				>
					<div className="p-2 text-xs font-mono border-t-2 border-neo-black">
						Expanded content visible here.
					</div>
				</div>
			</div>
		</div>
	);
};

// 3. CURSOR FOLLOWER DEMO (EASY)
export const CursorDemo = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const onMove = (e: React.MouseEvent) => {
		if (!containerRef.current || !cursorRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		gsap.to(cursorRef.current, {
			x: e.clientX - rect.left - 16,
			y: e.clientY - rect.top - 16,
			duration: 0.2,
			ease: 'power2.out'
		});
	};

	return (
		<div
			ref={containerRef}
			onMouseMove={onMove}
			className="w-full h-40 bg-neo-black overflow-hidden relative cursor-none group"
		>
			<div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-sm pointer-events-none">
				[ MOVE MOUSE HERE ]
			</div>
			<div
				ref={cursorRef}
				className="w-8 h-8 rounded-full border-2 border-neo-lime bg-transparent absolute top-0 left-0 pointer-events-none mix-blend-difference"
			/>
		</div>
	);
};

// 4. GLITCH TEXT DEMO (EASY)
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

// 5. PIXEL GRID DEMO (MEDIUM)
export const PixelGridDemo = () => {
	return (
		<div className="w-full h-40 bg-neo-black flex flex-wrap overflow-hidden relative">
			<div className="absolute inset-0 flex items-center justify-center font-black text-4xl text-neo-lime z-0">
				HIDDEN
			</div>
			{[...Array(80)].map((_, i) => (
				<div
					key={i}
					className="w-[10%] h-[20%] bg-gray-200 border-[0.5px] border-gray-300 z-10 hover:opacity-0 transition-opacity duration-0"
				/>
			))}
		</div>
	);
};

// 6. CLIP REVEAL DEMO (MEDIUM)
export const ClipRevealDemo = () => {
	const textRef = useRef<HTMLHeadingElement>(null);

	const onHover = () => {
		gsap.to(textRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power4.inOut' });
	};

	const onLeave = () => {
		gsap.to(textRef.current, { clipPath: 'inset(100% 0% 0% 0%)', duration: 0.5, ease: 'power4.inOut' });
	};

	return (
		<div
			className="w-full h-40 bg-white border-2 border-dashed border-gray-400 flex items-center justify-center relative cursor-pointer"
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			<span className="absolute text-gray-300 font-bold text-4xl">HOVER ME</span>
			<h1
				ref={textRef}
				className="font-black text-5xl text-neo-black bg-neo-lime px-2 z-10"
				style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
			>
				REVEALED
			</h1>
		</div>
	);
};

// 7. TILT CARD DEMO (MEDIUM)
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
			rotateX,
			rotateY,
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
			className="w-full h-40 flex items-center justify-center perspective-1000 bg-gray-100 border-2 border-gray-300"
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

// 8. PARALLAX DEPTH DEMO (HARD)
export const ParallaxDemo = () => {
	const layer1 = useRef<HTMLDivElement>(null);
	const layer2 = useRef<HTMLDivElement>(null);

	const onMove = (e: React.MouseEvent) => {
		const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
		const y = (e.clientY / window.innerHeight - 0.5) * 2;

		gsap.to(layer1.current, { x: x * 20, y: y * 20, duration: 0.5 });
		gsap.to(layer2.current, { x: x * 50, y: y * 50, duration: 0.5 });
	};

	return (
		<div
			onMouseMove={onMove}
			className="w-full h-40 bg-neo-black overflow-hidden relative flex items-center justify-center"
		>
			<div
				ref={layer1}
				className="absolute w-32 h-32 bg-gray-800 rounded-full blur-xl opacity-50"
			/>
			<div
				ref={layer2}
				className="relative z-10 font-black text-4xl text-white mix-blend-difference"
			>
				DEPTH
			</div>
		</div>
	);
};

// 9. MAGNETIC BUTTON DEMO (HARD)
export const MagneticDemo = () => {
	const btnRef = useRef<HTMLButtonElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!btnRef.current) return;
		const rect = btnRef.current.getBoundingClientRect();
		const x = e.clientX - (rect.left + rect.width / 2);
		const y = e.clientY - (rect.top + rect.height / 2);

		gsap.to(btnRef.current, { x: x * 0.5, y: y * 0.5, duration: 0.3, ease: 'power2.out' });
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
