'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ArchiveTable from '@/components/archive/ArchiveTable';
import TransitionGrid from '@/components/transitions/TransitionGrid';

export default function ArchiveView() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.set('.archive-header', { y: 50, opacity: 0 });

			const tl = gsap.timeline({ delay: 0.8 });

			tl.to('.archive-header', {
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power3.out'
			});
		},
		{ scope: container }
	);

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10 relative"
		>
			<TransitionGrid />

			<header className="mb-12 relative overflow-hidden border-b-4 border-neo-black pb-8">
				<div className="absolute top-0 right-0 opacity-10 pointer-events-none">
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
					>
						<path
							d="M0 0H100V100H0V0Z"
							stroke="black"
							strokeWidth="2"
						/>
						<path
							d="M10 10H90V90H10V10Z"
							stroke="black"
							strokeWidth="2"
						/>
					</svg>
				</div>

				<div className="archive-header opacity-0">
					<div className="flex items-center gap-4 mb-2">
						<span className="bg-neo-black text-neo-white border-2 border-neo-black px-3 py-1 font-bold font-mono text-xs">
							📂 DATABASE
						</span>
						<span className="font-mono text-xs opacity-50">SELECTED WORKS</span>
					</div>
					<h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-neo-black">
						ARCHIVE<span className="text-neo-lime text-stroke-2">.LOG</span>
					</h1>
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6 border-l-4 border-neo-black pl-4">
						<p className="max-w-xl font-mono text-sm opacity-80">
							A curated collection of commercial projects, case studies, and development logs. Stored for
							long-term reference.
						</p>

						<div className="font-mono text-xs text-right opacity-60">
							TOTAL_ENTRIES: 08 <br />
							STATUS: PUBLIC_ACCESS
						</div>
					</div>
				</div>
			</header>

			<section>
				<ArchiveTable />
			</section>

			<div className="h-20" />
		</main>
	);
}
