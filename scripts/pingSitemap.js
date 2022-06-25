const https = require("https");

const DOMAIN = "https://solidw.github.io/sitemap";

https.get(`https://www.google.com/ping?sitemap=${DOMAIN}`, () => {
  console.log("ping was successful");
});
