import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Guitar Store - {page}</title>
        <meta name='description' content='Guitar Web Store' />
      </Head>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
