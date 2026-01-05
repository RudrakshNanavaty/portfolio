import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/llms.txt'],
            disallow: ['/private/', '/api/'],
        },
        sitemap: 'https://rudraksh.nanavaty.in/sitemap.xml',
    }
}
