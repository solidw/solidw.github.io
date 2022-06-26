import { DefaultSeo, DefaultSeoProps } from "next-seo";

const DEFAULT_SEO: DefaultSeoProps = {
  title: "solidw의 블로그",
  description: "고태완의 도서관",
  canonical: "https://solidw.github.io",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://solidw.github.io",
    title: "solidw의 블로그",
    site_name: "solidw의 블로그",
    description: "고태완의 도서관",
    images: [
      {
        url: "https://solidw.github.io/me.jpeg",
        width: 300,
        height: 300,
        alt: "펜로즈의 삼각형",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export function DefaultSEO() {
  return <DefaultSeo {...DEFAULT_SEO} />;
}
