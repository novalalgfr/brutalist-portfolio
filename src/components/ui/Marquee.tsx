/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
	text: string;
	direction?: 'left' | 'right';
	className?: string;
}

export default function Marquee({ text, direction = 'left', className = '' }: MarqueeProps) {
	const container = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const movePercent = direction === 'left' ? -50 : 50;

		const ctx = gsap.context(() => {
			gsap.to(textRef.current, {
				xPercent: movePercent,
				repeat: -1,
				duration: 10,
				ease: 'linear'
			});
		}, container);

		return () => ctx.revert();
	}, [direction]);

	return (
		<div
			ref={container}
			className={`overflow-hidden flex whitespace-nowrap border-y-4 border-neo-black bg-neo-lime py-3 ${className}`}
		>
			<div
				ref={textRef}
				className="flex space-x-8 font-black text-4xl uppercase italic tracking-tighter text-neo-black"
			>
				{[...Array(4)].map((_, i) => (
					<span
						key={i}
						className="flex-shrink-0"
					>
						{text} <span className="mx-4 text-neo-white">///</span>
					</span>
				))}
			</div>
		</div>
	);
}
