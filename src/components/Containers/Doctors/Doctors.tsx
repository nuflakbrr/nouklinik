import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { doctorsData } from '../../../data/doctors';

const ContainerDoctors: FC = () => {
  return (
    <>
      <Head>
        <title>Dokter Kami - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Klinik Kesehatan Nama Klinik memiliki Tenaga Medis yang profesional dan kompeten di bidangnya, dengan berbagai bidang spesialisasi dan subspesialisasi kedokteran."
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/doctors"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Klinik Kesehatan Nama Klinik memiliki Tenaga Medis yang profesional dan kompeten di bidangnya, dengan berbagai bidang spesialisasi dan subspesialisasi kedokteran."
        />
        <meta property="og:title" content="Dokter Kami - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dokter Kami - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Klinik Kesehatan Nama Klinik memiliki Tenaga Medis yang profesional dan kompeten di bidangnya, dengan berbagai bidang spesialisasi dan subspesialisasi kedokteran."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/doctors" />
      </Head>

      <main className="pt-20">
        <section className="py-10 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="container">
              <div className="w-full px-4">
                <div className="mb-10 md:mb-16">
                  <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary lg:text-center mb-2">
                    Temui Dokter Kami
                  </h2>

                  <p className="max-w-screen-md text-gray-500 md:text-lg lg:text-center mx-auto">
                    Klinik Kesehatan <i>Nama Klinik</i> memiliki Tenaga Medis
                    yang profesional dan kompeten di bidangnya, dengan berbagai
                    bidang spesialisasi dan subspesialisasi kedokteran.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
                  {doctorsData.map((d, i) => (
                    <div key={i}>
                      <Link href={`/doctors/${d.slug}`}>
                        <div className="hover:-translate-y-1 transition-all ease-in-out duration-200">
                          <div className="h-48 sm:h-60 md:h-80 bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-4">
                            <img
                              src={d.img}
                              loading="lazy"
                              alt={d.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          <div>
                            <h1 className="text-primary hover:text-primarydark md:text-lg max-w-sm font-bold">
                              {d.name}
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">
                              Dokter Spesialis {d.specialism}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerDoctors;
