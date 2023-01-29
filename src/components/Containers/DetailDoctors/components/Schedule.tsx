import { FC } from 'react';

type ScheduleSectionProps = {
  data: any;
};

const ScheduleSection: FC<ScheduleSectionProps> = ({ data }) => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
              Jadwal Saya
            </h1>

            <div className="w-full px-4">
              <div className="bg-primarydark p-3 my-3">
                <p className="font-primary font-bold text-white text-center">
                  Reguler
                </p>
              </div>
            </div>

            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-10 py-5">
              {data.regulerSchedule.map((r: any, i: any) => (
                <div
                  className="bg-gray-100 shadow-lg col-span-1 md:col-span-2 px-8 py-5"
                  key={i}
                >
                  <p className="font-primary font-semibold text-center">
                    {r.day}
                  </p>
                  <p className="font-primary font-semibold text-center">
                    {r.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full px-4">
              <div className="bg-primarydark p-3 my-3">
                <p className="font-primary font-bold text-white text-center">
                  BPJS
                </p>
              </div>
            </div>

            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-10 py-5">
              {data.BPJSSchedule.map((r: any, i: any) => (
                <div
                  className="bg-gray-100 shadow-lg col-span-1 md:col-span-2 px-8 py-5"
                  key={i}
                >
                  <p className="font-primary font-semibold text-center">
                    {r.day}
                  </p>
                  <p className="font-primary font-semibold text-center">
                    {r.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
