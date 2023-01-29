import { FC } from 'react';

const StructureSection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
                Strutur Organisasi
              </h1>
            </div>

            <div className="w-full px-4">
              <img
                src="/assets/img/struktur-oganisasi-mockup.jpeg"
                loading="lazy"
                alt="Struktur Organisasi"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
