import { FC } from 'react';
import Head from 'next/head';

const ContainerService: FC = () => {
  return (
    <>
      <Head>
        <title>Layanan Kami</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai pelayanan kesehatan yang mampu menjawab kebutuhan masyarakat dan keramahan staff baik medis maupun non medis."
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/service"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="NOU Klinik" />
        <meta
          property="og:description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai pelayanan kesehatan yang mampu menjawab kebutuhan masyarakat dan keramahan staff baik medis maupun non medis."
        />
        <meta property="og:title" content="Layanan Kami -NOU Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Layanan Kami -NOU Klinik" />
        <meta
          name="twitter:description"
          content="Klinik Kesehatan Nama Klinik menawarkan berbagai pelayanan kesehatan yang mampu menjawab kebutuhan masyarakat dan keramahan staff baik medis maupun non medis."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/service" />
      </Head>

      <main className="pt-20">
        <section className="py-14 lg:py-24">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="w-full px-4">
                <div className="mb-10 md:mb-16">
                  <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary lg:text-center mb-2">
                    Layanan Kami
                  </h2>

                  <p className="max-w-screen-md text-gray-500 md:text-lg lg:text-center mx-auto">
                    NOU Klinik menawarkan berbagai pelayanan kesehatan yang
                    mampu menjawab kebutuhan masyarakat dan keramahan staff baik
                    medis maupun non medis.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
                  <div className="hover:-translate-y-1 transition-all ease-in-out duration-200">
                    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        alt="Sunset in the mountains"
                        loading="lazy"
                        className="w-full h-52 object-cover object-center"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover:-translate-y-1 transition-all ease-in-out duration-200">
                    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        alt="Sunset in the mountains"
                        loading="lazy"
                        className="w-full h-52 object-cover object-center"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover:-translate-y-1 transition-all ease-in-out duration-200">
                    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        alt="Sunset in the mountains"
                        loading="lazy"
                        className="w-full h-52 object-cover object-center"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hover:-translate-y-1 transition-all ease-in-out duration-200">
                    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        alt="Sunset in the mountains"
                        loading="lazy"
                        className="w-full h-52 object-cover object-center"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerService;
