'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TheProcess() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.process-step',
				{ x: -50, autoAlpha: 0 },
				{
					scrollTrigger: {
						trigger: container.current,
						start: 'top 75%'
					},
					x: 0,
					autoAlpha: 1,
					stagger: 0.2,
					duration: 0.8
				}
			);
		},
		{ scope: container }
	);

	const steps = [
		{ num: '01', title: 'DISCOVER', desc: 'Research & Strategy' },
		{ num: '02', title: 'DESIGN', desc: 'Wireframe & Visual' },
		{ num: '03', title: 'DEVELOP', desc: 'Code & Integrate' },
		{ num: '04', title: 'DEPLOY', desc: 'Launch & Scale' }
	];

	return (
		<section
			ref={container}
			className="bg-neo-black text-neo-white py-20 border-y-4 border-neo-black"
		>
			<div className="w-full px-4 md:px-10">
				<div className="flex items-end justify-between mb-16">
					<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-neo-lime">
						THE PROCESS.
					</h2>
					<span className="font-mono text-sm hidden md:block">HOW IT WORKS</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t-2 border-l-2 border-neo-white/20">
					{steps.map((step, i) => (
						<div
							key={i}
							className="process-step p-8 border-r-2 border-b-2 border-neo-white/20 hover:bg-neo-lime hover:text-neo-black transition-colors duration-300 relative group invisible"
						>
							<span className="block text-5xl font-black mb-4 group-hover:translate-x-2 transition-transform">
								{step.num}
							</span>
							<h3 className="text-2xl font-bold mb-2">{step.title}</h3>
							<p className="font-mono text-xs opacity-60 group-hover:opacity-100">{step.desc}</p>

							{i !== steps.length - 1 && (
								<div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-neo-lime group-hover:text-neo-black text-2xl">
									→
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
