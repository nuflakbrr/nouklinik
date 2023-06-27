import { FC, useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Navbar.module.css';
import { headerNavLink } from '../../../data/headerNavLink';
import { classNames } from '../../../lib/classNames';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove(styles.hamburgerActive);
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add(styles.hamburgerActive);
      navMenu?.classList.remove('hidden');
    }
  };

  // IsMenuActive handler
  const isMenuActive = (path: string) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="hidden md:block bg-primary text-white py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              <p className="font-primary font-normal text-xs lg:text-sm">
                Jl. Panji Suroso Kompleks Araya Business Center Kav.2-4, Kota
                Malang 65126
              </p>
            </div>

            <div className="flex items-center justify-center">
              <FaClock className="mr-2" />
              <p className="font-primary font-normal text-xs lg:text-sm">
                Poliklinik Senin - Sabtu: 07:00 - 21:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <Link href="/" legacyBehavior>
                  <a
                    className="inline-flex items-center gap-2 font-primary py-5"
                    aria-label="logo"
                  >
                    <img
                      src="/assets/img/logo/nou_navbar.png"
                      alt="Brand Logo"
                      className="w-36 h-12 object-cover object-center"
                    />
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
