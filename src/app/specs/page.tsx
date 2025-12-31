import type { Metadata } from 'next';
import SpecsView from '@/components/specs/SpecsView';

export const metadata: Metadata = {
	title: 'Specs & Profile',
	description:
		'Detailed professional profile of Noval. Fullstack Developer skills, tech stack arsenal (Next.js, TypeScript), and career history at PT. Mardawa Intiguna Persada.',

	keywords: [
		'Noval Resume',
		'Frontend Developer Skills',
		'Next.js Expert Profile',
		'Software Engineer Bio',
		'React Tech Stack',
		'UI/UX Designer Portfolio'
	],

	openGraph: {
		title: 'Noval — System Specs & Profile',
		description: 'Operational status: ONLINE. View complete technical specifications and battle records.',
		images: ['/og-specs.png']
	}
};

export default function SpecsPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Noval',
		jobTitle: 'Frontend Developer',
		url: 'https://itsnoval.dev/specs',
		knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'UI/UX Design'],
		worksFor: {
			'@type': 'Organization',
			name: 'Freelance'
		},
		alumniOf: {
			'@type': 'Organization',
			name: 'PT. Mardawa Intiguna Persada',
			startDate: '2023-02',
			endDate: '2025-11'
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SpecsView />
		</>
	);
}
