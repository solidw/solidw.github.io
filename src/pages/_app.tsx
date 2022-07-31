import { css, Global, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import normalize from "emotion-normalize";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSEO } from "#/components/DefaultSEO";
import { queryClient } from "#/lib/queryClient";
import { setup } from "#/styles/setup";
import { neumorphismTheme, theme } from "#/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              ${normalize}
              ${setup}
            * {
                box-sizing: border-box;
                word-break: break-all;
              }
              html {
                color: ${neumorphismTheme.primaryText};
                background-color: ${neumorphismTheme.primary};
              }
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
