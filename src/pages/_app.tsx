import { css, Global, ThemeProvider } from "@emotion/react";
import normalize from "emotion-normalize";
import type { AppProps } from "next/app";
import { setup } from "#/styles/setup";
import { neumorphismTheme, theme } from "#/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          ${setup}
          html {
            color: ${neumorphismTheme.primaryText};
            background-color: ${neumorphismTheme.primary};
            min-height: 100%;

            letter-spacing: -0.2px;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
