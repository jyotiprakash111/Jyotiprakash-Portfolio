import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel="stylesheet" href="/css/default.css" />
          <link rel="stylesheet" href="/css/layout.css" />
          <link rel="stylesheet" href="/css/media-queries.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
          />
          <title>Jyotiprakash.in</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.jQuery || document.write('<script src="/js/jquery-1.10.2.min.js"><\/script>')`,
            }}
          />
          <script src="/js/jquery-migrate-1.2.1.min.js"></script>
          <script src="/js/jquery.flexslider.js"></script>
          <script src="/js/waypoints.js"></script>
          <script src="/js/jquery.fittext.js"></script>
          <script src="/js/magnific-popup.js"></script>
          <script src="/js/init.js"></script>
        </body>
      </Html>
    );
  }
}
