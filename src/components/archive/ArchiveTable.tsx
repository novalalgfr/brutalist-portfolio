'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

interface Project {
	year: string;
	title: string;
	category: string;
	stack: string;
	desc: string;
	image: string;
	link?: string;
}

export const allProjects: Project[] = [
	{
		year: '2025',
		title: 'Portal SPMB Kota Bogor 2026',
		category: 'WEBSITE',
		stack: 'Laravel Inertia',
		desc: 'Developed the 2026 SPMB Portal for Bogor City with significant improvements from the previous version, separating SD and SMP level navigation with distinct visual branding using unique color schemes for each level, and implementing card data components as an alternative to table displays to enhance responsiveness and information readability on mobile devices.',
		image: '/archive/spmb-bogor-2026.jpg'
	},
	{
		year: '2025',
		title: 'Orbit App',
		category: 'SOFTWARE',
		stack: 'Java, Spring, Hibernate, Java Swing, FlatLaf',
		desc: "Developed a desktop project management application called 'Orbit' as a centralized ticketing system solution to address inefficiencies in manual task management methods, built using Java with MVC architecture implementation, Spring Framework for dependency injection, Hibernate ORM for database management, and Java Swing with FlatLaf for modern interface, enabling real-time task status monitoring, clear work distribution, and enhanced project progress transparency to support more structured and productive team collaboration.",
		image: '/archive/orbit-app.png'
	},
	{
		year: '2025',
		title: 'Toko Sinar Plastik',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: 'Led a team as Product Manager in developing an integrated e-commerce website with Point of Sale (POS) system, managing product roadmap, coordinating between developer and designer teams, and ensuring timely delivery of key features including inventory management, payment gateway, and real-time sales tracking aligned with business requirements.',
		image: '/archive/sinar-plastik.jpg',
		link: 'https://toko-sinar-plastik.vercel.app/'
	},
	{
		year: '2025',
		title: 'Authentication and Classification of Yogyakarta Batik',
		category: 'ML / AI',
		stack: 'EfficienNet, TensorFlow, Python',
		desc: 'Developed a machine learning-based authentication and classification system for Yogyakarta batik using EfficientNetB0 architecture for image classification, with full-stack implementation including responsive Next.js frontend and Flask backend as REST API, achieving high accuracy in identifying and classifying various traditional Yogyakarta batik patterns.',
		image: '/archive/batik-yogya.jpg',
		link: 'https://batik-yogya.my.id/'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Bogor 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Developed a comprehensive informational portal for Bogor City's 2025 SPMB program serving elementary and junior high school levels, providing centralized access to registration schedules, administrative requirements, enrollment procedures, result announcements, and complete admission guidelines for parents and prospective students.",
		image: '/archive/spmb-bogor-2025.jpg'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Cilegon 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Built an integrated information portal for Cilegon City's 2025 SPMB program for elementary and junior high school levels, presenting unified information on registration schedules, document requirements, selection mechanisms, result publications, and comprehensive admission guidelines to assist parents and prospective students.",
		image: '/archive/spmb-cilegon-2025.jpg'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Palembang 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Designed a comprehensive information portal for Palembang City's 2025 SPMB program covering elementary and junior high school levels, delivering complete information on registration timelines, administrative provisions, selection stages, acceptance announcements, and detailed admission guidelines for the community and prospective students.",
		image: '/archive/spmb-palembang-2025.jpg'
	},
	{
		year: '2024',
		title: 'Sistem Informasi Pendidikan Kab. Mimika',
		category: 'WEBSITE',
		stack: 'React.js',
		desc: 'Developed an educator information system for Mimika Regency that provides comprehensive data on all schools across education levels, covering institutional profiles, educator information, facilities, and education statistics to enhance transparency and accessibility of educational information throughout the Mimika region.',
		image: '/archive/sip-mimika.jpg',
		link: 'https://dinaspendidikan.mimikakab.go.id/'
	},
	{
		year: '2024',
		title: 'Company Profile Mardawa',
		category: 'WEBSITE',
		stack: 'FIGMA',
		desc: "Designed the UI/UX interface for PT Mardawa Intiguna Persada's corporate profile website, presenting the company's identity professionally through modern design, intuitive navigation, and optimal user experience to strengthen brand presence on digital platforms.",
		image: '/archive/mardawa.jpg',
		link: 'https://mardawa.id/'
	}
];

const categories = ['ALL', 'WEBSITE', 'SOFTWARE', 'ML / AI'];

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
					<div className="w-full md:w-3/4 h-full bg-gray-100 border-b-4 md:border-b-0 md:border-r-4 border-neo-black overflow-y-auto overflow-x-hidden">
						<div className="w-full min-h-full flex items-start justify-center p-4 md:p-8">
							<div className="w-full max-w-6xl relative">
								<Image
									src={project.image}
									alt={project.title}
									width={1920}
									height={1080}
									priority
									sizes="(max-width: 768px) 100vw, 75vw"
									className="w-full h-auto object-contain border-4 border-neo-black shadow-lg"
								/>
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

						{project.link && (
							<div className="mt-auto p-6 md:p-8 pt-4 border-t-2 border-neo-black bg-neo-white sticky bottom-0">
								<button
									className="w-full py-4 bg-neo-white text-neo-black font-bold border-2 hover:bg-neo-lime hover:text-neo-black transition-colors shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1"
									onClick={() => window.open(project.link, '_blank')}
								>
									VISIT SITE
								</button>
							</div>
						)}
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
	setHoveredProject: (project: Project | null) => void;
	previewRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectRow = ({ project, index, onClick, setHoveredProject, previewRef }: ProjectRowProps) => {
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
				duration,
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
				setHoveredProject(project);
				if (previewRef.current) gsap.to(previewRef.current, { scale: 1, autoAlpha: 1, duration: 0.2 });
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				setHoveredProject(null);
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
	const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

	const filteredProjects = filter === 'ALL' ? allProjects : allProjects.filter((p) => p.category === filter);

	useGSAP(
		() => {
			gsap.killTweensOf('.archive-row');

			gsap.fromTo(
				'.archive-row',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.4,
					stagger: 0.05,
					ease: 'power2.out',
					overwrite: 'auto'
				}
			);

			gsap.to('.filter-container', { opacity: 1, duration: 0.3 });
		},
		{ scope: container, dependencies: [filter] }
	);

	useEffect(() => {
		const movePreview = (e: MouseEvent) => {
			if (!previewRef.current || selectedProject) return;
			gsap.to(previewRef.current, {
				x: e.clientX + 20,
				y: e.clientY + 20,
				duration: 0.3,
				ease: 'power3.out'
			});
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
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={`px-6 py-3 font-bold font-mono text-sm uppercase transition-all whitespace-nowrap border-r-4 border-neo-black last:border-r-0 ${
									filter === cat
										? 'bg-neo-black text-neo-lime'
										: 'bg-neo-white text-neo-black hover:bg-neo-lime'
								}`}
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
							setHoveredProject={setHoveredProject}
							previewRef={previewRef}
						/>
					))}
				</div>

				{!selectedProject && (
					<div
						ref={previewRef}
						className="fixed top-0 left-0 z-50 pointer-events-none w-64 h-40 border-4 border-neo-black bg-neo-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] invisible origin-center overflow-hidden"
					>
						{hoveredProject && (
							<Image
								src={hoveredProject.image}
								alt={hoveredProject.title}
								width={256}
								height={160}
								className="w-full h-full object-cover object-top"
							/>
						)}
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
