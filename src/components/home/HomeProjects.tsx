'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projects = [
	{
		id: '01',
		title: 'E-COMMERCE',
		category: 'WEB APPLICATION',
		year: '2025',
		img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
	},
	{
		id: '02',
		title: 'BATIK AI',
		category: 'MACHINE LEARNING',
		year: '2025',
		img: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop'
	},
	{
		id: '03',
		title: 'SINAR PLASTIK',
		category: 'POS SYSTEM',
		year: '2024',
		img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop'
	},
	{
		id: '04',
		title: 'TASKFLOW',
		category: 'JAVA DESKTOP',
		year: '2024',
		img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop'
	}
];

export default function HomeProjects() {
	const [activeProject, setActiveProject] = useState(0);
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				'.project-img',
				{ opacity: 0.5, scale: 1.05 },
				{ opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
			);
		},
		{ scope: container, dependencies: [activeProject] }
	);

	return (
		<section
			ref={container}
			className="relative py-20 px-4 md:px-10 bg-neo-bg"
		>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="w-full md:w-1/2 z-10">
					<div className="mb-10">
						<h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-2">
							Selected
							<br />
							Works.
						</h2>
						<p className="font-mono text-xs opacity-60">HOVER TO PREVIEW /// CLICK TO EXPLORE</p>
					</div>

					<div className="flex flex-col">
						{projects.map((p, i) => (
							<Link
								key={i}
								href="/archive"
							>
								<div
									data-cursor-text="VIEW"
									onMouseEnter={() => setActiveProject(i)}
									className={`
                                    group border-t-4 border-neo-black py-8 transition-all duration-300
                                    ${
										activeProject === i
											? 'bg-neo-black text-neo-lime pl-4'
											: 'hover:bg-gray-200 hover:pl-2'
									}
                                `}
								>
									<div className="flex justify-between items-baseline mb-2">
										<span className="font-mono text-xs md:text-sm opacity-50">0{i + 1}</span>
										<span
											className={`
        font-mono text-xs md:text-sm opacity-50 
        transition-all duration-300 
        ${activeProject === i ? 'mr-4' : ''}
    `}
										>
											{p.year}
										</span>
									</div>
									<h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:italic">
										{p.title}
									</h3>
									<div className="mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="font-mono text-xs bg-neo-lime text-neo-black px-1 font-bold">
											{p.category}
										</span>
										<span className="text-xl mr-4">↗</span>
									</div>
								</div>
							</Link>
						))}
						<div className="border-t-4 border-neo-black" />
					</div>
				</div>

				<div className="hidden md:block w-1/2 relative">
					<div className="sticky top-24 h-[60vh] w-full border-4 border-neo-black bg-neo-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
						<div className="absolute top-4 left-4 z-20 flex gap-2">
							<div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
							<div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
							<div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
						</div>
						<div className="absolute bottom-4 right-4 z-20 bg-neo-black text-neo-white px-2 py-1 font-mono text-xs border border-neo-white">
							IMG_PREVIEW: {projects[activeProject].id}
						</div>

						<div className="relative w-full h-full overflow-hidden bg-gray-800 border-2 border-gray-700">
							<div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

							<Image
								key={activeProject}
								src={projects[activeProject].img}
								alt={projects[activeProject].title}
								fill
								className="project-img object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
