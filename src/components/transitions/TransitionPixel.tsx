'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TransitionPixel() {
	const container = useRef(null);
	// Kita buat grid 10 baris x 10 kolom = 100 kotak
	const [blocks] = useState([...Array(100)]);

	useGSAP(
		() => {
			// Animasi: Kotak mengecil (scale: 0) dari acak
			gsap.to('.pixel-block', {
				scale: 0,
				opacity: 0,
				duration: 0.8,
				stagger: {
					amount: 1,
					grid: [10, 10], // Memberi tahu GSAP bentuk gridnya
					from: 'center' // Mulai bolong dari tengah (atau ganti 'random')
				},
				ease: 'power3.inOut',
				delay: 0.2
			});

			// Hilangkan container biar bisa klik bawahnya
			gsap.to(container.current, {
				display: 'none',
				delay: 1.5
			});
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="fixed inset-0 z-[9999] flex flex-wrap w-screen h-screen pointer-events-none"
		>
			{blocks.map((_, i) => (
				<div
					key={i}
					className="pixel-block bg-neo-black border border-neo-black relative"
					style={{
						width: '10vw', // 10% lebar layar
						height: '10vh' // 10% tinggi layar
					}}
				>
					{/* Dekorasi kecil di dalam pixel biar detail */}
					<div className="absolute top-1 left-1 w-1 h-1 bg-neo-bg opacity-20" />
				</div>
			))}
		</div>
	);
}
