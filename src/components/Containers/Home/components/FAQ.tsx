import { FC } from 'react';

const FAQ: FC = () => {
  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex text-center items-center justify-center">
            <div className="mb-10 px-4">
              <h1 className="font-primary font-semibold text-2xl text-primary mb-2">
                Pertanyaan Umum
              </h1>

              <p className="text-gray-500 xl:text-lg leading-relaxed">
                Pertanyaan paling umum tentang cara kerja klinik kami dan apa
                yang dapat kami lakukan untuk Anda.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb-5 md:mb-0">
            <div className="mb-0 md:mb-10 w-full px-4 lg:w-1/2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>

            <div className="mb-0 md:mb-10 w-full px-4 lg:w-1/2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
