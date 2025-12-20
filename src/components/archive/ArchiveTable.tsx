'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Project {
	year: string;
	title: string;
	category: string;
	stack: string;
	color: string;
	status: string;
	desc: string;
}

const allProjects: Project[] = [
	{
		year: '2025',
		title: 'E-COMMERCE DASHBOARD',
		category: 'WEB APP',
		stack: 'Next.js, Prisma',
		color: '#FF6B6B',
		status: 'LIVE',
		desc: 'A comprehensive dashboard for managing sales, inventory, and customer data.'
	},
	{
		year: '2025',
		title: 'BATIK CLASSIFIER AI',
		category: 'ML / AI',
		stack: 'Python, TensorFlow',
		color: '#4ECDC4',
		status: 'DEV',
		desc: 'CNN model to classify 15 types of Batik motifs with high accuracy.'
	},
	{
		year: '2024',
		title: 'SINAR PLASTIK STORE',
		category: 'WEB APP',
		stack: 'Laravel, MySQL',
		color: '#FFE66D',
		status: 'LIVE',
		desc: 'Custom POS and Inventory system for retail store.'
	},
	{
		year: '2024',
		title: 'TASKFLOW DESKTOP',
		category: 'SOFTWARE',
		stack: 'Java Swing, Hibernate',
		color: '#1A535C',
		status: 'OFFLINE',
		desc: 'Desktop project management tool.'
	},
	{
		year: '2024',
		title: 'CRYPTO LANDING PAGE',
		category: 'WEBSITE',
		stack: 'React, Tailwind',
		color: '#FF9F1C',
		status: 'LIVE',
		desc: 'High-conversion landing page with WebGL.'
	},
	{
		year: '2023',
		title: 'RAINFALL SIMULATION',
		category: 'ML / AI',
		stack: 'Python, Scikit-Learn',
		color: '#2EC4B6',
		status: 'DEV',
		desc: 'Predictive modeling for rainfall intensity.'
	},
	{
		year: '2023',
		title: 'PORTAL SPMB BOGOR',
		category: 'WEBSITE',
		stack: 'PHP, Bootstrap',
		color: '#E71D36',
		status: 'LIVE',
		desc: 'Student admission portal.'
	},
	{
		year: '2023',
		title: 'WEDDING PRESET W.',
		category: 'WEBSITE',
		stack: 'Next.js, Framer',
		color: '#7209B7',
		status: 'LIVE',
		desc: 'Aesthetic portfolio for wedding service.'
	}
];

const categories = ['ALL', 'WEBSITE', 'WEB APP', 'SOFTWARE', 'ML / AI'];

interface ProjectModalProps {
	project: Project;
	onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
	const modalRef = useRef(null);
	const contentRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
			tl.fromTo(contentRef.current, { y: '100%' }, { y: '0%', duration: 0.5, ease: 'power4.inOut' });
		},
		{ scope: modalRef }
	);

	const handleClose = () => {
		const tl = gsap.timeline({ onComplete: onClose });
		tl.to(contentRef.current, { y: '100%', duration: 0.4, ease: 'power4.in' });
		tl.to(modalRef.current, { opacity: 0, duration: 0.2 }, '-=0.2');
	};

	return (
		<div
			ref={modalRef}
			className="fixed inset-0 z-[100] flex items-end justify-center md:items-center"
		>
			<div
				onClick={handleClose}
				className="absolute inset-0 bg-neo-black/95 cursor-pointer"
			/>
			<div
				ref={contentRef}
				className="relative z-10 w-full h-[90vh] md:h-[95vh] md:w-[90vw] bg-neo-bg border-t-4 md:border-4 border-neo-black shadow-2xl overflow-hidden flex flex-col"
			>
				<div className="flex justify-between items-center p-4 md:p-6 border-b-4 border-neo-black bg-neo-white shrink-0">
					<h2 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter truncate pr-4">
						{project.title}
					</h2>
					<button
						onClick={handleClose}
						className="px-4 py-2 bg-neo-black text-neo-white font-bold hover:bg-neo-lime hover:text-neo-black border-2 border-transparent hover:border-neo-black transition-colors"
					>
						CLOSE [X]
					</button>
				</div>

				<div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
					<div className="w-full md:w-3/4 bg-gray-200 h-full overflow-y-auto border-b-4 md:border-b-0 md:border-r-4 border-neo-black relative flex flex-col">
						<div
							className="h-[400px] w-full flex items-center justify-center text-neo-black font-black text-4xl p-10 text-center shrink-0"
							style={{ backgroundColor: project.color }}
						>
							HERO IMAGE <br /> {project.title}
						</div>
						<div className="flex-1 bg-white p-10 space-y-10 min-h-[1000px]">
							<div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
								Section 1: UI Components
							</div>
							<div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
								Section 2: Mobile View
							</div>
							<div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
								Section 3: Feature Breakdown
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/4 h-full bg-neo-white overflow-y-auto flex flex-col">
						<div className="p-6 md:p-8 space-y-8">
							<div>
								<h3 className="font-bold text-sm text-gray-500 mb-1">TYPE</h3>
								<p className="font-black text-xl uppercase">{project.category}</p>
							</div>
							<div>
								<h3 className="font-bold text-sm text-gray-500 mb-1">STACK</h3>
								<div className="flex flex-wrap gap-2">
									{project.stack.split(', ').map((t) => (
										<span
											key={t}
											className="px-2 py-1 border border-neo-black bg-neo-lime text-xs font-bold"
										>
											{t}
										</span>
									))}
								</div>
							</div>
							<div>
								<h3 className="font-bold text-sm text-gray-500 mb-1">DESC</h3>
								<p className="text-sm opacity-80 font-medium">{project.desc}</p>
							</div>
						</div>

						<div className="mt-auto p-6 md:p-8 pt-4 border-t-2 border-neo-black bg-neo-white sticky bottom-0">
							<button className="w-full py-4 bg-neo-black text-neo-white font-bold hover:bg-neo-lime hover:text-neo-black transition-colors shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1">
								VISIT SITE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface ProjectRowProps {
	project: Project;
	index: number;
	onClick: () => void;
	setHoveredColor: (color: string | null) => void;
	previewRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectRow = ({ project, index, onClick, setHoveredColor, previewRef }: ProjectRowProps) => {
	const rowRef = useRef(null);
	const marqueeRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	useGSAP(
		() => {
			if (!marqueeRef.current) return;

			const width = marqueeRef.current.offsetWidth;
			const pixelsPerSecond = 100;
			const duration = width / 2 / pixelsPerSecond;

			const tl = gsap.to(marqueeRef.current, {
				xPercent: -50,
				repeat: -1,
				duration: duration,
				ease: 'linear',
				paused: true
			});

			if (isHovered) {
				tl.play();
			} else {
				tl.pause();
				gsap.to(marqueeRef.current, { xPercent: 0, duration: 0.5 });
			}
		},
		{ scope: rowRef, dependencies: [isHovered] }
	);

	return (
		<div
			ref={rowRef}
			onClick={onClick}
			onMouseEnter={() => {
				setIsHovered(true);
				setHoveredColor(project.color);
				if (previewRef.current) gsap.to(previewRef.current, { scale: 1, autoAlpha: 1, duration: 0.2 });
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				setHoveredColor(null);
				if (previewRef.current) gsap.to(previewRef.current, { scale: 0, autoAlpha: 0, duration: 0.2 });
			}}
			className="archive-row opacity-0 group relative w-full border-b-4 border-neo-black bg-neo-white hover:bg-neo-black hover:text-neo-lime transition-colors duration-300 cursor-pointer overflow-hidden h-24 md:h-32 flex items-center px-4 md:px-8"
		>
			<div
				className={`flex w-full items-center justify-between pr-12 md:pr-16 transition-opacity duration-300 ${
					isHovered ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<div className="flex items-center gap-6 md:gap-10 overflow-hidden">
					<span className="font-mono text-xl opacity-50 flex-shrink-0">
						{(index + 1).toString().padStart(2, '0')}
					</span>
					<h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter truncate">
						{project.title}
					</h3>
				</div>
				<div className="hidden md:flex items-center gap-10 flex-shrink-0">
					<span className="font-mono text-sm border-2 border-neo-black px-2 py-1">{project.category}</span>
				</div>
			</div>

			<div
				className={`absolute inset-0 flex items-center overflow-hidden pointer-events-none opacity-0 ${
					isHovered ? 'opacity-100' : ''
				} z-10`}
			>
				<div
					ref={marqueeRef}
					className="flex whitespace-nowrap"
				>
					{[...Array(10)].map((_, i) => (
						<span
							key={i}
							className="text-4xl md:text-6xl font-black uppercase tracking-tighter px-4 italic text-neo-lime"
						>
							{project.title} <span className="text-stroke-white text-transparent mx-2">—</span>
						</span>
					))}
				</div>
			</div>

			<div
				className={`absolute right-4 md:right-8 z-20 transition-transform duration-300 ${
					isHovered ? 'hidden' : 'text-neo-black'
				}`}
			>
				↗
			</div>
		</div>
	);
};

export default function ArchiveTable() {
	const container = useRef(null);
	const previewRef = useRef<HTMLDivElement>(null);
	const [filter, setFilter] = useState('ALL');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [hoveredColor, setHoveredColor] = useState<string | null>(null);

	const filteredProjects = filter === 'ALL' ? allProjects : allProjects.filter((p) => p.category === filter);

	useGSAP(
		() => {
			gsap.set('.filter-container', { opacity: 0 });
			gsap.set('.archive-row', {
				transformPerspective: 1000,
				rotationX: -90,
				transformOrigin: 'top center',
				opacity: 0,
				y: 50
			});

			const tl = gsap.timeline({ delay: 0.2 });

			tl.to('.filter-container', { opacity: 1, duration: 0.5 });
			tl.fromTo(
				'.filter-btn',
				{ scale: 0, rotation: 10 },
				{ scale: 1, rotation: 0, stagger: 0.05, ease: 'back.out(1.7)' },
				'<'
			);

			tl.to(
				'.archive-row',
				{
					rotationX: 0,
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.08,
					ease: 'back.out(1.2)',
					clearProps: 'transform'
				},
				'-=0.3'
			);
		},
		{ scope: container }
	);

	useEffect(() => {
		const movePreview = (e: MouseEvent) => {
			if (!previewRef.current || selectedProject) return;
			gsap.to(previewRef.current, { x: e.clientX + 20, y: e.clientY + 20, duration: 0.3, ease: 'power3.out' });
		};
		window.addEventListener('mousemove', movePreview);
		return () => window.removeEventListener('mousemove', movePreview);
	}, [selectedProject]);

	useEffect(() => {
		document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
	}, [selectedProject]);

	return (
		<>
			<div
				ref={container}
				className="w-full"
			>
				<div className="flex justify-start mb-8 overflow-x-auto pb-2 md:pb-0">
					<div className="filter-container inline-flex border-4 border-neo-black bg-neo-white shadow-neo">
						{categories.map((cat, i) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={`
                                    filter-btn
                                    px-6 py-3 font-bold font-mono text-sm uppercase transition-all whitespace-nowrap
                                    border-r-4 border-neo-black last:border-r-0
                                    ${
										filter === cat
											? 'bg-neo-black text-neo-lime'
											: 'bg-neo-white text-neo-black hover:bg-neo-lime'
									}
                                `}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				<div className="border-t-4 border-neo-black">
					{filteredProjects.map((project, i) => (
						<ProjectRow
							key={i}
							index={i}
							project={project}
							onClick={() => setSelectedProject(project)}
							setHoveredColor={setHoveredColor}
							previewRef={previewRef}
						/>
					))}
				</div>

				{!selectedProject && (
					<div
						ref={previewRef}
						className="fixed top-0 left-0 z-50 pointer-events-none w-64 h-40 border-4 border-neo-black bg-neo-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center invisible origin-center"
					>
						<div
							className="w-full h-full flex flex-col items-center justify-center font-bold text-center p-2 text-neo-black border-2 border-white"
							style={{ backgroundColor: hoveredColor || '#fff' }}
						>
							<span className="text-5xl mb-2">✦</span>
						</div>
					</div>
				)}
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</>
	);
}
