import type { Metadata } from 'next';
import SignalView from '@/components/signal/SignalView';

export const metadata: Metadata = {
	title: 'Signal (Contact)',
	description:
		'Establish a connection with Noval. Available for freelance web development projects, collaboration, or inquiries in Jakarta and Worldwide.',
	keywords: [
		'Contact Frontend Developer',
		'Hire Web Developer Jakarta',
		'Freelance React Developer',
		'Web Development Services',
		'Connect with Noval'
	],
	openGraph: {
		title: 'Signal — Connect with Noval',
		description: 'Initiate transmission. Open for freelance opportunities and collaboration.',
		images: ['/og-signal.png']
	}
};

export default function SignalPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: 'Contact Noval',
		url: 'https://itsnoval.dev/signal',
		mainEntity: {
			'@type': 'Person',
			name: 'Noval',
			image: 'https://itsnoval.dev/og-image.png',
			jobTitle: 'Frontend Developer',
			email: 'ahmad.noval2705@gmail.com',
			homeLocation: {
				'@type': 'Place',
				name: 'Jakarta, Indonesia'
			}
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SignalView />
		</>
	);
}
