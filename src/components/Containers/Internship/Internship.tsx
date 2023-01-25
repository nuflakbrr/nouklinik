import { FC } from 'react';
import Head from 'next/head';

const ContainerInternship: FC = () => {
  return (
    <>
      <Head>
        <title>Informasi Magang - Brand Klinik</title>
      </Head>

      <main className="pt-20">
        <section className="pb-4 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="container">
              <div className="flex flex-wrap items-center justify-start">
                <div className="w-full px-4">
                  <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-5">
                    Program Magang
                  </h1>

                  <div className="max-w-3xl">
                    <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-2">
                      Program Magang adalah program latihan kerja industri yang
                      umumnya dilakukan oleh siswa Sekolah Menengah Kejuruan
                      (SMK) maupun mahasiswa.
                    </p>

                    <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-5">
                      <i>Nama Klinik</i> menyediakan serta memfasilitasi program
                      magang di mana siswa maupun mahasiswa bisa menggunakan
                      kesempatan ini untuk melatih <i>skill</i> dan melakukan
                      pengembangan diri dalam dunia kerja.
                    </p>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-5">
                    Persyaratan Umum
                  </h1>

                  <div className="mb-3 lg:mb-5">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-5">
                      Jenjang Pendidikan
                    </h3>

                    <ul className="list-disc px-4">
                      <li>Sekolah Menengah Kejuruan (SMK) kelas XI</li>
                      <li>Mahasiswa S1 Minimal Semester 5</li>
                      <li>Mahasiswa D1, D2, D3 Minimal Semester 5</li>
                    </ul>
                  </div>

                  <div className="mb-3 lg:mb-5">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-5">
                      Bidang Studi
                    </h3>

                    <ul className="list-disc px-4">
                      <li>Teknik Informatika</li>
                      <li>Sistem Informasi</li>
                      <li>Rekayasa Perangkat Lunak</li>
                      <li>Multimedia</li>
                      <li>Keperawatan</li>
                    </ul>
                  </div>

                  <div className="mb-3 lg:mb-5">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-5">
                      Bidang Pekerjaan
                    </h1>

                    <ul className="list-disc px-4">
                      <li>
                        <p>Frontend Developer</p>
                        <p className="text-gray-500">
                          Skill: HTML, CSS, Javascript. Nilai Tambahan: Reactjs,
                          Nextjs
                        </p>
                      </li>
                      <li>
                        <p>Backend Developer</p>
                        <p className="text-gray-500">
                          Skill: PHP, MySQL. Nilai Tambahan: Laravel
                        </p>
                      </li>
                      <li>
                        <p>UI / UX</p>
                        <p className="text-gray-500">Skill: Figma</p>
                      </li>
                      <li>
                        <p>Desain Grafis</p>
                        <p className="text-gray-500">
                          Skill: Adobe Photoshop, Adobe Illustrator
                        </p>
                      </li>
                      <li>
                        <p>Perawat</p>
                        <p className="text-gray-500">
                          Skill: Keperawatan, Kesehatan
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-3 lg:mb-5">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-5">
                      Daftar Sekarang
                    </h1>

                    <div className="max-w-3xl">
                      <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-5">
                        Silakan ajukan aplikasi Anda melalui informasi kontak{' '}
                        <i>Nama Klinik</i>, atau bisa langsung datang ke{' '}
                        <a
                          href="/contact#location"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          Klinik Kami.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerInternship;
