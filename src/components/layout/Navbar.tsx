'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const menuItems = [
	{ name: 'ARCHIVE', path: '/archive' },
	{ name: 'LABS', path: '/labs' },
	{ name: 'SPECS', path: '/specs' },
	{ name: 'SIGNAL', path: '/signal' }
];

export default function Navbar() {
	const container = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useGSAP(
		() => {
			const tl = gsap.timeline({ delay: 0.2 });

			tl.fromTo(
				container.current,
				{ yPercent: -100, visibility: 'hidden' },
				{ yPercent: 0, visibility: 'visible', duration: 0.8, ease: 'power4.inOut' }
			);

			tl.fromTo(
				'.nav-text',
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.5,
					ease: 'back.out(1.7)',
					clearProps: 'transform'
				},
				'-=0.4'
			);
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isOpen) {
			gsap.to('.mobile-overlay', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				duration: 0.5,
				ease: 'power4.inOut'
			});
			gsap.fromTo(
				'.mobile-link',
				{ y: 100, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2 }
			);
		} else {
			gsap.to('.mobile-overlay', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
				duration: 0.5,
				ease: 'power4.inOut'
			});
		}
	}, [isOpen]);

	return (
		<>
			<nav
				ref={container}
				className="fixed top-0 left-0 w-full h-20 bg-neo-white border-b-4 border-neo-black z-50 flex items-center justify-between invisible"
			>
				<Link
					href="/"
					className="h-full px-6 flex items-center border-r-4 border-neo-black hover:bg-neo-lime transition-colors group relative"
				>
					<div className="w-38 h-6 overflow-hidden relative">
						<span className="block text-xl font-black italic tracking-tighter transform transition-transform duration-300 group-hover:-translate-y-full">
							ITS.NOVAL
						</span>
						<span className="block text-xl font-black italic tracking-tighter absolute top-full left-0 transform transition-transform duration-300 group-hover:-translate-y-full text-neo-black">
							GO.HOME
						</span>
					</div>
				</Link>

				<div className="hidden md:flex h-full">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.path}
							className={`
                group relative h-full px-8 flex items-center justify-center 
                border-l-4 border-neo-black overflow-hidden
                ${pathname === item.path ? 'bg-neo-black text-neo-lime' : 'bg-neo-white text-neo-black'}
              `}
						>
							<div
								className={`absolute inset-0 bg-neo-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${
									pathname === item.path ? 'hidden' : ''
								}`}
							/>

							<div className="relative overflow-hidden h-6 w-full flex justify-center">
								<span className="nav-text block font-bold text-lg tracking-wide transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
									{item.name}
								</span>

								<span
									className={`
                                        block font-bold text-lg tracking-wide absolute top-full left-1/2 -translate-x-1/2 w-full text-center 
                                        transform transition-transform duration-300 ease-out group-hover:-translate-y-full
                                        ${pathname === item.path ? 'text-white' : 'text-neo-black'}
                                    `}
								>
									{item.name}
								</span>
							</div>
						</Link>
					))}
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden h-full px-6 border-l-4 border-neo-black bg-neo-black text-neo-white hover:bg-neo-lime hover:text-neo-black transition-colors flex items-center justify-center font-bold"
				>
					{isOpen ? 'CLOSE' : 'MENU'}
				</button>
			</nav>

			<div
				className="mobile-overlay fixed inset-0 bg-neo-black z-40 flex flex-col justify-center items-center clip-path-closed"
				style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
			>
				<div className="flex flex-col space-y-8 text-center">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.path}
							onClick={() => setIsOpen(false)}
							className="mobile-link text-6xl font-black text-neo-white hover:text-neo-lime hover:italic transition-all stroke-text"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="absolute bottom-10 text-neo-white font-mono text-sm opacity-50">© 2025 ARCHIVE_SYS</div>
			</div>
		</>
	);
}
