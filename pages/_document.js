import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="title" content="Limestone Capital - Investment Club" />
        <link rel="shortcut icon" href="favicon.png"></link>
        <meta
          name="description"
          content="Limestone Capital is a student-run investment club founded in 2011 at Queen’s University in Kingston, Ontario."
        />
        <meta
          name="keywords"
          content="limestone,limestone capital,investment,investment club,queens investment,queens investment club, queens university investment club"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.limestonecapital.org/" />
        <meta
          property="og:title"
          content="Limestone Capital - Investment Club"
        />
        <meta
          property="og:description"
          content="Limestone Capital is a student-run investment club founded in 2011 at Queen’s University in Kingston, Ontario."
        />
        <meta
          property="og:image"
          content="https://www.limestonecapital.org/limestone_logo.png"
        />
        <meta
          property="twitter:card"
          content="https://www.limestonecapital.org/limestone_logo.png"
        />
        <meta
          property="twitter:url"
          content="https://www.limestonecapital.org/"
        />
        <meta
          property="twitter:title"
          content="Limestone Capital - Investment Club"
        />
        <meta
          property="twitter:description"
          content="Limestone Capital is a student-run investment club founded in 2011 at Queen’s University in Kingston, Ontario."
        />
        <meta
          property="twitter:image"
          content="https://www.limestonecapital.org/limestone_logo.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
