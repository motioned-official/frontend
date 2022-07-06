import Link from 'next/link';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
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
  return (
    <header className="sticky top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <section className="w-full px-8 py-6 lg:px-16 flex justify-between items-center">
        <h1>
          <Link href="/">
            <a className="font-bold text-2xl transition-all hover lg:hover:bg-dark/50 bg-dark px-3 py-2 rounded-full text-light">
              M
            </a>
          </Link>
        </h1>
        <nav className="flex items-center lg:hidden">
          <button className="px-5 pb-1 border-b-4 text-lg border-dark/50 text-dark/50 font-semibold transition-all hover lg:hover:border-dark/30 lg:hover:text-dark/30">
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
            <a className="transition-all text-dark/70 text-2xl transform hover hover:rotate-45 cursor-pointer hover:text-dark">
              <BsGithub />
            </a>
            <a className="transition-all text-dark/70 text-2xl transform hover hover:rotate-45 cursor-pointer hover:text-blue-500">
              <BsLinkedin />
            </a>
            <a className="transition-all text-dark/70 text-2xl transform hover hover:rotate-45 cursor-pointer hover:text-pink-400">
              <BsInstagram />
            </a>
          </nav>
        </nav>
      </section>
    </header>
  );
};
export default Header;
