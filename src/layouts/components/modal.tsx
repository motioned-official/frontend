import Logo from '@/components/logo';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import reactClassName from 'src/libs/reactClassName';
import { Routes } from '../static';
import Image from 'next/image';
import MyLogo from 'public/motioned_square_logo.png';
interface ModalProps {
  toggleState: boolean;
  toggleSetter: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ toggleSetter, toggleState }) => {
  return (
    <aside
      className={reactClassName(
        'lg:hidden z-50 transition-all fixed h-[100vh] top-0 left-0 transform bg-stone-600 backdrop-blur-lg border-r border-stone-800',
        toggleState ? 'translate-x-0 w-11/12' : '-translate-x-[100%] '
      )}
    >
      <div className="flex justify-between items-center">
        <Logo className="font-medium px-8 py-8 font-serif bg-transparent rounded-br-xl text-stone-100" />
        <button
          onClick={() => toggleSetter(false)}
          className="px-8 font-bold text-2xl text-white"
        >
          X
        </button>
      </div>
      <div className="p-8">
        <ul className="flex flex-col space-y-4">
          {Routes.map((route, index) => (
            <Link key={index} href={route.href}>
              <a className="font-pop text-lg text-stone-400 transition-all hover hover:text-stone-700">
                {route.textContent}
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <span
        className={reactClassName(
          'flex text-white/60 flex-col items-start absolute bottom-8 left-1/2 transform transition-all space-y-4',
          toggleState
            ? '-translate-x-1/2 opacity-100'
            : 'translate-x-0 opacity-0'
        )}
      >
        <span className="font-sand font-bold text-xl">Presented By</span>
        <article className="w-full max-w-xs mx-auto relative">
          <Image
            src={MyLogo}
            alt="Motioned Gif"
            className="z-0 opacity-90"
            layout="responsive"
          />
        </article>
      </span>
    </aside>
  );
};
export default Modal;
