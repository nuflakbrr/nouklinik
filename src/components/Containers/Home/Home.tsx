import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';
import AboutSection from './components/About';
import ServiceSection from './components/Service';
import Facilities from './components/Facilities';
import CallToAction from '../../CallToAction';
import Doctors from './components/Doctors';
import FAQ from './components/FAQ';

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik, Berdiri sejak 2023, Klinik Kesehatan Nama Klinik telah membantu masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta property="og:url" content="https://klinik-next.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik, Berdiri sejak 2023, Klinik Kesehatan Nama Klinik telah membantu masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta property="og:title" content="Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Klinik" />
        <meta
          name="twitter:description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik, Berdiri sejak 2023, Klinik Kesehatan Nama Klinik telah membantu masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/" />
      </Head>

      <main className="pt-20">
        <TopSection />
        <AboutSection />
        <ServiceSection />
        <Facilities />
        <CallToAction />
        <Doctors />
        <FAQ />
      </main>
    </>
  );
};

export default ContainerHome;
