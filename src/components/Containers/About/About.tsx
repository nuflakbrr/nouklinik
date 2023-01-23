import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';
import CompanySection from './components/Company';
import HeadClinicSection from './components/HeadClinic';
import StructureSection from './components/Structure';

/**
 * To Do List
 *
 * 1. Add SEO
 */

const ContainerAbout: FC = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami - Brand Klinik</title>
      </Head>

      <main className="pt-20">
        <TopSection />
        <CompanySection />
        <HeadClinicSection />
        <StructureSection />
      </main>
    </>
  );
};

export default ContainerAbout;
