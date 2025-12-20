'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TransitionCurtain from '@/components/TransitionCurtain';

// --- KOMPONEN DEMO (Tetap Sama) ---
const TiltDemo = () => {
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
		gsap.to(cardRef.current, { rotateX, rotateY, scale: 1.1, duration: 0.1, ease: 'power1.out' });
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

const GlitchDemo = () => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
	const [text, setText] = useState('GLITCH_MODE');
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const handleMouseEnter = () => {
		let iterations = 0;
		clearInterval(intervalRef.current as NodeJS.Timeout);
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
			if (iterations >= 'GLITCH_MODE'.length) clearInterval(intervalRef.current as NodeJS.Timeout);
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

const MagneticDemo = () => {
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

const MarqueeDemo = () => {
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

// --- DATA ---
const experiments = [
	{
		id: 'EXP-001',
		title: '3D TILT CARD',
		tags: ['GSAP', 'MOUSE'],
		desc: 'Interactive 3D rotation based on mouse coordinates relative to element center.',
		difficulty: 'MEDIUM',
		component: <TiltDemo />
	},
	{
		id: 'EXP-002',
		title: 'HACKER TEXT',
		tags: ['JS', 'ALGO'],
		desc: 'Random character shuffling effect that resolves to original text on hover.',
		difficulty: 'EASY',
		component: <GlitchDemo />
	},
	{
		id: 'EXP-003',
		title: 'MAGNETIC BTN',
		tags: ['GSAP', 'MATH'],
		desc: 'Button element that acts like a magnet, attracted to cursor position.',
		difficulty: 'HARD',
		component: <MagneticDemo />
	},
	{
		id: 'EXP-004',
		title: 'VISUAL NOISE',
		tags: ['SVG', 'FILTER'],
		desc: 'Marquee style layout with rotated text background.',
		difficulty: 'EASY',
		component: <MarqueeDemo />
	}
];

export default function LabsPage() {
	const container = useRef(null);

	// State & Ref untuk Toast
	const toastRef = useRef(null);
	const toastTimer = useRef<NodeJS.Timeout | null>(null);
	const [toastMessage, setToastMessage] = useState('SYSTEM READY');

	useGSAP(
		() => {
			// Setup awal
			gsap.set('.lab-header', { y: 50, opacity: 0 });
			gsap.set('.lab-card', { y: 100, opacity: 0, scale: 0.9 });
			// Toast setup (sembunyi di bawah layar)
			gsap.set(toastRef.current, { yPercent: 150, autoAlpha: 1 });

			const tl = gsap.timeline({ delay: 0.8 });
			tl.to('.lab-header', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
			tl.to(
				'.lab-card',
				{
					y: 0,
					opacity: 1,
					scale: 1,
					stagger: { amount: 0.5, from: 'random' },
					duration: 0.6,
					ease: 'back.out(1.5)',
					clearProps: 'transform'
				},
				'-=0.4'
			);
		},
		{ scope: container }
	);

	// --- LOGIC CUSTOM TOAST ---
	const triggerToast = (msg: string) => {
		setToastMessage(msg);

		// Clear timer lama kalau user nge-spam klik
		if (toastTimer.current) clearTimeout(toastTimer.current);

		// Animasi Masuk (Slide Up)
		gsap.to(toastRef.current, {
			yPercent: 0,
			duration: 0.4,
			ease: 'back.out(1.2)',
			overwrite: true
		});

		// Timer Hilang Otomatis (2 Detik)
		toastTimer.current = setTimeout(() => {
			gsap.to(toastRef.current, {
				yPercent: 150,
				duration: 0.4,
				ease: 'power3.in',
				overwrite: true
			});
		}, 2000);
	};

	const handleCopy = (id: string) => {
		navigator.clipboard.writeText(`// Source code for ${id}\nconsole.log("Hello World");`); // Simulasi copy
		triggerToast(`SNIPPET [${id}] COPIED TO CLIPBOARD`);
	};

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10 relative overflow-hidden"
		>
			<TransitionCurtain />

			{/* --- SYSTEM TOAST NOTIFICATION --- */}
			<div
				ref={toastRef}
				className="fixed bottom-6 right-4 md:right-10 z-[100] flex items-center gap-4 bg-neo-black border-2 border-neo-lime shadow-[4px_4px_0px_0px_#ccff00] p-4 max-w-sm"
			>
				<div className="w-2 h-2 bg-neo-lime animate-pulse rounded-full" />
				<div>
					<div className="text-[10px] font-bold text-neo-lime leading-none mb-1 opacity-70">
						SYSTEM NOTIFICATION
					</div>
					<div className="font-mono text-sm font-bold text-white leading-none">{toastMessage}</div>
				</div>
			</div>

			{/* HEADER */}
			<header className="mb-12 relative overflow-hidden border-b-4 border-neo-black pb-8">
				<div className="lab-header opacity-0">
					<div className="flex items-center gap-4 mb-2">
						<span className="bg-[#FFD700] text-neo-black border-2 border-neo-black px-3 py-1 font-bold font-mono text-xs animate-pulse">
							⚠ RESTRICTED AREA
						</span>
						<span className="font-mono text-xs opacity-50">R&D FACILITY</span>
					</div>
					<h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-neo-black">
						LABS<span className="text-[#FFD700] text-stroke-2">.IDX</span>
					</h1>
					<p className="max-w-xl font-mono text-sm mt-6 border-l-4 border-[#FFD700] pl-4 opacity-80">
						Functional micro-interactions and UI experiments. Hover or click the cards below to test the
						code in real-time.
					</p>
				</div>
			</header>

			{/* GRID */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
				{experiments.map((exp, i) => (
					<div
						key={i}
						className="lab-card opacity-0 bg-neo-white border-4 border-neo-black p-4 shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group flex flex-col h-full"
					>
						<div className="flex justify-between items-start mb-4">
							<div>
								<div className="text-[10px] font-bold font-mono bg-neo-black text-neo-white px-2 py-0.5 inline-block mb-2">
									{exp.id}
								</div>
								<h3 className="text-2xl font-black uppercase leading-none">{exp.title}</h3>
							</div>
							<div className="flex flex-col items-end gap-1">
								{exp.tags.map((tag) => (
									<span
										key={tag}
										className="text-[10px] font-bold border border-neo-black px-1 uppercase bg-gray-100"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="w-full flex-grow mb-4 border-2 border-neo-black overflow-hidden relative">
							{exp.component}
						</div>

						<div className="mt-auto">
							<p className="font-mono text-xs opacity-70 mb-4 h-10 overflow-hidden text-ellipsis leading-tight">
								{exp.desc}
							</p>
							<div className="flex justify-between items-center border-t-2 border-dashed border-neo-black pt-2">
								<span className="font-bold text-xs">DIFFICULTY: {exp.difficulty}</span>
								<button
									onClick={() => handleCopy(exp.id)}
									className="text-xs font-bold hover:bg-[#FFD700] px-2 py-1 transition-colors"
								>
									COPY SNIPPET 📋
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
