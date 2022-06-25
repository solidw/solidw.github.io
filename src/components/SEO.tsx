import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {}

export function SEO(props: SEOProps) {
  const title = `${
    props.title != null ? `${props.title} | ` : ""
  } solidw의 블로그`;

  return <NextSeo {...props} title={title} />;
}
