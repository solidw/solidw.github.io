import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ReactNode } from "react";
import { Favicon } from "#/components/Favicon";
import { GoogleAnalytics } from "#/components/GoogleAnalytics";
import { GoogleTagManager } from "#/components/GoogleTagManager";
import { neumorphismTheme } from "#/styles/theme";

function LiveOnly({ children }: { children: ReactNode }) {
  const isLive = process.env.NODE_ENV === "production";

  if (isLive) {
    return null;
  }

  return <>{children}</>;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <LiveOnly>
          <GoogleAnalytics />
          <GoogleTagManager />
        </LiveOnly>
        <Head>
          <meta name="theme-color" content={neumorphismTheme.primary} />
          {/* 네이버 서치 콘솔 */}
          <meta
            name="naver-site-verification"
            content="10cd16441bbd706012ce8f01d85b6b34a2c5dfce"
          />
          {/* 구글 서치 콘솔 */}
          <meta
            name="google-site-verification"
            content="rLTjyFm7D8DYd7KSU-QEXXEskWiK-7CxvagBJZkmDEY"
          />
        </Head>
        <Favicon />
        <body>
          <LiveOnly>
            <GoogleTagManager.Body />
          </LiveOnly>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
