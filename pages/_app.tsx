/*** CSS IMPORTS */
import '../styles/reset.css';
import '../styles/tailwind.css';
/*** NEXT IMPORTS */
import type { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
/*** COMPONENT IMPORTS */
import Layout from '@/layouts/index';
/*** COMPONENT PROPS */
interface MotionedAppProps {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}

const MotionedApp: React.FC<MotionedAppProps | AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MotionedApp;
