/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://nxtzengroup.in", // Your website URL
    generateRobotsTxt: true, // Generate robots.txt
    sitemapSize: 5000, // Maximum URLs per sitemap file
    generateIndexSitemap: false, // Set to true if you expect multiple sitemaps
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" }, // Allow all pages for search engines
      ],
    },
  };
  