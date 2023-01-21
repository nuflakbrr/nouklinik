import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';
import AboutSection from './components/About';
import CallToAction from '../../CallToAction';
import Facilities from './components/Facilities';
import FAQ from './components/FAQ';

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Beranda - Klinik</title>
      </Head>

      <main className="pt-20">
        <TopSection />
        <AboutSection />
        <CallToAction />
        <Facilities />
        <FAQ />
      </main>
    </>
  );
};

export default ContainerHome;
