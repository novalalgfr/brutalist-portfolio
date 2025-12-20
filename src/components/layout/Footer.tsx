'use client';
import Link from 'next/link';

const socialLinks = [
	{ name: 'GITHUB', url: 'https://github.com/novalalgfr' },
	{ name: 'LINKEDIN', url: 'https://www.linkedin.com/in/nopall/' },
	{ name: 'INSTAGRAM', url: 'https://www.instagram.com/novalalgfr_/' },
	{ name: 'EMAIL', url: 'mailto:ahmad.noval2705@gmail.com' }
];

export default function Footer() {
	return (
		<footer className="bg-neo-black text-neo-white py-20 border-t-4 border-neo-black">
			<div className="w-full px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none text-neo-lime">
						LET&apos;S <br /> BUILD.
					</h2>
					<p className="max-w-md font-mono text-sm md:text-base opacity-70">
						Interested in working together? Drop me a signal. Currently available for freelance projects.
					</p>
				</div>

				<div className="flex flex-col gap-6 text-right">
					{/* <a
						href="mailto:email@anda.com"
						className="text-2xl md:text-3xl font-bold hover:text-neo-lime hover:underline decoration-4 underline-offset-4 transition-colors"
					>
						hello@portfolio.com
					</a> */}

					<div className="flex gap-4 justify-end flex-wrap">
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target={link.name === 'EMAIL' ? '_self' : '_blank'}
								rel="noopener noreferrer"
								className="px-4 py-2 border-2 border-neo-white hover:bg-neo-lime hover:text-neo-black hover:border-neo-lime transition-all font-bold text-sm md:text-base uppercase"
							>
								{link.name}
							</Link>
						))}
					</div>

					<span className="font-mono text-xs opacity-50 mt-10">© 2025 ALL RIGHTS RESERVED.</span>
				</div>
			</div>
		</footer>
	);
}
