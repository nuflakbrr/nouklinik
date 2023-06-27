import { FC } from 'react';
import Head from 'next/head';

import CallToAction from '../../Common/CallToAction';

const ContainerFacilities: FC = () => {
  return (
    <>
      <Head>
        <title>Fasilitas Kami - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai macam fasilitas untuk kenyamanan masyarakat. Berikut adalah fasilitas kami bisa Anda nikmati di Nama Klinik."
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/facilities"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai macam fasilitas untuk kenyamanan masyarakat. Berikut adalah fasilitas kami bisa Anda nikmati di Nama Klinik."
        />
        <meta property="og:title" content="Fasilitas Kami - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fasilitas Kami - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai macam fasilitas untuk kenyamanan masyarakat. Berikut adalah fasilitas kami bisa Anda nikmati di Nama Klinik."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link
          rel="canonical"
          href="https://klinik-next.vercel.app/facilities"
        />
      </Head>

      <main className="pt-20">
        <section className="pt-10 lg:pt-24">
          <div className="max-w-7xl mx-auto">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center">
                <div className="mb-10 md:mb-16 px-4">
                  <h2 className="font-primary font-semibold text-2xl lg:text-3xl lg:text-center text-primary mb-2">
                    Fasilitas Kami
                  </h2>

                  <p className="max-w-screen-md text-gray-500 xl:text-lg leading-relaxed lg:text-center">
                    Klinik Kesehatan <i>Nama Klinik</i> menawarkan berbagai
                    macam fasilitas untuk kenyamanan masyarakat. Berikut adalah
                    fasilitas kami bisa Anda nikmati di <i>Nama Klinik</i>.
                  </p>
                </div>
              </div>

              <div className="w-full px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                  {/* image start */}
                  <a
                    href="#"
                    className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                      VR
                    </span>
                  </a>
                  {/* image end */}

                  {/* image start */}
                  <a
                    href="#"
                    className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />
                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                      Tech
                    </span>
                  </a>
                  {/* image end */}

                  {/* image start */}
                  <a
                    href="#"
                    className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />
                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                      Dev
                    </span>
                  </a>
                  {/* image end */}

                  {/* image start */}
                  <a
                    href="#"
                    className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                      Retro
                    </span>
                  </a>
                  {/* image end */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default ContainerFacilities;
