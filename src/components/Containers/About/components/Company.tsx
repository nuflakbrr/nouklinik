import { FC } from 'react';

const CompanySection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-1/2">
              <img
                src="/assets/img/mockup.png"
                loading="lazy"
                alt="Gedung PT NOU Klinik"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div>
                <h1 className="max-w-sm lg:max-w-none font-primary font-semibold text-2xl lg:text-3xl mb-5">
                  NOU Klinik Memiliki
                </h1>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Visi
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed mb-5">
                  NOU Klinik adalah fasilitas pelayanan masyarakat yang bergerak
                  di bidang kesehatan yang berdiri sejak tahun 2023. Kami telah
                  membantu banyak masyarakat dalam mendapatkan pelayanan
                  kesehatan yang berkualitas.
                </p>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Misi
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed">
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

export default CompanySection;
