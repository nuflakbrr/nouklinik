import { FC } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Common/CustomIcons';

// const Logo = '/img/hadir-in.jpeg';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Tentang Kami', url: '/about' },
    { title: 'Layanan', url: '/service' },
    { title: 'Dokter', url: '/doctors' },
  ];

  const secondaryLink = [
    { title: 'Fasilitas', url: '/facilities' },
    { title: 'Karir', url: '/career' },
    { title: 'Informasi Magang', url: '/internship' },
  ];

  const tertiaryLink = [
    { title: 'Kontak Kami', url: '/contact' },
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
    <div className="bg-gray-900">
      <footer className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            {/* logo start */}
            <div className="mb-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 font-primary py-5"
                  aria-label="logo"
                >
                  <img
                    src="/assets/img/logo/nou_navbar.png"
                    alt="Brand Logo"
                    className="w-40 h-12 object-cover object-center"
                  />
                </a>
              </Link>
            </div>
            {/* logo end */}

            <p className="text-gray-400 sm:pr-8 mb-6">
              Berdiri sejak 2023, NOU Klinik telah membantu masyarakat dalam
              mendapatkan pelayanan kesehatan yang berkualitas.
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
          <p>© {year} - NOU Klinik Kesehatan. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://naufalakbar.me"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              Naufal Akbar Nugroho.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
