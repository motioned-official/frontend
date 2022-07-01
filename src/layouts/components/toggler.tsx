import { Dispatch, SetStateAction } from 'react';
import reactClassName from 'src/libs/reactClassName';
import { AiOutlineMenu } from 'react-icons/ai';

interface TogglerProps {
  toggleState: boolean;
  toggleSetter: Dispatch<SetStateAction<boolean>>;
}
const Toggler: React.FC<TogglerProps> = ({ toggleState, toggleSetter }) => {
  return (
    <nav
      className={reactClassName(
        'px-8 py-4 transition-all transform lg:hidden flex items-center justify-center',
        toggleState ? 'translate-x-full' : 'translate-x-0'
      )}
    >
      <button
        onClick={() => toggleSetter(true)}
        className="font-bold text-2xl transition-all hover hover:text-slate-400"
      >
        <AiOutlineMenu
          className={reactClassName(
            'transition-all',
            toggleState ? 'w-0 opacity-0' : 'text-4xl opacity-100'
          )}
        />
      </button>
    </nav>
  );
};
export default Toggler;
