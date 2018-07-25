// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Batam JS - Not only JS Community</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Batam JS - A JS Developer Community in Batam - Join us and colloborate together" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}