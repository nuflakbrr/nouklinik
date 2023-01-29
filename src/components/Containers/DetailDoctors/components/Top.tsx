import { FC } from 'react';

type TopSectionProps = {
  data: any;
};

const TopSection: FC<TopSectionProps> = ({ data }) => {
  return (
    <section className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-2/6">
              <img
                src={data.img}
                alt={data.name}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full px-4 lg:w-4/6">
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 text-sm md:text-base mb-3 md:mb-4">
                    Dokter Spesialis {data.specialism}
                  </p>
                </div>

                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=082245103862&text=awdawdaw"
                    target={'_blank'}
                    rel="noreferrer"
                    className="inline-block bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-3"
                  >
                    Buat Janji
                  </a>
                </div>
              </div>

              <div className="border border-gray-300 my-3 lg:my-0 lg:mb-3" />

              <p
                dangerouslySetInnerHTML={{ __html: data.desc }}
                className="text-gray-500 text-sm md:text-base text-justify"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
