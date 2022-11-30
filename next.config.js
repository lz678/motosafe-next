/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

module.exports = () => {
    return {
        ...withLess({
            lessLoaderOptions: {},
        }),
        // basePath: '/',
        reactStrictMode: false,
        swcMinify: true
        // i18n:
        // {
        //     locales: ['cn', 'de', 'en', 'es', 'fr', 'jp', 'pt', 'tw', 'it'],
        //     defaultLocale: 'en',
        // },
        // trailingSlash: false,
        // distDir: process.env.BUILD_DIR || '.next',
        // assetPrefix: '/next_webview',
        // swcMinify: false
    };
};
// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig
