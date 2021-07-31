import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet preload prefetch"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet preload prefetch"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <meta name="theme-color" content="black" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
