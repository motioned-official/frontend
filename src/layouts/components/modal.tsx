import Logo from '@/components/logo';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import reactClassName from 'src/libs/reactClassName';
import { Routes } from '../static';

interface ModalProps {
  toggleState: boolean;
  toggleSetter: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ toggleSetter, toggleState }) => {
  return (
    <aside
      className={reactClassName(
        'lg:hidden w-11/12 z-50 transition-all fixed h-screen top-0 left-0 transform bg-stone-600 backdrop-blur-lg border-r border-stone-800',
        toggleState ? 'translate-x-0' : '-translate-x-[100%]'
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
          'flex text-white/30 flex-col items-center absolute bottom-8 left-1/2 transform transition-all',
          toggleState
            ? '-translate-x-1/2 opacity-100'
            : 'translate-x-0 opacity-0'
        )}
      >
        <span>Presented By</span>
        <Logo className="font-bold" />
      </span>
    </aside>
  );
};
export default Modal;
