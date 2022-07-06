import GradientText from '@/components/gradient-text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { reactClassName } from '../libs';
const Routes: Array<{
  title: string;
  href: string;
}> = [
  { href: '/', title: 'home' },
  { href: '/about', title: 'about' },
  { href: '/services', title: 'services' },
  { href: '/works', title: 'works' },
  { href: '/contact', title: 'contact' },
];
const Header: React.FC = () => {
  const router = useRouter();
  const [modalView, setModalView] = useState<boolean>(false);
  const onClickModalView = () => {
    setModalView((cur) => !cur);
  };
  useEffect(() => {
    setModalView(false);
  }, [router]);
  return (
    <React.Fragment>
      <aside
        onClick={onClickModalView}
        className={reactClassName(
          'fixed w-full h-screen flex lg:hidden flex-col justify-center bg-black/50 backdrop-blur-md transition-all',
          modalView ? 'z-50 opacity-100' : '-z-50 opacity-0'
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-5/6 bg-light w-10/12 max-w-md mx-auto rounded-xl shadow-2xl"
        >
          <div className="flex justify-between items-center p-8 font-bold text-2xl">
            <GradientText className="" />
            <button
              onClick={onClickModalView}
              className="px-3 py-2 rounded-full bg-dark/90 text-light"
            >
              X
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-8">
            {Routes.map((route, index) => (
              <Link href={route.href} key={index}>
                <a
                  className={reactClassName(
                    'inline-block capitalize text-lg transition-all hover hover:text-dark/50',
                    router.pathname.includes(route.href)
                      ? 'pl-2 border-l-4 border-dark/90 font-bold'
                      : 'pl-0 border-l-0 font-medium'
                  )}
                >
                  {route.title}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </aside>
      <header
        className={reactClassName(
          'top-0 w-full z-40 bg-transparent backdrop-blur-sm transition-all',
          router.pathname !== '/' ? 'fixed' : 'sticky'
        )}
      >
        <section className="w-full px-8 py-6 lg:px-16 flex justify-between items-center">
          <h1>
            <Link href="/">
              <a className="font-bold text-2xl transition-all hover lg:hover:bg-dark/50 bg-dark px-3 py-2 rounded-full text-light">
                M
              </a>
            </Link>
          </h1>
          <nav
            className={reactClassName(
              'flex items-center lg:hidden transition-all',
              modalView ? 'opacity-0' : 'opacity-100'
            )}
          >
            <button
              onClick={onClickModalView}
              className="px-5 pb-1 border-b-2 border-dotted text-lg border-dark/50 text-dark/50 font-sand font-semibold transition-all hover lg:hover:border-dark/30 lg:hover:text-dark/30"
            >
              Menu
            </button>
          </nav>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {Routes.map((route, index) => (
              <Link href={route.href} key={index}>
                <a className="inline-block capitalize text-lg font-medium transition-all hover hover:text-dark/50">
                  {route.title}
                </a>
              </Link>
            ))}
            <nav className="flex items-center space-x-2 lg:space-x-3">
              <a
                href="https://github.com/motioned-official"
                className="transition-all text-dark/70 text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-dark"
              >
                <BsGithub />
              </a>
              <a
                href="https://linkedin.com/company/motioned-official"
                className="transition-all text-dark/70 text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-blue-500"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://instagram.com/motioned_official"
                className="transition-all text-dark/70 text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-pink-400"
              >
                <BsInstagram />
              </a>
            </nav>
          </nav>
        </section>
      </header>
    </React.Fragment>
  );
};
export default Header;
