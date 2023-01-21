import { FC } from 'react';

const CallToAction: FC = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="mt-20 w-full px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
              <div>
                <h2 className="text-primary text-xl md:text-2xl font-bold">
                  Start your free trial
                </h2>
                <p className="text-gray-600">No Credit Card required</p>
              </div>

              <a
                href="#"
                className="inline-block bg-primary hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
