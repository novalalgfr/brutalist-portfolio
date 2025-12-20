/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stack = [
	{ name: 'NEXT.JS', type: 'FRAMEWORK', ver: '14.0' },
	{ name: 'TYPESCRIPT', type: 'LANGUAGE', ver: '5.3' },
	{ name: 'TAILWIND', type: 'STYLING', ver: '3.4' },
	{ name: 'GSAP', type: 'ANIMATION', ver: '3.12' },
	{ name: 'REACT', type: 'LIBRARY', ver: '18.2' },
	{ name: 'NODE.JS', type: 'RUNTIME', ver: '20.x' },
	{ name: 'FIGMA', type: 'DESIGN', ver: 'CC' },
	{ name: 'VERCEL', type: 'DEPLOY', ver: 'PRO' }
];

export default function TechArsenal() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.from('.tech-box', {
				scrollTrigger: {
					trigger: container.current,
					start: 'top 80%'
				},
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.8,
				ease: 'power3.out'
			});
		},
		{ scope: container }
	);

	return (
		<section
			ref={container}
			className="py-20 px-4 md:px-10 bg-neo-white border-t-4 border-neo-black"
		>
			<div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-4 border-neo-black pb-6">
				<div>
					<span className="font-mono text-xs bg-neo-black text-neo-lime px-2 py-1">SYSTEM_DEPENDENCIES</span>
					<h2 className="text-5xl md:text-8xl font-black uppercase mt-2 leading-[0.85]">The Arsenal</h2>
				</div>
				<div className="mt-4 md:mt-0 text-right font-mono text-xs md:text-sm opacity-60 max-w-xs">
					// FULLY OPTIMIZED STACK <br />
					// READY FOR PRODUCTION <br />
					// SCALABLE ARCHITECTURE
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
				{stack.map((item, i) => (
					<div
						key={i}
						className="tech-box group relative bg-neo-bg border-4 border-neo-black aspect-square md:aspect-[4/3] flex flex-col justify-between p-4 hover:bg-neo-black hover:text-neo-lime transition-colors duration-300 shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1"
					>
						<div className="absolute top-0 right-0 p-2">
							<div className="w-2 h-2 bg-neo-black group-hover:bg-neo-lime" />
						</div>

						<div className="flex justify-between items-start border-b-2 border-neo-black/10 pb-2 mb-2 group-hover:border-neo-lime/30">
							<span className="font-mono text-[10px] font-bold">0{i + 1}</span>
							<span className="font-mono text-[10px] opacity-50">{item.ver}</span>
						</div>

						<div className="flex-grow flex items-center justify-center">
							<span className="font-black text-2xl md:text-3xl tracking-tighter uppercase text-center group-hover:scale-110 transition-transform duration-300">
								{item.name}
							</span>
						</div>

						<div className="text-center">
							<span className="font-mono text-[10px] bg-gray-200 px-2 py-1 group-hover:bg-neo-lime group-hover:text-neo-black transition-colors border border-neo-black">
								{item.type}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
