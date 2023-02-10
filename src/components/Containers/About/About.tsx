import { FC } from 'react';
import Head from 'next/head';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import TopSection from './components/Top';
import CompanySection from './components/Company';
import HeadClinicSection from './components/HeadClinic';
import StructureSection from './components/Structure';

const ContainerAbout: FC = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Klinik Kesehatan Nama Klinik adalah fasilitas pelayanan masyarakat yang bergerak di bidang kesehatan yang berdiri sejak tahun 2023. Kami telah membantu banyak masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/about"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Klinik Kesehatan Nama Klinik adalah fasilitas pelayanan masyarakat yang bergerak di bidang kesehatan yang berdiri sejak tahun 2023. Kami telah membantu banyak masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta property="og:title" content="Tentang Kami - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang Kami - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Klinik Kesehatan Nama Klinik adalah fasilitas pelayanan masyarakat yang bergerak di bidang kesehatan yang berdiri sejak tahun 2023. Kami telah membantu banyak masyarakat dalam mendapatkan pelayanan kesehatan yang berkualitas."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/about" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <TopSection />
        <CompanySection />
        <HeadClinicSection />
        <StructureSection />
      </main>

      <Footer />
    </>
  );
};

export default ContainerAbout;
