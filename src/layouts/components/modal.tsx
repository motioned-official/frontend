import Logo from '@/components/logo';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import reactClassName from 'src/libs/reactClassName';
import { Routes } from '../static';
import { useRouter } from 'next/router';
interface ModalProps {
  toggleState: boolean;
  toggleSetter: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ toggleSetter, toggleState }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside
      className={reactClassName(
        'lg:hidden z-50 transition-all fixed h-[100vh] top-0 left-0 transform bg-stone-200 backdrop-blur-lg border-r border-stone-400/20',
        toggleState ? 'translate-x-0 w-11/12' : '-translate-x-[100%] '
      )}
    >
      <div className="flex justify-between items-center">
        <Logo className="px-8 py-8 font-serif bg-transparent rounded-br-xl text-stone-600 font-bold" />
        <button
          onClick={() => toggleSetter(false)}
          className="px-8 font-bold text-2xl text-stone-600"
        >
          X
        </button>
      </div>
      <div className="p-8">
        <ul className="flex flex-col space-y-4">
          {Routes.map((route, index) => (
            <Link key={index} href={route.href}>
              <a
                className={reactClassName(
                  'font-pop text-lg hover  hover:text-stone-700 transition-all',
                  pathname === route.href
                    ? 'text-stone-900 pl-4 border-l-2 border-stone-600'
                    : 'border-l-0 pl-0 text-stone-400'
                )}
              >
                {route.textContent}
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <span
        className={reactClassName(
          'flex text-stone-600 flex-col items-center absolute bottom-8 left-1/2 -translate-x-1/2  transform transition-all space-y-4 pb-8',
          toggleState ? 'opacity-100' : 'opacity-0'
        )}
      >
        <span className="font-sand font-medium text-xl">Presented By</span>
        <span className="font-serif font-bold">Motioned</span>
      </span>
    </aside>
  );
};
export default Modal;
