import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // bu xam SSR ligi uchun browserga chiqmaydi terminalda chiqadi halos
  console.log("DOCUMENT - PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/** SEO => Seatch Engine Optimization **/}

        <meta name="keyword" content={"nestar , nestart.uz, mern, mern nestjs fullstack"}/>
        <meta name="description" content={
          "Buy and sell properties anywhere anytime in South Korea. |" +
          "대한진국 언제 어티서나 부동산을 사고 팔 수 있다."
        } />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
