import Head from 'next/head';

interface PageSEOProps {
  title: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title }) => {
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
        Motioned - Sucecssfuly Web Design & Engineering For Your Customers &
        Clients {title ? `| ${title}` : ''}
      </title>
    </Head>
  );
};
export default PageSEO;
