/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bbconceptdesigns.com",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
