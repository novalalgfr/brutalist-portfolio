import type { Metadata } from 'next';
import HomeView from '@/components/home/HomeView';

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://itsnoval.dev/'
	}
};

export default function Home() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ahmad Noval Algifari',
		alternateName: 'Noval',
		url: 'https://itsnoval.dev/',
		image: 'https://itsnoval.dev/og-image.png',
		jobTitle: 'Frontend Developer',
		email: 'ahmad.noval2705@gmail.com',
		worksFor: {
			'@type': 'Organization',
			name: 'Freelance'
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Jakarta',
			addressCountry: 'ID'
		},
		sameAs: [
			'https://github.com/novalalgfr',
			'https://www.linkedin.com/in/nopall/',
			'https://www.instagram.com/novalalgfr_/'
		]
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HomeView />
		</>
	);
}
