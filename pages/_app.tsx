import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
