'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projects = [
	{
		id: 1,
		title: 'E-COMMERCE DASHBOARD',
		category: 'WEB APP',
		year: '2025',
		color: '#FF6B6B'
	},
	{
		id: 2,
		title: 'CRYPTO LANDING PAGE',
		category: 'LANDING PAGE',
		year: '2024',
		color: '#4ECDC4'
	},
	{
		id: 3,
		title: 'INTERACTIVE MAP 3D',
		category: 'EXPERIMENT',
		year: '2024',
		color: '#FFE66D'
	},
	{
		id: 4,
		title: 'BATIK CLASSIFIER AI',
		category: 'MACHINE LEARNING',
		year: '2023',
		color: '#1A535C'
	}
];

export default function HomeProjects() {
	const container = useRef<HTMLDivElement>(null);
	const cursorLabel = useRef<HTMLDivElement>(null);
	const [activeProject, setActiveProject] = useState<number | null>(null);

	useGSAP(
		() => {
			const moveCursor = (e: MouseEvent) => {
				gsap.to(cursorLabel.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.5,
					ease: 'power2.out'
				});
			};

			window.addEventListener('mousemove', moveCursor);

			return () => {
				window.removeEventListener('mousemove', moveCursor);
			};
		},
		{ scope: container }
	);

	const handleMouseEnter = (index: number) => {
		setActiveProject(index);
		gsap.to(cursorLabel.current, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
	};

	const handleMouseLeave = () => {
		setActiveProject(null);
		gsap.to(cursorLabel.current, { scale: 0, duration: 0.3 });
	};

	return (
		<section
			ref={container}
			className="relative py-20 bg-neo-bg border-t-4 border-neo-black"
		>
			<div className="container px-4 md:px-10 mb-10 flex items-end justify-between">
				<h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
					SELECTED <br /> WORKS
				</h2>
				<span className="hidden md:block font-mono text-sm">(HOVER TO PREVIEW)</span>
			</div>

			<div className="flex flex-col border-b-4 border-neo-black">
				{projects.map((project, index) => (
					<Link
						key={project.id}
						href="/archive"
						className="group relative flex items-center justify-between px-4 md:px-10 py-8 border-t-4 border-neo-black bg-neo-bg hover:bg-neo-white transition-colors duration-300 overflow-hidden"
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<div className="absolute inset-0 bg-neo-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />

						<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-10 w-full group-hover:pl-4 transition-all duration-300">
							<span className="font-mono text-sm text-neo-black group-hover:text-neo-lime">
								0{index + 1}/
							</span>
							<h3 className="text-3xl md:text-5xl font-black uppercase text-neo-black group-hover:text-neo-lime group-hover:italic transition-all">
								{project.title}
							</h3>
						</div>

						<div className="relative z-10 hidden md:flex flex-col items-end">
							<span className="font-bold text-neo-black group-hover:text-neo-white">
								{project.category}
							</span>
							<span className="font-mono text-xs text-neo-black group-hover:text-neo-lime">
								{project.year}
							</span>
						</div>

						<span className="md:hidden relative z-10 text-2xl group-hover:text-neo-lime">→</span>
					</Link>
				))}
			</div>

			<div className="flex justify-center mt-12">
				<Link
					href="/archive"
					className="px-8 py-4 bg-neo-lime border-4 border-neo-black font-bold shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
				>
					VIEW FULL ARCHIVE
				</Link>
			</div>

			<div
				ref={cursorLabel}
				className="fixed top-0 left-0 w-[300px] h-[200px] bg-neo-black border-4 border-neo-black z-50 pointer-events-none hidden md:flex items-center justify-center overflow-hidden -translate-x-1/2 -translate-y-1/2 scale-0 origin-center"
			>
				{activeProject !== null && (
					<div
						className="w-full h-full flex items-center justify-center text-neo-black font-bold text-2xl text-center p-4"
						style={{ backgroundColor: projects[activeProject].color }}
					>
						PREVIEW IMAGE <br /> {projects[activeProject].title}
					</div>
				)}
			</div>
		</section>
	);
}
