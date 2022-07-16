import { css, Global } from "@emotion/react";
import { HTMLAttributes, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  full?: boolean;
  className?: string;
}

export function Page({ children, full = false, className }: PageProps) {
  return (
    <>
      {full ? (
        <Global
          styles={css`
            html,
            body,
            #__next {
              height: 100%;
            }

            #__next {
              display: flex;
              flex-direction: column;
            }
          `}
        />
      ) : null}
      <Header />
      <main className={className} css={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
