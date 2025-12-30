import type { Metadata } from 'next';
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

export const metadata: Metadata = {
	title: 'Noval — itsnoval',
	description: 'Frontend developer merging technical precision with bold aesthetics. Open for freelance work.',
	icons: {
		icon: '/icon.png'
	}
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
