'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionCurtain() {
	const container = useRef(null);

	useGSAP(
		() => {
			// Animasi: Batang hitam naik ke atas (Scale Y 1 -> 0)
			// Stagger random biar efeknya "glitchy"
			gsap.to('.curtain-col', {
				scaleY: 0,
				transformOrigin: 'top', // Naik ke atas
				duration: 0.8,
				stagger: {
					amount: 0.5,
					from: 'random' // Acak urutannya
				},
				ease: 'power4.inOut',
				delay: 0.2 // Delay dikit biar ga kaget
			});

			// Hilangkan container setelah animasi selesai biar bisa klik konten di bawahnya
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
			{/* Kita buat 10 kolom vertikal */}
			{[...Array(10)].map((_, i) => (
				<div
					key={i}
					className="curtain-col h-full bg-neo-black border-r-2 border-neo-bg relative"
					style={{
						width: '10%', // Bagi rata 10 kolom
						// Sedikit variasi warna biar organik (opsional, hitam solid juga oke)
						backgroundColor: i % 2 === 0 ? '#121212' : '#0a0a0a'
					}}
				>
					{/* Dekorasi kecil di bawah setiap kolom */}
					<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neo-lime font-mono text-xs -rotate-90 whitespace-nowrap opacity-50">
						LOADING SYS...
					</div>
				</div>
			))}
		</div>
	);
}
