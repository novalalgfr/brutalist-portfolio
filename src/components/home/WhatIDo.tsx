'use client';

import { useState } from 'react';

const services = [
	{
		id: '01',
		title: 'FRONTEND DEV',
		desc: 'Building responsive, pixel-perfect, and interactive interfaces using Next.js and Tailwind CSS. Obsessed with performance and micro-animations.'
	},
	{
		id: '02',
		title: 'UI INTERACTION',
		desc: 'Creating immersive web experiences with GSAP. From parallax effects to complex 3D transforms that engage users.'
	},
	{
		id: '03',
		title: 'FULLSTACK INT',
		desc: 'Seamless integration with backend services (Laravel/Node). Database management, API consumption, and secure authentication.'
	}
];

export default function WhatIDo() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<section className="py-20 px-4 md:px-10 bg-neo-black text-neo-white">
			<div className="mb-16">
				<span className="font-mono text-neo-lime text-xs border border-neo-lime px-2 py-1">CAPABILITIES</span>
				<h2 className="text-5xl md:text-7xl font-black uppercase mt-4">What I Do.</h2>
			</div>

			<div className="flex flex-col">
				{services.map((s, i) => (
					<div
						key={i}
						onMouseEnter={() => setActive(i)}
						onMouseLeave={() => setActive(null)}
						className="group border-t-2 border-neo-white/20 py-8 cursor-default transition-all duration-300 hover:bg-neo-white hover:text-neo-black last:border-b-2"
					>
						<div className="flex flex-col md:flex-row md:items-baseline gap-6 px-4">
							<span className="font-mono text-xl opacity-50 group-hover:text-neo-black/50">{s.id}</span>

							<div className="flex-1">
								<h3 className="text-4xl md:text-6xl font-black uppercase mb-4 transition-transform duration-300 group-hover:translate-x-4">
									{s.title}
								</h3>

								<div
									className={`overflow-hidden transition-all duration-500 ease-in-out ${
										active === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
									}`}
								>
									<p className="font-mono text-sm md:text-base max-w-2xl border-l-2 border-neo-lime pl-4 group-hover:border-neo-black">
										{s.desc}
									</p>
								</div>
							</div>

							{/* <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">↘</span> */}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
