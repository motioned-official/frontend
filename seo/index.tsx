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
        Motioned - Successful Web Design & Engineering For Your Customers &
        Clients {title ? `| ${title}` : ''}
      </title>
    </Head>
  );
};
export default SEO;