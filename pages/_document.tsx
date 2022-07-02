import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="public/motioned_square_logo.png" />
      </Head>
      <body className="w-full bg-white text-stone-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
