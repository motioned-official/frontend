import Logo from '@/components/logo';
import { Dispatch, SetStateAction } from 'react';
import reactClassName from 'src/libs/reactClassName';

interface ModalProps {
  toggleState: boolean;
  toggleSetter: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ toggleSetter, toggleState }) => {
  return (
    <aside
      className={reactClassName(
        'w-11/12 z-50 transition-all fixed h-screen top-0 left-0 transform bg-slate-500/90 border-r border-gray-900',
        toggleState ? 'translate-x-0' : '-translate-x-[100%]'
      )}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <button
          onClick={() => toggleSetter(false)}
          className="px-8 font-bold text-2xl"
        >
          X
        </button>
      </div>
    </aside>
  );
};
export default Modal;
