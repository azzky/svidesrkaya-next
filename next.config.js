/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            }
        ],
        loader: 'custom',
        loaderFile: './src/components/contentfulImage.js',
        deviceSizes: [400, 800, 1280, 1920, 2048, 3840]
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        localeDetection: false,
    }
};

module.exports = nextConfig;
