import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import ContainerDetailDoctors from '../../components/Containers/DetailDoctors/DetailDoctors';
import { doctorsData } from '../../data/doctors';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = doctorsData.map((d) => ({
    params: { slug: d.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = doctorsData.find((d) => d.slug === params.slug);

  return {
    props: {
      data,
    },
  };
};

const DetailDoctor: FC = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Dokter {data.name} - NOU Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={data.desc} />
        <meta
          property="og:url"
          content={`https://klinik-next.vercel.app/doctors/${data.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="NOU Klinik" />
        <meta property="og:description" content={data.desc} />
        <meta property="og:title" content={`${data.name} - NOU Klinik`} />
        <meta property="og:image" content={data.img} key={data.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.name} - NOU Klinik`} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.img} />
        <link
          rel="canonical"
          href={`https://klinik-next.vercel.app/doctors/${data.slug}`}
        />
      </Head>

      <ContainerDetailDoctors data={data} />
    </>
  );
};

export default DetailDoctor;
