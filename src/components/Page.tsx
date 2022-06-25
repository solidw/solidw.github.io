import Head from "next/head";
import { HTMLAttributes, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
