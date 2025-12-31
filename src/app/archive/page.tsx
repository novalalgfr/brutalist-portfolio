import type { Metadata } from 'next';
import ArchiveView from '@/components/archive/ArchiveView';

export const metadata: Metadata = {
	title: 'Project Archive',
	description:
		'A comprehensive database of my software engineering projects. Featuring Next.js web applications, Machine Learning models (YOLO/TensorFlow), and Java desktop solutions.',

	keywords: [
		'Software Engineering Portfolio',
		'Next.js Case Studies',
		'Machine Learning Projects',
		'Web Development Archive',
		'Java Desktop Application',
		'Fullstack Development'
	],

	openGraph: {
		title: 'Noval — Project Archive',
		description: 'Explore my selected works in Web Development and Machine Learning.'
	}
};

export default function ArchivePage() {
	return <ArchiveView />;
}
