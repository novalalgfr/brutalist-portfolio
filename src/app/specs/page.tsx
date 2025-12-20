/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TransitionPixel from '@/components/transitions/TransitionPixel';

export default function SpecsPage() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({ delay: 1 });
			tl.from('.spec-title', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' });
			tl.from('.spec-divider', { scaleX: 0, duration: 0.8, ease: 'power2.inOut' }, '-=0.5');
			tl.from(
				'.spec-card',
				{
					y: 50,
					opacity: 0,
					duration: 0.6,
					stagger: 0.1,
					ease: 'back.out(1.2)'
				},
				'-=0.3'
			);
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10 relative overflow-hidden"
		>
			<TransitionPixel />

			<header className="mb-12">
				<div className="flex justify-between items-end border-b-4 border-neo-black pb-4 spec-divider origin-left">
					<div>
						<span className="font-mono text-xs md:text-sm bg-neo-black text-neo-white px-2 py-1 mb-2 inline-block">
							FIG. 03 — SYSTEM SPECS
						</span>
						<h1 className="spec-title text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-neo-black">
							Operator
							<br />
							Profile.
						</h1>
					</div>
					<div className="hidden md:block text-right font-mono text-xs opacity-60">
						STATUS: ONLINE
						<br />
						MEMORY: OPTIMAL
						<br />
						VER: 2025.1.0
					</div>
				</div>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
				<div className="md:col-span-4 space-y-6">
					<div className="spec-card bg-neo-white border-4 border-neo-black p-4 shadow-neo relative group">
						<div className="aspect-square bg-white border-2 border-neo-black relative overflow-hidden transition-all duration-500">
							<Image
								src="https://api.dicebear.com/9.x/notionists/png?seed=Leon&backgroundColor=e5e7eb&size=2000"
								alt="Operator Avatar"
								fill
								priority
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>

							<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply" />

							<div className="absolute top-2 right-2 bg-neo-black text-neo-lime text-[10px] font-bold px-1 font-mono transform rotate-[-5deg]">
								IDENTITY HIDDEN
							</div>
						</div>

						<div className="mt-4 font-mono text-xs flex justify-between">
							<span>ID: 8492-AX</span>
							<span className="text-green-600 font-bold animate-pulse">● OPERATIONAL</span>
						</div>
					</div>

					<div className="spec-card bg-neo-black text-neo-white p-6 border-4 border-neo-black shadow-neo">
						<h3 className="text-neo-lime font-bold font-mono mb-4 text-xl">// BIO_DATA</h3>
						<p className="font-mono text-sm leading-relaxed opacity-80">
							Frontend Engineer obsessed with micro-interactions. Currently operating from Jakarta.
							Turning caffeine into clean code.
							<br />
							<br />
							Fan of Brutalism, Anime, and Mechanical Keyboards.
						</p>
					</div>
				</div>

				<div className="md:col-span-8 space-y-6">
					<div className="spec-card bg-neo-white border-4 border-neo-black p-6 md:p-8 shadow-neo">
						<div className="flex justify-between items-center mb-8 border-b-2 border-neo-black pb-2">
							<h2 className="text-3xl font-black uppercase italic text-neo-black">Battle Records</h2>
							<span className="font-mono text-xs border border-neo-black px-2 rounded-full">
								EXPERIENCE
							</span>
						</div>

						<div className="relative pl-8 border-l-2 border-neo-black border-dashed pb-8 last:pb-0">
							<div className="absolute -left-[9px] top-0 w-4 h-4 bg-neo-lime border-2 border-neo-black rounded-full" />
							<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
								<h3 className="text-xl font-bold uppercase">Senior Frontend Dev</h3>
								<span className="font-mono text-sm bg-neo-black text-neo-white px-2">
									2023 — PRESENT
								</span>
							</div>
							<p className="font-bold text-gray-500 text-sm mb-2">TECH COMPANY INC.</p>
							<ul className="list-disc list-inside font-mono text-sm opacity-70 space-y-1">
								<li>Spearheaded the migration from Vue 2 to Nuxt 3.</li>
								<li>Reduced bundle size by 40% using dynamic imports.</li>
							</ul>
						</div>

						<div className="relative pl-8 border-l-2 border-neo-black border-dashed pb-8 last:pb-0">
							<div className="absolute -left-[9px] top-0 w-4 h-4 bg-neo-white border-2 border-neo-black rounded-full" />
							<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
								<h3 className="text-xl font-bold uppercase">Web Developer</h3>
								<span className="font-mono text-sm bg-gray-200 px-2 border border-neo-black">
									2021 — 2023
								</span>
							</div>
							<p className="font-bold text-gray-500 text-sm mb-2">CREATIVE AGENCY</p>
							<ul className="list-disc list-inside font-mono text-sm opacity-70 space-y-1">
								<li>Developed award-winning landing pages for global brands.</li>
								<li>Implemented GSAP animations for interactive campaigns.</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="spec-card bg-neo-white border-4 border-neo-black p-6 shadow-neo">
							<h3 className="font-black text-xl mb-4 uppercase border-b-2 border-neo-black pb-2 text-neo-black">
								Software Arsenal
							</h3>
							<div className="flex flex-wrap gap-2">
								{[
									'Next.js',
									'React',
									'TypeScript',
									'Tailwind',
									'GSAP',
									'Node.js',
									'Figma',
									'Blender'
								].map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-gray-200 border-2 border-neo-black font-bold text-xs hover:bg-neo-lime hover:translate-x-1 hover:translate-y-1 transition-all cursor-default text-neo-black"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="spec-card bg-neo-white border-4 border-neo-black p-6 shadow-neo">
							<h3 className="font-black text-xl mb-4 uppercase border-b-2 border-neo-black pb-2 text-neo-black">
								Hardware Specs
							</h3>
							<ul className="font-mono text-xs space-y-3">
								<li className="flex justify-between border-b border-gray-300 pb-1">
									<span className="opacity-50">CPU</span>
									<span className="font-bold">1 BRAIN CELL (OVERCLOCKED)</span>
								</li>
								<li className="flex justify-between border-b border-gray-300 pb-1">
									<span className="opacity-50">COOLING</span>
									<span className="font-bold">ICED AMERICANO (LIQUID)</span>
								</li>
								<li className="flex justify-between border-b border-gray-300 pb-1">
									<span className="opacity-50">MEMORY</span>
									<span className="font-bold">GOOGLE & STACKOVERFLOW</span>
								</li>
								<li className="flex justify-between border-b border-gray-300 pb-1">
									<span className="opacity-50">OS</span>
									<span className="font-bold">SLEEP_DEPRIVED v1.0</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
