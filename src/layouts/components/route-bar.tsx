import Link from 'next/link';
import { Routes } from '../static';

const RouteBar: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 px-8">
      {Routes.map((route, index) => (
        <Link key={index} href={route.href}>
          <a className="font-pop text-lg text-stone-400 transition-all hover hover:text-stone-700">
            {route.textContent}
          </a>
        </Link>
      ))}
      <Link href="/inquiry">
        <a className="px-3 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-medium transition-all hover hover:opacity-75">
          Business Inquiry
        </a>
      </Link>
    </nav>
  );
};
export default RouteBar;
