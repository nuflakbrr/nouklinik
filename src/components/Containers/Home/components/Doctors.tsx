import { FC } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

import { doctorsData } from '../../../../data/doctors';

export const MAX_DISPLAYED_DOCTORS = 6;

const Doctors: FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="w-full px-4">
            <div className="flex items-center justify-between">
              <div className="mb-10 md:mb-16">
                <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
                  Temui Dokter Kami
                </h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg">
                  Klinik Kesehatan <i>Nama Klinik</i> memiliki Tenaga Medis yang
                  profesional dan kompeten di bidangnya, dengan berbagai bidang
                  spesialisasi dan subspesialisasi kedokteran.
                </p>
              </div>

              <div className="mb-10 md:mb-16">
                {doctorsData.length > MAX_DISPLAYED_DOCTORS && (
                  <Link href="/doctors" legacyBehavior>
                    <a className="flex items-center justify-center text-primary hover:text-primarydark font-semibold">
                      Lihat Semua <FaAngleRight className="text-sm" />
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              {/* person start */}
              {doctorsData.slice(0, MAX_DISPLAYED_DOCTORS).map((d, i) => (
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
                        <h1 className="text-primary hover:text-primarydark md:text-lg font-bold">
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
              {/* person end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
