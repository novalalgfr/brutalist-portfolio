/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TransitionSwipe from '@/components/transitions/TransitionSwipe';

const socialLinks = [
	{ name: 'GITHUB', url: 'https://github.com/novalalgfr', status: 'OPEN SOURCE' },
	{ name: 'LINKEDIN', url: 'https://www.linkedin.com/in/nopall/', status: 'PROFESSIONAL' },
	{ name: 'INSTAGRAM', url: 'https://www.instagram.com/novalalgfr_/', status: 'PERSONAL' },
	{ name: 'EMAIL', url: 'mailto:ahmad.noval2705@gmail.com', status: 'ENCRYPTED' }
];

export default function SignalPage() {
	const container = useRef(null);
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [buttonText, setButtonText] = useState('INITIATE TRANSMISSION');

	useGSAP(
		() => {
			gsap.set('.signal-header', { x: -50, opacity: 0 });
			gsap.set('.left-panel', { y: 50, opacity: 0 });
			gsap.set('.signal-link', { x: 50, opacity: 0 });
			gsap.set('.signal-loc', { opacity: 0 });

			const tl = gsap.timeline({ delay: 0.8 });

			tl.to('.signal-header', {
				x: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power3.out'
			});

			tl.to(
				'.left-panel',
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: 'power3.out'
				},
				'-=0.4'
			);

			tl.to(
				'.signal-link',
				{
					x: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.6,
					ease: 'back.out(1.2)'
				},
				'-=0.4'
			);

			tl.to('.signal-loc', { opacity: 1, duration: 0.5 }, '-=0.2');
		},
		{ scope: container }
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSending(true);
		setButtonText('ENCRYPTING DATA...');

		setTimeout(() => {
			setButtonText('SENDING...');
		}, 1000);

		setTimeout(() => {
			setButtonText('TRANSMISSION SUCCESS ✅');
			setIsSending(false);
			formRef.current?.reset();
			setTimeout(() => setButtonText('INITIATE TRANSMISSION'), 3000);
		}, 2500);
	};

	return (
		<main
			ref={container}
			className="min-h-screen bg-neo-bg px-4 md:px-10 py-10 relative overflow-hidden"
		>
			<TransitionSwipe />

			<header className="mb-12 signal-header opacity-0">
				<div className="flex items-center gap-4 mb-2">
					<div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
					<span className="font-mono text-xs font-bold tracking-widest text-red-600">LIVE FEED</span>
				</div>
				<h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-neo-black">
					SIGNAL<span className="text-neo-white text-stroke-black">.OUT</span>
				</h1>
				<p className="font-mono text-sm max-w-md mt-4 opacity-70 border-l-4 border-neo-black pl-4">
					Establish a secure connection. Whether for collaboration, inquiries, or just saying hello. The
					frequency is open.
				</p>
			</header>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
				<div className="left-panel opacity-0">
					<div className="bg-neo-black p-1 border-4 border-neo-black shadow-neo">
						<div className="bg-neo-white border-b-2 border-neo-black p-2 flex justify-between items-center mb-1">
							<span className="font-mono text-xs font-bold">MSG_COMPOSE.EXE</span>
							<div className="flex gap-1">
								<div className="w-3 h-3 border border-neo-black bg-white" />
								<div className="w-3 h-3 border border-neo-black bg-neo-lime" />
							</div>
						</div>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="bg-neo-black p-6 space-y-6"
						>
							<div className="space-y-2">
								<label className="font-mono text-xs text-neo-lime block">
									// IDENTIFICATION (NAME)
								</label>
								<input
									required
									type="text"
									className="w-full bg-[#111] border-b-2 border-gray-700 text-neo-white font-mono p-3 focus:outline-none focus:border-neo-lime focus:bg-[#222] transition-colors"
									placeholder="Enter your name_"
								/>
							</div>
							<div className="space-y-2">
								<label className="font-mono text-xs text-neo-lime block">// FREQUENCY (EMAIL)</label>
								<input
									required
									type="email"
									className="w-full bg-[#111] border-b-2 border-gray-700 text-neo-white font-mono p-3 focus:outline-none focus:border-neo-lime focus:bg-[#222] transition-colors"
									placeholder="Enter your email_"
								/>
							</div>
							<div className="space-y-2">
								<label className="font-mono text-xs text-neo-lime block">// PAYLOAD (MESSAGE)</label>
								<textarea
									required
									rows={4}
									className="w-full bg-[#111] border-b-2 border-gray-700 text-neo-white font-mono p-3 focus:outline-none focus:border-neo-lime focus:bg-[#222] transition-colors resize-none"
									placeholder="Type your transmission here..."
								/>
							</div>
							<button
								disabled={isSending}
								className={`w-full font-black text-xl py-4 border-2 border-neo-lime ${
									isSending
										? 'bg-neo-black text-neo-lime cursor-wait'
										: 'bg-neo-lime text-neo-black hover:bg-white'
								} transition-all duration-300 uppercase`}
							>
								{buttonText}
							</button>
						</form>
					</div>
				</div>

				<div className="right-panel flex flex-col gap-4">
					<h3 className="signal-header font-black text-xl mb-2 uppercase border-b-4 border-neo-black w-max pb-1 opacity-0">
						Broadcast Channels
					</h3>

					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="signal-link opacity-0 group block bg-neo-white border-4 border-neo-black p-6 hover:bg-neo-black hover:text-neo-lime transition-all duration-300 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
						>
							<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(204,255,0,0.1)_10px,rgba(204,255,0,0.1)_20px)] opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="flex justify-between items-center relative z-10">
								<div>
									<span className="font-mono text-xs opacity-60 block mb-1 group-hover:text-neo-lime">
										{link.status}
									</span>
									<span className="text-3xl font-black italic tracking-tighter">{link.name}</span>
								</div>
								<span className="text-3xl group-hover:rotate-45 transition-transform duration-300">
									↗
								</span>
							</div>
						</a>
					))}

					<div className="signal-loc opacity-0 mt-8 border-2 border-dashed border-neo-black p-6 font-mono text-sm opacity-60 hover:opacity-100 transition-opacity">
						<p>CURRENT_LOC: JAKARTA, ID</p>
						<p>LAT: -6.2088 | LONG: 106.8456</p>
						<p className="mt-2">available for remote_ops</p>
					</div>
				</div>
			</div>
		</main>
	);
}
