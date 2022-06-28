import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Favicon } from "#/components/Favicon";
import { GoogleAnalytics } from "#/components/GoogleAnalytics";
import { GoogleTagManager } from "#/components/GoogleTagManager";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta name="theme-color" content="#d6d7ff" />
        <Favicon />
        <GoogleAnalytics />
        <GoogleTagManager />
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
        <body>
          <GoogleTagManager.Body />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
