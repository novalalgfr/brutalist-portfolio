'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Marquee from '@/components/ui/Marquee';
import HomeProjects from '@/components/home/HomeProjects';
import TheProcess from '@/components/home/TheProcess';
import TechArsenal from '@/components/home/TechArsenal';
import WhatIDo from '@/components/home/WhatIDo';

export default function Home() {
	const container = useRef(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	useGSAP(
		() => {
			const tl = gsap.timeline({ delay: 0.5 });

			tl.from('.bg-grid', { opacity: 0, duration: 1 });
			tl.from('.tech-decor', { y: -20, opacity: 0, stagger: 0.1, duration: 0.5 });
			tl.from(
				'.hero-reveal',
				{
					y: 150,
					skewY: 7,
					duration: 1.2,
					ease: 'power4.out',
					stagger: 0.1
				},
				'-=0.5'
			);
			tl.from('.hero-badge', { scale: 0, rotate: -180, duration: 1, ease: 'back.out(1.7)' }, '-=0.8');
			tl.from('.hero-content', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5');
			tl.from('.hero-border', { scaleX: 0, duration: 1, ease: 'power4.inOut' }, '-=1');
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg overflow-x-hidden relative"
		>
			<section className="relative min-h-[90vh] flex flex-col justify-between pt-20 pb-10 overflow-hidden">
				<div className="bg-grid absolute inset-0 bg-grid-pattern z-0 opacity-30 pointer-events-none" />
				<div
					className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-100"
					style={{
						maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
						WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
					}}
				/>

				<div className="tech-decor absolute top-24 left-4 md:left-10 font-mono text-xs md:text-sm flex flex-col gap-1 z-10">
					<span className="bg-neo-black text-neo-lime px-2 py-1">SYS: ONLINE</span>
					<span>EST. 2025 // JKT-ID</span>
				</div>

				<div className="tech-decor absolute top-24 right-4 md:right-10 font-mono text-xs md:text-sm text-right z-10 hidden md:block">
					<span>
						COORDS: X{Math.round(mousePos.x)} Y{Math.round(mousePos.y)}
					</span>
					<br />
					<span className="opacity-50">SCROLL FOR DATA</span>
				</div>

				<div className="container relative z-10 px-4 md:px-10 flex flex-col items-center md:items-start justify-center flex-grow">
					<div className="relative w-full flex flex-col items-center md:items-start leading-[0.8] mix-blend-darken">
						<div className="overflow-hidden p-2">
							<div className="hero-reveal group relative cursor-default select-none h-[12vw] md:h-[11vw] overflow-hidden">
								<div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 h-[200%]">
									<div className="h-[50%] flex items-center">
										<span className="text-[15vw] md:text-[11vw] font-black tracking-tighter text-neo-black">
											FRONTEND
										</span>
									</div>
									<div className="h-[50%] flex items-center">
										<span className="text-[15vw] md:text-[11vw] font-black tracking-tighter text-transparent [-webkit-text-stroke:3px_#121212] italic">
											FRONTEND
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center gap-4 md:gap-8 -mt-4 md:-mt-6">
							<div className="hero-badge w-16 h-16 md:w-32 md:h-32 relative flex items-center justify-center flex-shrink-0 z-20">
								<div className="animate-spin-slow w-full h-full absolute inset-0">
									<svg
										viewBox="0 0 100 100"
										width="100%"
										height="100%"
									>
										<path
											id="circlePath"
											d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
											fill="transparent"
										/>
										<text
											fill="#121212"
											fontSize="11"
											fontWeight="bold"
											letterSpacing="1"
										>
											<textPath
												href="#circlePath"
												startOffset="0%"
											>
												AVAILABLE FOR WORK • SCROLL DOWN •
											</textPath>
										</text>
									</svg>
								</div>
								<div className="text-2xl md:text-4xl text-neo-black font-black">✦</div>
							</div>

							<div className="overflow-hidden p-2 w-full">
								<div className="hero-reveal group relative cursor-default select-none h-[12vw] md:h-[11vw] overflow-hidden">
									<div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 h-[200%]">
										<div className="h-[50%] flex items-center">
											<span className="text-[15vw] md:text-[11vw] font-black tracking-tighter text-neo-black">
												ENGINEER
											</span>
										</div>
										<div className="h-[50%] flex items-center">
											<span className="text-[15vw] md:text-[11vw] font-black tracking-tighter text-neo-lime bg-neo-black px-2 italic">
												ENGINEER
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full relative z-10 px-4 md:px-10 mt-10 md:mt-0">
					<div className="hero-border w-full grid grid-cols-1 md:grid-cols-2 gap-10 border-t-4 border-neo-black pt-8 origin-left">
						<div className="hero-content">
							<p className="text-lg md:text-xl font-medium leading-relaxed max-w-md">
								Turning complex problems into{' '}
								<span className="bg-neo-lime px-1 font-bold">raw, functional art</span>. Building
								digital experiences with boldness and precision.
							</p>
						</div>

						<div className="hero-content flex justify-start md:justify-end items-start">
							<button className="group relative px-8 py-6 bg-neo-black text-neo-white font-bold text-xl overflow-hidden shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
								<div className="absolute inset-0 bg-neo-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
								<span className="relative z-10 flex items-center gap-4 group-hover:text-neo-black transition-colors">
									EXPLORE ARCHIVE
									<span className="group-hover:rotate-45 transition-transform duration-300">↓</span>
								</span>
							</button>
						</div>
					</div>
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
