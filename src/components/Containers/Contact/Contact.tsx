import { FC } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import TopSection from './components/Top';
import Form from './components/Form';

export const Maps = dynamic(() => import('./components/Map'), { ssr: false });

const ContainerContact: FC = () => {
  return (
    <>
      <Head>
        <title>Kontak Kami - Brand Klinik</title>
      </Head>

      <main className="pt-20">
        <TopSection />
        <Maps />
        <Form />
      </main>
    </>
  );
};

export default ContainerContact;
