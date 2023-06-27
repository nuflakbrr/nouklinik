import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Script from 'next/script';

import Navbar from '../components/Mixins/Navbar/Navbar';
import Footer from '../components/Mixins/Footer';
import ScrollToTop from '../components/Common/ScrollToTop';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Component {...pageProps} />

      <Footer />

      {/* <Script id="tawkto" strategy="lazyOnload">
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
      </Script> */}
    </>
  );
}

export default MyApp;
