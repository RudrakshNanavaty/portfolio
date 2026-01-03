import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Rudraksh Nanavaty Portfolio',
        short_name: 'Rudraksh',
        description: 'Portfolio of Rudraksh Nanavaty, a Computer Engineering student specializing in Backend Systems and AI.',
        start_url: '/',
        display: 'standalone',
        background_color: '#F8F9FF',
        theme_color: '#2563EB',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
