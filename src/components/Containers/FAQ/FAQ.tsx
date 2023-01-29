import { FC } from 'react';
import Head from 'next/head';

const ContainerFAQ: FC = () => {
  return (
    <>
      <Head>
        <title>FAQ - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Pertanyaan paling umum tentang cara kerja klinik kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta property="og:url" content="https://klinik-next.vercel.app/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Pertanyaan paling umum tentang cara kerja klinik kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta property="og:title" content="Pertanyaan Umum - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pertanyaan Umum - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Pertanyaan paling umum tentang cara kerja klinik kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_doctor.svg"
        />
        <link rel="canonical" href="https://klinik-next.vercel.app/faq" />
      </Head>

      <main className="pt-20">
        <section className="py-10 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center">
                <div className="mb-10 md:mb-16 px-4">
                  <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-center text-primary mb-2">
                    Pertanyaan Umum
                  </h2>

                  <p className="max-w-screen-sm text-gray-500 xl:text-lg leading-relaxed text-center">
                    Pertanyaan paling umum tentang cara kerja klinik kami dan
                    apa yang dapat kami lakukan untuk Anda.
                  </p>
                </div>

                <div className="w-full px-4">
                  <div className="rounded-xl shadow-lg p-5">
                    <div className="mb-0 md:mb-2">
                      <details className="mb-4 cursor-pointer">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                          How Long is this site live?
                        </summary>

                        <p className="px-2 text-justify">
                          Laboris qui labore cillum culpa in sunt quis sint
                          veniam. Dolore ex aute deserunt esse ipsum elit
                          aliqua. Aute quis minim velit nostrud pariatur culpa
                          magna in aute.
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-2">
                      <details className="mb-4 cursor-pointer">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                          How Long is this site live?
                        </summary>

                        <p className="px-2 text-justify">
                          Laboris qui labore cillum culpa in sunt quis sint
                          veniam. Dolore ex aute deserunt esse ipsum elit
                          aliqua. Aute quis minim velit nostrud pariatur culpa
                          magna in aute.
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-2">
                      <details className="mb-4 cursor-pointer">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                          How Long is this site live?
                        </summary>

                        <p className="px-2 text-justify">
                          Laboris qui labore cillum culpa in sunt quis sint
                          veniam. Dolore ex aute deserunt esse ipsum elit
                          aliqua. Aute quis minim velit nostrud pariatur culpa
                          magna in aute.
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-0">
                      <details className="cursor-pointer">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                          How Long is this site live?
                        </summary>

                        <p className="px-2 text-justify">
                          Laboris qui labore cillum culpa in sunt quis sint
                          veniam. Dolore ex aute deserunt esse ipsum elit
                          aliqua. Aute quis minim velit nostrud pariatur culpa
                          magna in aute.
                        </p>
                      </details>
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

export default ContainerFAQ;
