'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register Plugin Wajib
gsap.registerPlugin(ScrollTrigger);

const stack = [
	'NEXT.JS 15',
	'REACT',
	'TYPESCRIPT',
	'TAILWIND CSS',
	'GSAP',
	'FRAMER MOTION',
	'NODE.JS',
	'POSTGRESQL',
	'PRISMA',
	'FIGMA',
	'GIT',
	'VERCEL',
	'DOCKER',
	'AWS'
];

export default function TechArsenal() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.tech-tag',
				{
					scale: 0,
					autoAlpha: 0
				},
				{
					scrollTrigger: {
						trigger: container.current,
						start: 'top 85%'
					},
					scale: 1,
					autoAlpha: 1,
					stagger: {
						amount: 0.5,
						from: 'random'
					},
					duration: 0.5,
					ease: 'back.out(1.5)',
					overwrite: 'auto'
				}
			);
		},
		{ scope: container }
	);

	return (
		<section
			ref={container}
			className="w-full px-4 md:px-10 py-20"
		>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="md:w-1/3">
					<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-4">
						TECH <br /> ARSENAL.
					</h2>
					<p className="font-mono text-sm max-w-xs">
						The weapons of choice for conquering digital challenges. Always updated, always lethal.
					</p>
				</div>

				<div className="md:w-2/3 flex flex-wrap gap-3 content-start">
					{stack.map((tech, i) => (
						<div
							key={i}
							className="tech-tag px-6 py-3 border-2 border-neo-black bg-neo-white font-bold text-lg uppercase shadow-neo hover:bg-neo-lime hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default select-none invisible"
						>
							{tech}
						</div>
					))}

					<div className="tech-tag px-6 py-3 border-2 border-neo-black bg-neo-black text-neo-lime font-bold text-lg uppercase invisible">
						AND MORE...
					</div>
				</div>
			</div>
		</section>
	);
}
