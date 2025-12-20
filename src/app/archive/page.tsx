/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import ArchiveTable from '@/components/archive/ArchiveTable';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ArchivePage() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from('.header-box', {
				y: 50,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power3.out'
			});
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10"
		>
			<header className="mb-12 flex flex-col md:flex-row items-stretch gap-4">
				<div className="header-box flex-1 bg-neo-black text-neo-white p-6 md:p-10 border-4 border-neo-black relative overflow-hidden group">
					<div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

					<div className="relative z-10 flex flex-col justify-between h-full">
						<div className="flex justify-between items-start mb-4">
							<span className="font-mono text-xs text-neo-lime">/// PROJECT_INDEX</span>
							<span className="font-mono text-xs opacity-50">V.2.0</span>
						</div>

						<h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
							Archive.
						</h1>
					</div>
				</div>

				<div className="header-box w-full md:w-64 bg-neo-white border-4 border-neo-black p-6 flex flex-col justify-center gap-2 shadow-neo">
					<span className="font-mono text-xs opacity-50 uppercase">Last System Update</span>
					<div className="text-2xl font-black bg-neo-lime inline-block px-2 self-start border-2 border-neo-black">
						20 DEC
					</div>
					<span className="font-mono text-sm font-bold">YEAR 2025</span>
				</div>
			</header>

			<section>
				<ArchiveTable />
			</section>

			<div className="h-20" />
		</main>
	);
}
