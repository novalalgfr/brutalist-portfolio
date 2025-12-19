'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Marquee from '@/components/Marquee';
import HomeProjects from '@/components/HomeProject';
import TheProcess from '@/components/TheProcess';
import TechArsenal from '@/components/TechArsenal';
import WhatIDo from '@/components/WhatIDo';

export default function Home() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({ delay: 0.5 });

			tl.from('.bg-grid', { opacity: 0, duration: 1 });

			tl.from(
				'.hero-text',
				{
					y: 100,
					opacity: 0,
					rotate: 5,
					stagger: 0.1,
					duration: 1,
					ease: 'power4.out',
					clearProps: 'all'
				},
				'-=0.5'
			);

			tl.from(
				'.hero-marquee',
				{
					scaleX: 0,
					opacity: 0,
					duration: 0.8,
					ease: 'power2.inOut'
				},
				'-=0.8'
			);

			tl.from(
				'.hero-desc',
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					clearProps: 'all'
				},
				'-=0.5'
			);
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg overflow-x-hidden"
		>
			<section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pb-10">
				<div className="bg-grid absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

				<div className="container relative z-10 px-4 md:px-10 flex flex-col items-start justify-center h-full pt-20">
					<p className="hero-desc font-mono text-sm md:text-base mb-4 border-l-2 border-neo-black pl-4">
						EST. 2025 — JAKARTA, ID
					</p>

					<div className="leading-[0.85]">
						<h1 className="hero-text text-[15vw] md:text-[11vw] font-black tracking-tighter cursor-default select-none relative group">
							<span className="text-neo-black transition-opacity duration-300 group-hover:opacity-0">
								FRONTEND
							</span>
							<span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [-webkit-text-stroke:2px_#121212] [-webkit-text-fill-color:transparent]">
								FRONTEND
							</span>
						</h1>

						<div className="flex items-center gap-4 md:gap-10">
							<div className="hero-text w-12 h-12 md:w-24 md:h-24 bg-neo-black rounded-full animate-pulse" />
							<h1 className="hero-text text-[15vw] md:text-[11vw] font-black tracking-tighter text-neo-black hover:text-neo-lime transition-colors duration-300 cursor-default select-none">
								ENGINEER
							</h1>
						</div>
					</div>

					<div className="hero-desc mt-8 max-w-xl">
						<p className="text-xl md:text-2xl font-medium leading-relaxed bg-neo-white border-2 border-neo-black p-4 shadow-neo">
							Building digital experiences with <span className="bg-neo-lime px-1">boldness</span> and
							precision. Turning complex problems into raw, functional art.
						</p>
					</div>

					<button className="hero-desc mt-8 px-8 py-4 bg-neo-black text-neo-white font-bold text-xl border-2 border-transparent hover:bg-neo-lime hover:text-neo-black hover:border-neo-black hover:shadow-neo transition-all duration-200">
						EXPLORE ARCHIVE ↓
					</button>
				</div>
			</section>

			<WhatIDo />

			<div className="hero-marquee relative z-20 w-full rotate-[-1deg] scale-105 border-y-4 border-neo-black my-10 bg-neo-lime">
				<Marquee text="OPEN FOR COLLABORATION — FULL STACK CAPABLE — GSAP ENTHUSIAST" />
			</div>

			<HomeProjects />

			<TheProcess />

			<TechArsenal />
		</main>
	);
}
