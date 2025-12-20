'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const followerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const isDesktop = window.matchMedia('(pointer: fine)').matches;

		if (!isDesktop) return;

		document.body.style.cursor = 'none';

		const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.1, ease: 'power3' });
		const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.1, ease: 'power3' });

		const xToFollower = gsap.quickTo(followerRef.current, 'x', { duration: 0.3, ease: 'power3' });
		const yToFollower = gsap.quickTo(followerRef.current, 'y', { duration: 0.3, ease: 'power3' });

		const onMouseMove = (e: MouseEvent) => {
			xTo(e.clientX);
			yTo(e.clientY);
			xToFollower(e.clientX);
			yToFollower(e.clientY);
		};

		window.addEventListener('mousemove', onMouseMove);

		const onMouseEnter = () => {
			gsap.to(cursorRef.current, { scale: 3, backgroundColor: '#CCFF00', duration: 0.3 });
			gsap.to(followerRef.current, { scale: 0, duration: 0.3 });
		};

		const onMouseLeave = () => {
			gsap.to(cursorRef.current, { scale: 1, backgroundColor: '#121212', duration: 0.3 });
			gsap.to(followerRef.current, { scale: 1, duration: 0.3 });
		};

		const links = document.querySelectorAll('a, button');
		links.forEach((link) => {
			link.addEventListener('mouseenter', onMouseEnter);
			link.addEventListener('mouseleave', onMouseLeave);
		});

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			document.body.style.cursor = 'auto';
			links.forEach((link) => {
				link.removeEventListener('mouseenter', onMouseEnter);
				link.removeEventListener('mouseleave', onMouseLeave);
			});
		};
	}, []);

	return (
		<>
			<div
				ref={cursorRef}
				className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-neo-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
			/>
			<div
				ref={followerRef}
				className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-neo-black rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-300"
			/>
		</>
	);
}
