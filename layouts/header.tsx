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
          'fixed w-full h-screen flex lg:hidden flex-col justify-end bg-black/50 backdrop-blur-md transition-all',
          modalView ? 'opacity-100 z-40' : ' opacity-0 -z-40'
        )}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={reactClassName(
            'relative z-10 top-8 p-4 bg-dark/90 text-light shadow-xl w-max mx-auto rounded-full font-medium text-xl font-pop transition-all transform',
            modalView ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-tangerine to-sunflower">
            Connect with Us
          </span>
        </span>
        <nav
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={reactClassName(
            'relative z-0 transition-all transform flex justify-between items-center space-x-2 lg:space-x-3 p-8 pt-12  shadow-xl rounded-t-xl',
            modalView ? 'translate-y-0 bg-light' : 'translate-y-full bg-light/0'
          )}
        >
          <a
            href="https://github.com/motioned-official"
            className="transition-all text-dark text-3xl transform hover hover:rotate-12 cursor-pointer hover:text-dark"
          >
            <BsGithub />
          </a>
          <a
            href="https://linkedin.com/company/motioned-official"
            className="transition-all text-dark text-3xl transform hover hover:rotate-12 cursor-pointer hover:text-blue-500"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://instagram.com/motioned_official"
            className="transition-all text-dark text-3xl transform hover hover:rotate-12 cursor-pointer hover:text-pink-400"
          >
            <BsInstagram />
          </a>
        </nav>
      </aside>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={reactClassName(
          'fixed transform h-max block lg:hidden bg-light w-10/12 max-w-md mx-auto rounded-xl shadow-2xl transition-all',
          modalView
            ? 'z-50 opacity-100 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'
            : '-z-50 opacity-0 top-1/2 left-0 -translate-x-full -translate-y-1/2'
        )}
      >
        <div className="flex justify-between items-center p-8 font-bold text-2xl">
          <h1 className="flex items-center">
            <Link href="/">
              <>
                <a className="font-bold text-2xl transition-all hover lg:hover:bg-dark/50 bg-dark px-3 py-2 rounded-full text-light">
                  M
                </a>
              </>
            </Link>
          </h1>
          <button onClick={onClickModalView} className="text-dark">
            X
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-8 pb-8">
          {Routes.map((route, index) => (
            <Link href={route.href} key={index}>
              <a
                className={reactClassName(
                  'inline-block capitalize text-lg transition-all hover hover:text-dark/50'
                )}
              >
                {route.title}
              </a>
            </Link>
          ))}
        </ul>
      </div>

      <header
        className={reactClassName(
          'top-0 w-full z-30 backdrop-blur-sm transition-all transform',
          router.pathname !== '/' ? 'fixed' : 'sticky',
          router.pathname.includes('/services')
            ? 'bg-dark/95'
            : modalView
            ? 'bg-light/0'
            : 'bg-light/90',
          modalView ? '-translate-y-full' : 'translate-y-0'
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
              className={reactClassName(
                'px-5 pb-1 border-b-2 border-dotted text-lg font-sand font-semibold transition-all hover ',
                router.pathname.includes('/services')
                  ? 'border-light/75 text-light/75'
                  : 'border-dark/50 text-dark/50'
              )}
            >
              Menu
            </button>
          </nav>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {Routes.map((route, index) => (
              <Link href={route.href} key={index}>
                <a
                  className={reactClassName(
                    'inline-block capitalize text-lg font-medium transition-all hover hover:text-dark/50',
                    router.pathname.includes('/services')
                      ? 'text-light/80 hover:text-light/50'
                      : 'hover:text-dark/50'
                  )}
                >
                  {route.title}
                </a>
              </Link>
            ))}
            <nav
              className={reactClassName(
                'flex items-center space-x-2 lg:space-x-3 transition-all rounded-full',
                router.pathname.includes('/services')
                  ? 'bg-melon p-4'
                  : 'bg-transparent'
              )}
            >
              <span
                className={reactClassName(
                  'font-pop font-medium transition-all',
                  router.pathname.includes('/services')
                    ? 'text-dark border-l-0 border-transparent pl-0'
                    : 'pl-4 border-l-4 border-dark/70 text-dark/70'
                )}
              >
                Connect With Us
              </span>
              <a
                href="https://github.com/motioned-official"
                className="transition-all text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-dark"
              >
                <BsGithub />
              </a>
              <a
                href="https://linkedin.com/company/motioned-official"
                className="transition-all text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-blue-500"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://instagram.com/motioned_official"
                className="transition-all text-2xl transform hover hover:rotate-12 cursor-pointer hover:text-pink-400"
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
