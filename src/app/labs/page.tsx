'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TransitionCurtain from '@/components/transitions/TransitionCurtain';
import { experiments } from '@/components/labs/labsData';

export default function LabsPage() {
	const container = useRef(null);
	const toastRef = useRef(null);
	const toastTimer = useRef<NodeJS.Timeout | null>(null);
	const [toastMessage, setToastMessage] = useState('SYSTEM READY');

	useGSAP(
		() => {
			gsap.set('.lab-header', { y: 50, opacity: 0 });
			gsap.set('.lab-card', { y: 100, opacity: 0, scale: 0.9 });
			gsap.set(toastRef.current, { yPercent: 150, autoAlpha: 1 });

			const tl = gsap.timeline({ delay: 0.8 });

			tl.to('.lab-header', {
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power3.out'
			});

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

	const handleCopy = (snippetCode: string, id: string) => {
		navigator.clipboard.writeText(snippetCode);

		setToastMessage(`CODE [${id}] COPIED!`);

		if (toastTimer.current) clearTimeout(toastTimer.current);

		gsap.to(toastRef.current, {
			yPercent: 0,
			duration: 0.4,
			ease: 'back.out(1.2)',
			overwrite: true
		});

		toastTimer.current = setTimeout(() => {
			gsap.to(toastRef.current, {
				yPercent: 150,
				duration: 0.4,
				ease: 'power3.in',
				overwrite: true
			});
		}, 2000);
	};

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10 relative overflow-hidden"
		>
			<TransitionCurtain />

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
									onClick={() => handleCopy(exp.code, exp.id)}
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
