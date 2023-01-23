import { FC } from 'react';

const CompanySection: FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-1/2">
              <img
                src="/assets/img/mockup.png"
                loading="lazy"
                alt="Gedung PT Brand Klinik"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div>
                <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
                  Klinik Kesehatan <i>Nama Klinik</i> Memiliki
                </h1>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Visi
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed mb-5">
                  Klinik Kesehatan <i>Nama Klinik</i> adalah fasilitas pelayanan
                  masyarakat yang bergerak di bidang kesehatan yang berdiri
                  sejak tahun 2023. Kami telah membantu banyak masyarakat dalam
                  mendapatkan pelayanan kesehatan yang berkualitas.
                </p>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Misi
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed">
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

export default CompanySection;
