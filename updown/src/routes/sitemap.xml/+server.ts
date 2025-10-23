import type { RequestHandler } from '@sveltejs/kit';

// IMPORTANT: Replace this with your website's domain
const site = 'https://www.updown-interactive.in';

export const GET: RequestHandler = async () => {
    // Add any static pages here
    const pages = ['/'];
    // If you have dynamic pages, you would fetch them from your data source here
    // and add them to the 'pages' array.

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
            .map(
                (page) => `
  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
            )
            .join('')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};
