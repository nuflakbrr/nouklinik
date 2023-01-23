import { FC } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const HeadClinicSection: FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col justify-center items-center px-4">
            <h1 className="font-primary font-semibold text-xl lg:text-2xl">
              Kepala Klinik Kesehatan PT <i>Nama PT Klinik</i>
            </h1>

            <div className="my-10">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=500"
                loading="lazy"
                alt="Kepala Klinik"
                className="w-72 h-72 object-cover object-center rounded-xl"
              />
            </div>

            <p className="font-primary font-semibold text-lg xl:text-xl">
              dr. Jhon Kazama, MMRS
            </p>

            <FaQuoteLeft className="my-3" />

            <p className="font-primary font-normal text-gray-500 xl:text-lg leading-relaxed">
              &quot;Jangan berhenti ketika lelah, Berhentilah ketika
              selesai&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadClinicSection;
