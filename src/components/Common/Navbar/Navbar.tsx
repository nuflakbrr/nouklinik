import { FC, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navbar.module.css';
import { headerNavLink } from '../../../data/headerNavLink';
import { classNames } from '../../../lib/classNames';

// import Logo from '';

const Navbar: FC = () => {
  const { pathname } = useRouter();

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle(styles.hamburgerActive);
      navMenu?.classList.toggle('hidden');
    });
  };

  // IsMenuActive handler
  const isMenuActive = (path: string) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);

    // if (typeof window !== 'undefined') {
    //   return window.location.pathname === path ? 'text-primary' : 'text-black';
    // }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="hidden md:block bg-primary text-white py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              <p className="font-primary font-normal text-sm">
                Jl. Panji Suroso Kompleks Araya Business Center Kav.2-4, Kota
                Malang 65126
              </p>
            </div>

            <div className="flex items-center justify-center">
              <FaClock className="mr-2" />
              <p className="font-primary font-normal text-sm">
                Poliklinik Senin - Sabtu: 07:00 - 21:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent flex items-center">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <Link href="/" legacyBehavior>
                  <a
                    className="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6"
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
                    {/* <Image src={Logo} width={100} height={40} alt="Logo Brand" /> */}
                  </a>
                </Link>
              </div>

              <div className="flex items-center px-4">
                <button
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className="block absolute right-4 lg:hidden"
                  onClick={hamburgerHandler}
                >
                  <span
                    className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}
                  ></span>
                  <span
                    className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}
                  ></span>
                  <span
                    className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}
                  ></span>
                </button>

                <nav
                  id="navMenu"
                  className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                >
                  <ul className="block lg:flex">
                    {headerNavLink.map((a, i) => (
                      <li className="group" key={i}>
                        <Link href={a.href} legacyBehavior>
                          <a
                            className={classNames(
                              isMenuActive(a.href)
                                ? 'text-primary'
                                : 'text-black',
                              'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-primary transition duration-300 ease-in-out'
                            )}
                          >
                            {a.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
