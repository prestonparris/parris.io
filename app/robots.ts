export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://parris.io/sitemap.xml',
    host: 'https://parris.io',
  };
}
