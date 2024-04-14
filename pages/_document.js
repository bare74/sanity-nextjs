import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="author" content="BAN" />

          {/* <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
            rel="stylesheet"
            type="text/css"
          />
          {/* <link href="css/styles.css" rel="stylesheet" /> */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css"
            integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY="
            crossOrigin="anonymous"
          />
          {/* Add your other global stylesheets, scripts, etc. here */}
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
