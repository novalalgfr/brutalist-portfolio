'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionSwipe() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.to('.swipe-bar', {
				scaleX: 0,
				transformOrigin: 'right',
				duration: 0.8,
				stagger: 0.1,
				ease: 'power4.inOut',
				delay: 0.2
			});

			gsap.to(container.current, { display: 'none', delay: 1.2 });
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed inset-0 z-[9999] flex flex-col pointer-events-none h-screen w-screen"
		>
			{[...Array(5)].map((_, i) => (
				<div
					key={i}
					className="swipe-bar bg-neo-black w-full flex-1 border-b border-neo-bg relative"
				>
					<div className="absolute top-1/2 left-4 -translate-y-1/2 text-neo-lime font-mono text-[10px] opacity-30 overflow-hidden w-20 whitespace-nowrap">
						SIGNAL_TUNING... {i}0{i} MHz
					</div>
				</div>
			))}
		</div>
	);
}
