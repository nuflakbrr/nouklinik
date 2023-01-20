import { FC, useEffect } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';
import ThemesSwitch from '../../ThemeSwitch';
import { headerNavLink } from '../../../data/headerNavLink';

// import Logo from '';

const Navbar: FC = () => {
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

  return (
    <header className="bg-transparent dark:bg-slate-900 absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/" legacyBehavior>
                <a className="font-primary font-bold text-xl lg:text-2xl block py-6">
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
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                  <ul className="block lg:flex">
                    {headerNavLink.map((a, i) => (
                      <li className="group" key={i}>
                        <Link href={a.href} legacyBehavior>
                          <a className="font-secondary font-semibold text-base text-black dark:text-white py-2 mx-8 lg:mx-2 flex group-hover:text-primary dark:group-hover:text-emerald-500 transition duration-300 ease-in-out">
                            {a.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="block mx-8 lg:mx-2">
                    <ThemesSwitch />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
