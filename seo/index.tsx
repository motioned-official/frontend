import Head from 'next/head';

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
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
