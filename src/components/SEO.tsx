import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {}

export function SEO(props: SEOProps) {
  const title = `${
    props.title != null ? `${props.title} | ` : ""
  } solidw의 블로그`;

  return <NextSeo {...props} title={title} />;
}

/**
 * NOTE: 구글은 절대 경로를 기입하는 것을 선호한다.
 */
export function getCanonicalAbsolutePath(relativePath: string) {
  const isStartWithSlash = relativePath.startsWith("/");

  return `https://solidw.github.io${
    isStartWithSlash ? relativePath : `/${relativePath}`
  }`;
}
