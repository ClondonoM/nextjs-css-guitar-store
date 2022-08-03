import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Guitar Store - {page}</title>
        <meta name='description' content='Guitar Web Store' />
      </Head>
      <Header />

      {children}
    </div>
  );
};

export default Layout;
