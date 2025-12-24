'use client';

import { useRef, useState, useEffect, useCallback, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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

const ProjectModal = dynamic(() => import('./ProjectModal'), {
	ssr: false,
	loading: () => null
});

interface KineticRowProps {
	project: Project;
	index: number;
	onClick: () => void;
	onHoverChange: (project: Project | null) => void;
	previewRef: React.RefObject<HTMLDivElement | null>;
}

const KineticRow = memo(({ project, index, onClick, onHoverChange, previewRef }: KineticRowProps) => {
	const isIndented = index % 3 === 1;

	const speedFactor = 1.0;

	const calculatedDuration = Math.max(project.title.length * speedFactor, 5);

	const handleMouseEnter = useCallback(() => {
		onHoverChange(project);
		if (previewRef.current) {
			gsap.to(previewRef.current, {
				scale: 1,
				autoAlpha: 1,
				// rotate: 3,
				duration: 0.3,
				ease: 'back.out(1.7)',
				overwrite: 'auto'
			});
		}
	}, [project, onHoverChange, previewRef]);

	const handleMouseLeave = useCallback(() => {
		onHoverChange(null);
		if (previewRef.current) {
			gsap.to(previewRef.current, {
				scale: 0,
				autoAlpha: 0,
				rotate: 0,
				duration: 0.2,
				overwrite: 'auto'
			});
		}
	}, [onHoverChange, previewRef]);

	const marqueeContent = Array(8).fill(project.title);

	return (
		<>
			<style
				jsx
				global
			>{`
				@keyframes marquee-scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				/* Hapus class .animate-marquee statis yang lama */
			`}</style>

			<div
				onClick={onClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`group relative w-full py-6 border-b-4 border-neo-black cursor-pointer transition-colors duration-200 
                hover:bg-neo-black hover:text-neo-lime ${isIndented ? 'md:pl-24' : 'md:pl-0'}`}
			>
				<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 px-4 z-10 relative will-change-transform overflow-hidden">
					<span className="font-mono text-neo-black/50 group-hover:text-neo-lime/70 text-lg font-bold shrink-0">
						{(index + 1).toString().padStart(2, '0')}
					</span>

					<div className="relative flex-1 overflow-hidden h-14 md:h-20 flex items-center">
						<h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-neo-black -skew-x-12 transition-opacity duration-0 group-hover:opacity-0 whitespace-nowrap">
							{project.title}
						</h3>

						<div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
							<div
								className="flex gap-6 whitespace-nowrap will-change-transform"
								style={{
									animation: `marquee-scroll ${calculatedDuration}s linear infinite`
								}}
							>
								{marqueeContent.map((text, i) => (
									<span
										key={i}
										className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-neo-lime -skew-x-12"
									>
										{text}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className="hidden md:flex ml-auto gap-4 font-mono text-xs font-bold text-neo-black group-hover:text-neo-lime uppercase tracking-wider items-center shrink-0 z-20">
						<span className="border-2 border-neo-black group-hover:border-neo-lime px-2 py-1">
							{project.year}
						</span>
						<span className="w-max bg-neo-black text-neo-white group-hover:bg-neo-lime group-hover:text-neo-black px-2 py-1">
							/{project.category}
						</span>
					</div>
				</div>
			</div>
		</>
	);
});

KineticRow.displayName = 'KineticRow';

export default function ArchiveTable() {
	const container = useRef(null);
	const previewRef = useRef<HTMLDivElement>(null);

	const xTo = useRef<gsap.QuickToFunc | null>(null);
	const yTo = useRef<gsap.QuickToFunc | null>(null);

	const [filter, setFilter] = useState('ALL');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

	const filteredProjects = filter === 'ALL' ? allProjects : allProjects.filter((p) => p.category === filter);

	useGSAP(
		() => {
			xTo.current = gsap.quickTo(previewRef.current, 'x', { duration: 0.3, ease: 'power3.out' });
			yTo.current = gsap.quickTo(previewRef.current, 'y', { duration: 0.3, ease: 'power3.out' });

			const tl = gsap.timeline();

			tl.from('.filter-btn', {
				x: -50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.6,
				ease: 'power3.out',
				clearProps: 'all'
			});

			tl.from(
				'.divider-line',
				{
					scaleX: 0,
					transformOrigin: 'left center',
					duration: 0.8,
					ease: 'expo.out',
					clearProps: 'all'
				},
				'-=0.4'
			);

			tl.from(
				'.kinetic-row',
				{
					x: -100,
					opacity: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: 'power3.out',
					clearProps: 'all'
				},
				'-=0.6'
			);
		},
		{ scope: container }
	);

	useEffect(() => {
		const movePreview = (e: MouseEvent) => {
			if (!previewRef.current || selectedProject) return;
			if (xTo.current && yTo.current) {
				xTo.current(e.clientX + 20);
				yTo.current(e.clientY + 20);
			}
		};

		window.addEventListener('mousemove', movePreview);
		return () => window.removeEventListener('mousemove', movePreview);
	}, [selectedProject]);

	useEffect(() => {
		if (selectedProject) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [selectedProject]);

	const handleHoverChange = useCallback((project: Project | null) => {
		setHoveredProject(project);
	}, []);

	return (
		<div className="w-full max-w-[1920px] mx-auto">
			<div
				ref={container}
				className="relative z-10 w-full"
			>
				<div className="flex flex-wrap gap-2 md:gap-4 mb-12 items-center p-1">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`filter-btn px-8 py-3 md:py-4 font-black text-sm md:text-base uppercase border-4 border-neo-black transition-all duration-200
                            ${
								filter === cat
									? 'bg-neo-black text-neo-lime'
									: 'bg-neo-white text-neo-black hover:bg-neo-lime hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1'
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				<div className="flex flex-col w-full border-t-4 border-neo-black divider-line origin-left">
					{filteredProjects.map((project, i) => (
						<div
							key={`${project.title}-${i}`}
							className="kinetic-row"
						>
							<KineticRow
								project={project}
								index={i}
								onClick={() => setSelectedProject(project)}
								onHoverChange={handleHoverChange}
								previewRef={previewRef}
							/>
						</div>
					))}

					{filteredProjects.length === 0 && (
						<div className="py-20 text-center font-mono text-gray-500 font-bold text-xl uppercase">
							NO_DATA_FOUND
						</div>
					)}
				</div>
			</div>

			<div
				ref={previewRef}
				className="fixed top-0 left-0 z-50 pointer-events-none w-72 h-48 bg-neo-white border-4 border-neo-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] invisible origin-center p-1 will-change-transform"
			>
				{hoveredProject && (
					<div className="relative w-full h-full border-2 border-neo-black bg-gray-200">
						<Image
							src={hoveredProject.image}
							alt="preview"
							fill
							sizes="300px"
							className="object-cover object-top"
						/>
					</div>
				)}
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</div>
	);
}
