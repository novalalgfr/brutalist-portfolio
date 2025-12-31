import type { Metadata } from 'next';
import LabsView from '@/components/labs/LabsView';

export const metadata: Metadata = {
	title: 'Labs & Experiments',
	description:
		'A collection of UI experiments, micro-interactions, and code snippets. Copy-paste ready components built with React, GSAP, and Tailwind CSS.',
	keywords: [
		'React UI Components',
		'GSAP Animation Snippets',
		'Tailwind CSS Components',
		'Neo-Brutalism UI',
		'Frontend Experiments',
		'Interactive Web Elements'
	],
	openGraph: {
		title: 'Noval — Labs & Experiments',
		description: 'Experimental UI components and code snippets.',
		images: ['/og-labs.png']
	}
};

export default function LabsPage() {
	return <LabsView />;
}
