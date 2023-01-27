import { FC } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../CustomIcons';

// const Logo = '/img/hadir-in.jpeg';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Beranda', url: '/' },
    { title: 'Tentang Kami', url: '/about' },
    { title: 'Layanan', url: '/service' },
    { title: 'Dokter', url: '/doctors' },
  ];

  const secondaryLink = [
    { title: 'Fasilitas', url: '/facilities' },
    { title: 'Blog', url: '/blog' },
    { title: 'Karir', url: '/career' },
    { title: 'Informasi Magang', url: '/internship' },
  ];

  const tertiaryLink = [
    { title: 'Kontak Kami', url: '/contact' },
    { title: 'Live Chat', url: '/' },
    { title: 'FAQ', url: '/faq' },
  ];

  const legalLink = [
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const socialLink = [
    { title: 'Facebook', icon: <FacebookIcon />, url: '/' },
    { title: 'Instagram', icon: <InstagramIcon />, url: '/' },
    { title: 'Twitter', icon: <TwitterIcon />, url: '/' },
    { title: 'LinkedIn', icon: <LinkedInIcon />, url: '/' },
  ];

  return (
    <div className="bg-slate-800">
      <footer className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            {/* logo start */}
            <div className="mb-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center text-gray-100 font-primary text-xl md:text-2xl font-bold gap-2"
                  aria-label="logo"
                >
                  <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    className="w-5 h-auto text-primary"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  Brand Klinik
                </a>
              </Link>
            </div>
            {/* logo end */}

            <p className="text-gray-400 sm:pr-8 mb-6">
              Berdiri sejak 2023, Klinik Kesehatan <i>Nama Klinik</i> telah
              membantu masyarakat dalam mendapatkan pelayanan kesehatan yang
              berkualitas.
            </p>

            {/* social start */}
            <div className="flex gap-4">
              {socialLink.map((f, i) => (
                <a
                  href={f.url}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  rel="noreferrer"
                  key={i}
                >
                  {f.icon}
                </a>
              ))}
            </div>
            {/* social end */}
          </div>

          {/* nav start */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Perusahaan
            </div>

            <nav className="flex flex-col gap-4">
              {primaryLink.map((b, i) => (
                <div key={i}>
                  <Link href={b.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-primary active:text-primarydark transition duration-100">
                      {b.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          {/* nav end */}

          {/* nav start */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Lainnya
            </div>

            <nav className="flex flex-col gap-4">
              {secondaryLink.map((c, i) => (
                <div key={i}>
                  <Link href={c.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-primary active:text-primarydark transition duration-100">
                      {c.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          {/* nav end */}

          {/* nav start */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Bantuan
            </div>

            <nav className="flex flex-col gap-4">
              {tertiaryLink.map((d, i) => (
                <div key={i}>
                  <Link href={d.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-primary active:text-primarydark transition duration-100">
                      {d.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          {/* nav end */}

          {/* nav start */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              {legalLink.map((e, i) => (
                <div key={i}>
                  <Link href={e.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-primary active:text-primarydark transition duration-100">
                      {e.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          {/* nav end */}
        </div>

        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © {year} - PT <i>Nama PT Klinik</i>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
