import { reactClassNames } from '@motioned-official/react-functions';
import { Html, Head, Main, NextScript } from 'next/document';
import { useTheme } from '../theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={reactClassNames('transition-all')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
