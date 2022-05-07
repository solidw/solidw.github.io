import { css, Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { normalize } from "#/styles/normalize";
import { theme } from "#/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          html {
            background-color: ${theme.palette.background};
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
