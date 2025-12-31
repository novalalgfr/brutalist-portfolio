import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://itsnoval.dev';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${baseUrl}/archive`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${baseUrl}/specs`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/labs`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7
		},
		{
			url: `${baseUrl}/signal`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		}
	];
}
