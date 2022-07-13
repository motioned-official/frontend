import { reactClassNames } from '@motioned-official/react-functions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from '@/theme/index';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
const routes: {
  href: string;
  text: string;
}[] = [
  { href: '/services', text: 'Services' },
  { href: '/works', text: 'Works' },
  { href: '/roadmap', text: 'Road Map' },
  { href: '/contact', text: 'Contact' },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileRouteView, setMobileRouteView] = useState<boolean>(false);
  const onClickMobileRouteView = () => {
    setMobileRouteView((cur) => !cur);
  };
  useEffect(() => {
    setMobileRouteView(false);
  }, [router]);

  const { theme, setTheme } = useTheme();
  const onClickChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <header
      className={reactClassNames(
        'transition-all fixed top-0 z-50 w-full',
        theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
      )}
    >
      <section
        className={reactClassNames(
          'transiton-all relative z-10 flex justify-between items-center p-4 w-full max-w-7xl mx-auto',
          theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
        )}
      >
        <h1>
          <Link href="/">
            <a
              className={reactClassNames(
                'transition-all text-light-text font-bold font-sand text-2xl',
                theme === 'light' ? 'text-light-text' : 'text-dark-text'
              )}
            >
              Motioned
            </a>
          </Link>
        </h1>
        <nav className="flex items-center space-x-4">
          <nav className="hidden lg:flex py-1 items-center space-x-4 xl:space-x-6 list-none">
            {routes.map((route, index) => (
              <li key={index}>
                <Link href={route.href}>
                  <a
                    className={reactClassNames(
                      'transition-all hover:xl:bg-clip-text hover:xl:text-transparent hover:xl:bg-gradient-to-r hover:xl:from-light-secondary/50 hover:xl:to-light-support/50',
                      theme === 'light'
                        ? 'text-light-text/75'
                        : 'text-dark-text'
                    )}
                  >
                    {route.text}
                  </a>
                </Link>
              </li>
            ))}
          </nav>
          <button
            onClick={onClickChangeTheme}
            className={reactClassNames(
              'transition-all w-16 h-8 rounded-full relative p-1 flex ease-in-out',
              theme === 'light'
                ? 'bg-light-secondary justify-start'
                : 'bg-light-support justify-end'
            )}
          >
            <span
              className={reactClassNames(
                'transition-all transform inline w-3/6 h-full rounded-full',
                theme === 'light'
                  ? 'bg-gradient-to-br from-dark-primary to-dark-secondary rotate-0 left-0'
                  : 'bg-light-primary rotate-180 right-0'
              )}
            />
          </button>
          <button
            onClick={onClickMobileRouteView}
            className={reactClassNames(
              'transition-all inline-flex flex-col lg:hidden',
              mobileRouteView ? 'relative pl-8' : 'pl-0'
            )}
          >
            <span
              className={reactClassNames(
                'transition-all transform w-8 h-0.5',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary',
                mobileRouteView
                  ? 'rotate-45 absolute right-0 top-1/2 -translate-y-1/2'
                  : '-rotate-0 relative'
              )}
            />
            <span
              className={reactClassNames(
                'transition-all h-0.5 my-1.5',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary',
                mobileRouteView ? 'w-0 opacity-0' : 'w-8 opacity-100'
              )}
            />
            <span
              className={reactClassNames(
                'transition-all w-8 h-0.5',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary',
                mobileRouteView
                  ? '-rotate-45 absolute right-0 bottom-1/2 translate-y-1/2'
                  : '-rotate-0 relative'
              )}
            />
          </button>
        </nav>
      </section>
      <section
        className={reactClassNames(
          'transition-all w-full h-max transform absolute z-0 ease-in flex lg:hidden flex-col justify-center font-sand',
          mobileRouteView
            ? 'translate-y-0 top-0 pt-24 pb-8 opacity-100'
            : 'py-0 -translate-y-full -top-16 opacity-0',
          theme === 'light'
            ? mobileRouteView
              ? 'bg-light-primary/100'
              : 'bg-transparent'
            : 'bg-dark-primary'
        )}
      >
        <ul className="flex flex-col space-y-4 px-8 mb-4">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.href}>
                <a
                  className={reactClassNames(
                    'transition-all',
                    theme === 'light'
                      ? 'text-dark-secondary'
                      : 'text-light-secondary'
                  )}
                >
                  {route.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={reactClassNames(
            'flex space-x-4 items-center px-8 pb-8 transition-all',
            theme === 'light' ? 'text-dark-primary' : 'text-light-primary'
          )}
        >
          <p className="font-pop font-medium text-lg">Connect With Us!</p>
          <li>
            <a href="https://linkedin.com/company/motioned-official">
              <BsLinkedin className="text-xl" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/motioned_official">
              <BsInstagram className="text-xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/motioned-official">
              <BsGithub className="text-xl" />
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};
export default Header;
