import { classify } from '@motioned-official/react-functions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from '@/theme/index';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
const routes: {
  href: string;
  text: string;
}[] = [
  { href: '/', text: 'Home' },
  { href: '/services', text: 'Services' },
  { href: '/works', text: 'Works' },
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
      className={classify(
        'transition-all sticky top-0 z-50 w-full',
        theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
      )}
    >
      <section
        className={classify(
          'transiton-all relative z-10 flex justify-between items-center p-4',
          theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
        )}
      >
        <h1>
          <Link href="/">
            <a
              className={classify(
                'transition-all text-light-text font-bold font-pop text-2xl',
                theme === 'light' ? 'text-light-text' : 'text-dark-text'
              )}
            >
              Motioned
            </a>
          </Link>
        </h1>
        <nav className="flex items-center space-x-4">
          <button
            onClick={onClickChangeTheme}
            className={classify(
              'transition-all w-16 h-8 rounded-full relative p-1 flex ease-in-out',
              theme === 'light'
                ? 'bg-dark-secondary justify-start'
                : 'bg-light-secondary justify-end'
            )}
          >
            <span
              className={classify(
                'transition-all transform inline w-3/6 h-full rounded-full bg-gradient-to-br',
                theme === 'light'
                  ? 'from-light-primary to-light-support rotate-0 left-0'
                  : 'from-dark-primary to-dark-support rotate-180 right-0'
              )}
            />
          </button>
          <button
            onClick={onClickMobileRouteView}
            className={classify('transition-all inline-flex flex-col')}
          >
            <span
              className={classify(
                'transition-all w-8 h-1',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary'
              )}
            />
            <span
              className={classify(
                'transition-all w-8 h-1 my-1.5',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary'
              )}
            />
            <span
              className={classify(
                'transition-all w-8 h-1',
                theme === 'light' ? 'bg-dark-primary' : 'bg-light-primary'
              )}
            />
          </button>
        </nav>
      </section>
      <section
        className={classify(
          'transition-all w-full transform absolute z-0 ease-out py-24 flex flex-col justify-center font-sand',
          mobileRouteView ? 'h-60 translate-y-0' : 'h-0 -translate-y-full',
          theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
        )}
      >
        <ul className="flex flex-col space-y-4 px-8 my-4">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.href}>
                <a
                  className={classify(
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
          className={classify(
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
