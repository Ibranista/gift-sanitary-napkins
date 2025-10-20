import { products as productList } from "@/lib/products";

export async function GET() {
  const baseUrl = "https://giftsanitarynapkins.com";

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
  ];

  const productPages = (productList || []).map((p: any) => ({
    url: `/products/${p.id}-${(p.name || "")
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const pages = [...staticPages, ...productPages];

  const urls = pages
    .map(
      (p) => `
  <url>
    <loc>${baseUrl}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
