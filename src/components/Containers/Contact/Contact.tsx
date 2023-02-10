import { FC } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import TopSection from './components/Top';
import Form from './components/Form';

export const Maps = dynamic(() => import('./components/Map'), { ssr: false });

const ContainerContact: FC = () => {
  return (
    <>
      <Head>
        <title>Kontak Kami - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Untuk meningkatkan kualitas layanan kami, kami sangat mengharapkan kritik dan saran Anda. Jika Anda memiliki kritik dan saran untuk kami, silahkan isi form di bawah ini."
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Untuk meningkatkan kualitas layanan kami, kami sangat mengharapkan kritik dan saran Anda. Jika Anda memiliki kritik dan saran untuk kami, silahkan isi form di bawah ini."
        />
        <meta property="og:title" content="Kontak Kami - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_group_video.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontak Kami - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Untuk meningkatkan kualitas layanan kami, kami sangat mengharapkan kritik dan saran Anda. Jika Anda memiliki kritik dan saran untuk kami, silahkan isi form di bawah ini."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_group_video.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/contact" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <TopSection />
        <Maps />
        <Form />
      </main>

      <Footer />
    </>
  );
};

export default ContainerContact;
