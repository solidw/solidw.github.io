const { writeFileSync } = require("fs");
const path = require("path");
const globby = require("globby");

const getDate = new Date().toISOString();

const DOMAIN = "https://solidw.github.io";

(async () => {
  const pages = await globby([
    // include
    `${"./src/pages/**/*.tsx"}`,
    `${"./src/pages/*.tsx"}`,
    // exclude
    `!${"./src/pages/_*.tsx"}`,
    `!${"./src/pages/**/[*.tsx"}`,
    `!${"./src/pages/[*.tsx"}`,
  ]);
  console.log(pages);
  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace(process.cwd(), "")
          .replace("./src/pages/", "")
          .replace(".tsx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `.trim();
      })
      .join("")}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  writeFileSync(
    path.join(process.cwd(), "./public/sitemap.xml"),
    generatedSitemap,
    {
      encoding: "utf-8",
      flag: "w",
    }
  );
})();
