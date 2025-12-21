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
	const overlayRef = useRef(null);
	const contentRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
			tl.fromTo(
				contentRef.current,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.05 }
			);
		},
		{ scope: overlayRef }
	);

	const handleClose = () => {
		const tl = gsap.timeline({ onComplete: onClose });
		tl.to(contentRef.current, { y: 20, opacity: 0, duration: 0.2 });
		tl.to(overlayRef.current, { opacity: 0, duration: 0.2 });
	};

	return (
		<div
			ref={overlayRef}
			className="fixed inset-0 z-[100] overflow-y-auto bg-neo-white/95"
		>
			<div className="fixed top-4 right-4 md:top-8 md:right-8 z-[110]">
				<button
					onClick={handleClose}
					className="w-14 h-14 flex items-center justify-center bg-neo-white border-4 border-neo-black hover:bg-neo-black hover:text-neo-lime transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
				>
					<span className="font-mono font-black text-2xl">[X]</span>
				</button>
			</div>

			<div className="min-h-screen w-full flex justify-center py-12 px-4 md:py-20">
				<div
					ref={contentRef}
					className="w-full max-w-5xl bg-transparent"
				>
					<div className="mb-8 md:mb-12 text-center md:text-left border-b-4 border-neo-black pb-8">
						<div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start">
							<span className="bg-neo-black text-neo-lime px-3 py-1 font-mono font-bold text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
								{project.category}
							</span>
							<span className="border-2 border-neo-black px-3 py-1 font-mono font-bold text-sm uppercase bg-white">
								{project.year}
							</span>
						</div>
						<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-neo-black">
							{project.title}
						</h1>
						<p className="font-mono text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">
							{project.stack}
						</p>
					</div>

					<div className="w-full mb-12 bg-gray-100 border-4 border-neo-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
						<Image
							src={project.image}
							alt={project.title}
							width={1920}
							height={1080}
							className="w-full h-auto block"
							priority
							quality={85}
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-8 md:gap-12">
						<div className="w-full md:w-2/3">
							<h3 className="font-black text-2xl uppercase mb-4">Project Overview</h3>
							<p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
								{project.desc}
							</p>
						</div>

						<div className="w-full md:w-1/3">
							{project.link && (
								<div className="sticky top-24">
									<button
										onClick={() => window.open(project.link, '_blank')}
										className="w-full py-4 bg-neo-lime text-neo-black font-black uppercase text-xl border-4 border-neo-black hover:bg-neo-black hover:text-neo-lime transition-all shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
									>
										Visit Website
									</button>
								</div>
							)}
						</div>
					</div>

					<div className="h-24"></div>
				</div>
			</div>
		</div>
	);
}

interface KineticRowProps {
	project: Project;
	index: number;
	onClick: () => void;
	setHoveredProject: (project: Project | null) => void;
	previewRef: React.RefObject<HTMLDivElement | null>;
}

const KineticRow = ({ project, index, onClick, setHoveredProject, previewRef }: KineticRowProps) => {
	const rowRef = useRef(null);
	const isIndented = index % 3 === 1;

	return (
		<div
			ref={rowRef}
			onClick={onClick}
			onMouseEnter={() => {
				setHoveredProject(project);
				if (previewRef.current)
					gsap.to(previewRef.current, {
						scale: 1,
						autoAlpha: 1,
						rotate: 3,
						duration: 0.3,
						ease: 'back.out(1.7)'
					});
			}}
			onMouseLeave={() => {
				setHoveredProject(null);
				if (previewRef.current)
					gsap.to(previewRef.current, {
						scale: 0,
						autoAlpha: 0,
						rotate: 0,
						duration: 0.2
					});
			}}
			className={`group relative w-full py-6 border-b-4 border-neo-black cursor-pointer transition-all duration-200 
            hover:bg-neo-black hover:text-neo-lime ${isIndented ? 'md:pl-24' : 'md:pl-0'}`}
		>
			<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 px-4 z-10 relative">
				<span className="font-mono text-neo-black/50 group-hover:text-neo-lime/70 text-lg font-bold">
					{(index + 1).toString().padStart(2, '0')}
				</span>
				<h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-neo-black group-hover:text-neo-lime transition-all duration-300 group-hover:translate-x-4 group-hover:-skew-x-12">
					{project.title}
				</h3>
				<div className="hidden md:flex ml-auto gap-4 font-mono text-xs font-bold text-neo-black group-hover:text-neo-lime uppercase tracking-wider items-center">
					<span className="border-2 border-neo-black group-hover:border-neo-lime px-2 py-1">
						{project.year}
					</span>
					<span className="w-max bg-neo-black text-neo-white group-hover:bg-neo-lime group-hover:text-neo-black px-2 py-1">
						/{project.category}
					</span>
				</div>
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
			gsap.from('.kinetic-row', {
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.8,
				ease: 'power3.out',
				delay: 0.2
			});
		},
		{ scope: container }
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
		if (selectedProject) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [selectedProject]);

	return (
		<div className="w-full max-w-[1920px] mx-auto">
			<div
				ref={container}
				className="relative z-10 w-full"
			>
				<div className="flex flex-wrap gap-2 md:gap-4 mb-12 items-center">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`px-8 py-3 md:py-4 font-black text-sm md:text-base uppercase border-4 border-neo-black transition-all duration-200
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

				<div className="flex flex-col w-full border-t-4 border-neo-black">
					{filteredProjects.map((project, i) => (
						<div
							key={i}
							className="kinetic-row"
						>
							<KineticRow
								project={project}
								index={i}
								onClick={() => setSelectedProject(project)}
								setHoveredProject={setHoveredProject}
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
				className="fixed top-0 left-0 z-50 pointer-events-none w-72 h-48 bg-neo-white border-4 border-neo-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] invisible origin-center p-1"
			>
				{hoveredProject && (
					<div className="relative w-full h-full border-2 border-neo-black">
						<Image
							src={hoveredProject.image}
							alt="preview"
							fill
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
