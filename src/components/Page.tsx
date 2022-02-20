import { css, useTheme } from "@emotion/react";
import Head from "next/head";
import { HTMLAttributes, ReactNode } from "react";
import { Header } from "./Header";

interface PageProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  wide?: boolean;
  children?: ReactNode;
}

export function Page({ title, wide = false, children }: PageProps) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>solidw.dev{title != null ? ` | ${title}` : null}</title>
      </Head>
      <div
        css={css`
          min-height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: ${theme.palette.background};
        `}
      >
        <Header />
        <main
          css={css`
            display: flex;
            position: relative;
            width: ${wide ? 900 : 600}px;
            margin-top: ${Header.height}px;
            padding: 20px;
            height: 100%;
            flex: 1;
          `}
        >
          {children}
        </main>
      </div>
    </>
  );
}
