import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
	title: 'My Brutalist Archive',
	description: 'Portfolio & Experiments'
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
