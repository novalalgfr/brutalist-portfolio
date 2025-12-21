'use client';

import { useRef } from 'react';
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

interface ProjectModalProps {
	project: Project;
	onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
							<span className="bg-neo-black text-neo-lime px-3 py-1 font-mono font-bold text-sm uppercase">
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
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-8 md:gap-12">
						<div className={project.link ? 'w-full md:w-2/3' : 'w-full'}>
							<h3 className="font-black text-2xl uppercase mb-4">Project Overview</h3>
							<p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
								{project.desc}
							</p>
						</div>

						<div className={project.link ? 'w-full md:w-1/3' : 'hidden'}>
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
