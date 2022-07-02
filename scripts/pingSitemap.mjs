import { get } from "https";

const DOMAIN = "https://solidw.github.io/sitemap";

get(`https://www.google.com/ping?sitemap=${DOMAIN}`, () => {
  console.log("ping was successful");
});
