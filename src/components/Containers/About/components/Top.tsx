import { FC } from 'react';

const TopSection: FC = () => {
  return (
    <section className="py-14 lg:py-24">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-center justify-center px-4">
              <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase lg:mb-2">
                Tentang Kami
              </p>

              <img
                src="/assets/img/logo/nou_navbar.png"
                alt="Brand Logo"
                className="w-80 h-32 object-cover object-center"
              />

              <div className="max-w-5xl">
                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-2">
                  Berdiri sejak 2023, NOU Klinik telah membantu masyarakat dalam
                  mendapatkan pelayanan kesehatan yang berkualitas.
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify">
                  NOU Klinik adalah fasilitas pelayanan masyarakat yang bergerak
                  di bidang kesehatan yang berdiri sejak tahun 2023. Kami telah
                  membantu banyak masyarakat dalam mendapatkan pelayanan
                  kesehatan yang berkualitas.
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
