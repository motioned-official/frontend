import Link from 'next/link';
import { Routes } from '../static';

const RouteBar: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 px-8">
      {Routes.map((route, index) => (
        <Link key={index} href={route.href}>
          <a className="font-pop text-lg text-stone-300 transition-all hover hover:text-stone-100">
            {route.textContent}
          </a>
        </Link>
      ))}
      <Link href="/inquiry">
        <a className="px-5 py-2 font-sand font-bold rounded-full bg-gradient-to-r from-orange-400 hover:from-red-400 to-red-400 hover:to-orange-400 text-white bg-opacity-90 transition-all hover ">
          Inquiry
        </a>
      </Link>
    </nav>
  );
};
export default RouteBar;
