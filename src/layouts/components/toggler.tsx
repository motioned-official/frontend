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
        'px-8 py-4 transition-all transform',
        toggleState ? 'translate-x-full' : 'translate-x-0'
      )}
    >
      <button onClick={() => toggleSetter(true)} className="font-bold text-2xl">
        <AiOutlineMenu className="text-4xl" />
      </button>
    </nav>
  );
};
export default Toggler;
