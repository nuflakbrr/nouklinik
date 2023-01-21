import { FC } from 'react';
import Link from 'next/link';

const TopSection: FC = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap-reverse mt-5">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-4 md:mb-6">
                Very proud to introduce
              </p>

              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Revolutionary way to build the web
              </h1>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link href="/" legacyBehavior>
                  <a className="inline-block bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Mulai Eksplorasi
                  </a>
                </Link>

                <Link href="/" legacyBehavior>
                  <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-primary text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Daftar
                  </a>
                </Link>
              </div>
            </div>

            <div className="mb-10 w-full px-4 lg:w-1/2">
              <img
                src="/assets/svg/undraw_doctor.svg"
                loading="lazy"
                alt="Hero Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
