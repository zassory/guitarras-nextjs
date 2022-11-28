import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ children , title = '' , description = '' }) => {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>

        <Header />        
        { children }
        <Footer />
    </>
  )
}

export default Layout