/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import TransitionBoot from '@/components/transitions/TransitionBoot';
import HomeProjects from '@/components/home/HomeProjects';
import WhatIDo from '@/components/home/WhatIDo';
import Marquee from '@/components/ui/Marquee';
import TechArsenal from '@/components/home/TechArsenal';

export default function Home() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({ delay: 2.0 });

			tl.from('.hero-line', {
				y: 100,
				opacity: 0,
				stagger: 0.15,
				duration: 1,
				ease: 'power3.out'
			});
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg relative overflow-hidden"
		>
			<TransitionBoot />

			<section className="h-screen flex flex-col justify-center px-4 md:px-10 pt-20">
				<div className="overflow-hidden">
					<span className="hero-line block font-mono text-sm md:text-base mb-4 opacity-60">
						// FULLSTACK_DEVELOPER // BASED_IN_JAKARTA
					</span>
				</div>

				<div className="overflow-hidden">
					<h1 className="hero-line text-[14vw] font-black leading-[0.85] tracking-tighter uppercase text-neo-black">
						Creative
					</h1>
				</div>
				<div>
					<h1 className="hero-line text-[14vw] font-black leading-[0.85] tracking-tighter uppercase text-neo-black">
						Developer<span className="text-neo-lime text-stroke-black">.</span>
					</h1>
				</div>

				<div className="mt-10 md:mt-16 flex justify-between items-end overflow-hidden">
					<p className="hero-line max-w-md font-mono text-xs md:text-sm leading-relaxed border-l-4 border-neo-black pl-4">
						Crafting solid, scalable, and brutal web experiences. Merging technical precision with bold
						aesthetics.
					</p>

					<div className="hero-line hidden md:block animate-spin-slow">
						<svg
							width="100"
							height="100"
							viewBox="0 0 100 100"
							fill="none"
						>
							<path
								d="M50 0L50 100M0 50L100 50"
								stroke="black"
								strokeWidth="2"
							/>
							<circle
								cx="50"
								cy="50"
								r="40"
								stroke="black"
								strokeWidth="2"
								strokeDasharray="5 5"
							/>
						</svg>
					</div>
				</div>
			</section>

			<div
				className="border-y-4 border-neo-black bg-neo-lime text-neo-black py-4 rotate-1 scale-105 z-10 relative transform-gpu outline outline-1 outline-transparent"
				style={{ backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}
			>
				<Marquee text="OPEN FOR WORK /// AVAILABLE FOR FREELANCE /// FRONTEND MAGIC /// BACKEND LOGIC /// " />
			</div>

			<HomeProjects />

			<TechArsenal />

			<WhatIDo />

			<section className="py-20 px-4 md:px-10 text-center bg-neo-white border-t-4 border-neo-black">
				<h2 className="text-4xl md:text-7xl font-black uppercase mb-8">Have an Idea?</h2>
				<Link
					href="/signal"
					className="inline-block bg-neo-black text-neo-white px-10 py-5 text-xl font-bold hover:bg-neo-lime hover:text-neo-black hover:scale-110 transition-all shadow-neo"
				>
					INITIATE SIGNAL 📡
				</Link>
			</section>
		</main>
	);
}
