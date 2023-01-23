import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';
import AboutSection from './components/About';
import ServiceSection from './components/Service';
import Facilities from './components/Facilities';
import CallToAction from '../../CallToAction';
import Doctors from './components/Doctors';
import FAQ from '../../FAQ';

/**
 * To Do List
 *
 * 1. Add SEO
 */

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Brand Klinik</title>
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
