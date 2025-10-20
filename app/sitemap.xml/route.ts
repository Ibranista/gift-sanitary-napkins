export async function GET() {
  const baseUrl = "https://giftsanitarynapkins.com";
  const now = new Date().toISOString();

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "yearly", lastmod: now },
    { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: now },
  ];
  const pages = [...staticPages];

  const urls = pages
    .map(
      (p) => `
  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
