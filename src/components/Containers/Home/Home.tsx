import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Beranda - Klinik</title>
      </Head>

      <main className="bg-white dark:bg-slate-900 pt-20 pb-20">
        <TopSection />
      </main>
    </>
  );
};

export default ContainerHome;
