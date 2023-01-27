import { FC } from 'react';
import Head from 'next/head';
import TopSection from './components/Top';

const ContainerContact: FC = () => {
  return (
    <>
      <Head>
        <title>Kontak Kami - Brand Klinik</title>
      </Head>

      <main className="pt-20">
        <TopSection />
      </main>
    </>
  );
};

export default ContainerContact;
