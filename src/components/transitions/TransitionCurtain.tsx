'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionCurtain() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.to('.curtain-col', {
				scaleY: 0,
				transformOrigin: 'top',
				duration: 0.8,
				stagger: {
					amount: 0.5,
					from: 'random'
				},
				ease: 'power4.inOut',
				delay: 0.2
			});

			gsap.to(container.current, {
				display: 'none',
				delay: 1.2
			});
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed inset-0 z-[9999] flex h-screen w-screen pointer-events-none"
		>
			{[...Array(10)].map((_, i) => (
				<div
					key={i}
					className="curtain-col h-full bg-neo-black border-r-2 border-neo-bg relative"
					style={{
						width: '10%',
						backgroundColor: i % 2 === 0 ? '#121212' : '#0a0a0a'
					}}
				>
					<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neo-lime font-mono text-xs -rotate-90 whitespace-nowrap opacity-50">
						LOADING SYS...
					</div>
				</div>
			))}
		</div>
	);
}
