import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

// import Navbar from '../components/Common/Navbar/Navbar';
// import Footer from '../components/Common/Footer';

/**
 * Un-comment ScrollToTop to active scroll to top button
 * import ScrollToTop from '../components/ScrollToTop';
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport' content='width=device-width, initial-scale=1" />
        <meta name="theme-color' content='#000000" />
        <link
          rel="shortcut icon"
          href="/assets/favicon.png"
          type="image/x-icon"
        />
      </Head>

      {/* <Navbar /> */}

      {/* <ScrollToTop /> */}

      <Component {...pageProps} />

      {/* <Footer /> */}

      <Script id="tawkto" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/63d625f0c2f1ac1e20302956/1gnu88dp1';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>

      {/*
        Un-comment below to active Tidio chat
        <script
          src="//code.tidio.co/qusxifbrlye534wenknkngvqp3k2mdw8.js"
          async
        />
      */}
    </>
  );
}

export default MyApp;
