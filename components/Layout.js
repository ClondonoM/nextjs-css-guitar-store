import Head from 'next/head';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Guitar Store - {page}</title>
        <meta name='description' content='Guitar Web Store' />
      </Head>

      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
