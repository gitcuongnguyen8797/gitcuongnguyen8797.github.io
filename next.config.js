/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  i18n: {
    locales: [ 'en', 'vi',],
    defaultLocale: 'en',
    localeDetection: false,
  }
};