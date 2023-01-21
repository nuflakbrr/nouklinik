import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Beranda - Klinik</title>
      </Head>

      <main className="pt-20 pb-20">
        <TopSection />
      </main>
    </>
  );
};

export default ContainerHome;
