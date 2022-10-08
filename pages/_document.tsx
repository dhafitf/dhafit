import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import * as dotenv from "dotenv";
dotenv.config();

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta content="#3A3D68" name="theme-color" />
          <meta content="#3A3D68" name="msapplication-TileColor" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
