import { FC } from 'react';

const TopSection: FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center px-4">
              <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase lg:mb-2">
                Tentang Kami
              </p>

              <h1 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-5">
                Klinik Kesehatan <i>Nama Klinik</i>
              </h1>

              <div className="max-w-5xl">
                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-2">
                  Berdiri sejak 2023, Klinik Kesehatan <i>Nama Klinik</i> telah
                  membantu masyarakat dalam mendapatkan pelayanan kesehatan yang
                  berkualitas.
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify">
                  Klinik Kesehatan <i>Nama Klinik</i> adalah fasilitas pelayanan
                  masyarakat yang bergerak di bidang kesehatan yang berdiri
                  sejak tahun 2023. Kami telah membantu banyak masyarakat dalam
                  mendapatkan pelayanan kesehatan yang berkualitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
