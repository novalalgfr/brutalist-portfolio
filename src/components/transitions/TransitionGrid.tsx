'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionGrid() {
	const container = useRef(null);
	const [blocks] = useState([...Array(25)]);

	useGSAP(
		() => {
			gsap.to('.grid-block', {
				scale: 0.5,
				opacity: 0,
				duration: 0.6,
				stagger: {
					amount: 0.8,
					grid: [5, 5],
					from: 'random'
				},
				ease: 'power2.inOut',
				delay: 0.2
			});

			gsap.to(container.current, { display: 'none', delay: 1.2 });
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed inset-0 z-[9999] flex flex-wrap h-screen w-screen pointer-events-none"
		>
			{blocks.map((_, i) => (
				<div
					key={i}
					className="grid-block bg-neo-black border border-neo-black relative"
					style={{ width: '20vw', height: '20vh' }}
				>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neo-lime opacity-20 font-bold text-xs">
						+
					</div>
				</div>
			))}
		</div>
	);
}
