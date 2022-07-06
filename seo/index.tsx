import Head from 'next/head';

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111111" />
      <meta name="msapplication-TileColor" content="#111111" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Web design & engineering service team that provides web presence & solutions for small business clients."
      />
      <meta
        name="keywords"
        content="Web Design, Web Development, Web Engineering, Business Website, Portfolio Website, E-Commerce"
      />
      <title>
        Success For Your Business & Clients Starts With Motioned{' '}
        {title === 'Home' ? '' : `| ${title}`}
      </title>
    </Head>
  );
};
export default SEO;
