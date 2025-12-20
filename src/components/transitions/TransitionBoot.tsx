'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionBoot() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.to('.boot-text', {
				opacity: 1,
				duration: 0.1,
				stagger: 0.15
			});

			tl.to(container.current, {
				yPercent: -100,
				duration: 0.8,
				ease: 'power4.inOut',
				delay: 0.5
			});

			tl.set(container.current, { display: 'none' });
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed inset-0 z-[9999] bg-neo-black flex items-center justify-center text-neo-lime font-mono text-xs md:text-sm pointer-events-none"
		>
			<div className="text-left space-y-1">
				<div className="boot-text opacity-0">&gt; SYSTEM_CHECK... OK</div>
				<div className="boot-text opacity-0">&gt; LOADING_ASSETS... OK</div>
				<div className="boot-text opacity-0">&gt; INITIALIZING_UI... 100%</div>
				<div className="boot-text opacity-0 text-white animate-pulse">&gt; WELCOME_USER</div>
			</div>
		</div>
	);
}
