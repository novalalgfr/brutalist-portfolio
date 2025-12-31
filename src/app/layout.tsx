import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-space-grotesk'
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
	: 'https://itsnoval.dev';

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),

	title: {
		default: 'Noval — Frontend Developer & UI Designer',
		template: '%s | Noval'
	},

	description:
		'Frontend Developer and UI/UX Designer based in Jakarta. Specializing in building scalable web applications with Next.js, React, and modern web technologies.',

	keywords: [
		'Ahmad Noval Algifari',
		'Noval Algifari',
		'Noval Frontend',
		'itsnoval',
		'Noval Portfolio',
		'Frontend Developer Indonesia',
		'Frontend Developer',
		'UI/UX Designer',
		'Web Developer Jakarta',
		'Next.js Developer',
		'React Expert',
		'Software Engineer Indonesia',
		'Freelance Web Developer'
	],

	authors: [{ name: 'Noval', url: baseUrl }],
	creator: 'Noval',

	openGraph: {
		title: 'Noval — Frontend Developer & UI Designer',
		description: 'Building scalable and interactive web applications.',
		url: baseUrl,
		siteName: 'Noval Portfolio',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Noval Portfolio Preview'
			}
		]
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Noval — Frontend Developer',
		description: 'Building scalable and interactive web applications.',
		images: ['/og-image.png']
	},

	alternates: {
		canonical: '/'
	},

	icons: {
		icon: '/icon.png'
	},

	robots: {
		index: true,
		follow: true
	}
};

export const viewport: Viewport = {
	themeColor: '#ffffff',
	width: 'device-width',
	initialScale: 1
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.variable} bg-neo-bg text-neo-black font-sans antialiased`}>
				<CustomCursor />
				<Navbar />
				<main className="pt-20 min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
