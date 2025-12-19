'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		title: 'WEB DEVELOPMENT',
		desc: 'Building blazing fast websites with Next.js & React. SEO optimized, accessible, and pixel perfect implementation.',
		icon: '01'
	},
	{
		title: 'INTERACTIVE UI',
		desc: 'Adding life to static interfaces with GSAP. Smooth transitions, micro-interactions, and immersive storytelling.',
		icon: '02'
	},
	{
		title: 'SYSTEM DESIGN',
		desc: 'Structuring scalable architectures. Clean code patterns, component reusability, and maintainable databases.',
		icon: '03'
	}
];

export default function WhatIDo() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.service-card',
				{ y: 100, autoAlpha: 0 },
				{
					scrollTrigger: {
						trigger: container.current,
						start: 'top 80%'
					},
					y: 0,
					autoAlpha: 1,
					stagger: 0.2,
					duration: 0.8,
					ease: 'power4.out'
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
			<div className="mb-10 border-b-4 border-neo-black pb-4">
				<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">WHAT I DO.</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{services.map((service, i) => (
					<div
						key={i}
						className="service-card group border-4 border-neo-black p-8 bg-neo-white hover:bg-neo-black hover:text-neo-lime transition-colors duration-300 shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 invisible"
					>
						<div className="text-6xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
							{service.icon}
						</div>
						<h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
						<p className="font-mono text-sm leading-relaxed opacity-80">{service.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
