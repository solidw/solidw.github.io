import Head from "next/head";
import { HTMLAttributes, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function Page({
  title: propTitle,
  description = "solidw의 블로그",
  children,
}: PageProps) {
  const title = `${propTitle != null ? `${propTitle} | ` : ""} solidw의 블로그`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="solidw" />
        <meta name="og:site_name" content="solidw의 블로그" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://solidw.github.io/me.jpeg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
