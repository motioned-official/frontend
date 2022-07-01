import Logo from '@/components/logo';
import React, { useState } from 'react';
import Modal from './components/modal';
import Toggler from './components/toggler';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <React.Fragment>
      <header className="fixed top-0 z-40 w-full bg-stone-900/90">
        <section className="flex justify-between items-center">
          <Logo />
          <Toggler toggleState={toggle} toggleSetter={setToggle} />
        </section>
      </header>
      <Modal toggleState={toggle} toggleSetter={setToggle} />
    </React.Fragment>
  );
};
export default Header;
