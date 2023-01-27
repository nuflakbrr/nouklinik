import { FC } from 'react';
import Head from 'next/head';

import TopSection from './components/Top';
import Form from './components/Form';

const ContainerContact: FC = () => {
  return (
    <>
      <Head>
        <title>Kontak Kami - Brand Klinik</title>
      </Head>

      <main className="pt-20">
        <TopSection />
        <Form />
      </main>
    </>
  );
};

export default ContainerContact;
