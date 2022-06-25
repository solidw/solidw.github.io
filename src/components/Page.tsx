import Head from "next/head";
import { HTMLAttributes, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  children?: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <>
      <Head>
        <title>{`${title != null ? `${title} | ` : ""} solidw의 블로그`}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
