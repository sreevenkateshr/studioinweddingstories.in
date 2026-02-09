// app/sitemap.js
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.studioinweddingstories.in";

  // List all static pages
  const staticPages = [
    "",
    "about-us",
    "services",
    "testimonials",
    "kids",
    "kids/birthday",
    "kids/indoor",
    "outdoor/birthday",
    "baptism",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        return `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
