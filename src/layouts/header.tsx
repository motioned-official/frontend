import Logo from '@/components/logo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Modal from './components/modal';
import RouteBar from './components/route-bar';
import Toggler from './components/toggler';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setToggle(false);
  }, [router]);
  return (
    <React.Fragment>
      <header className="fixed top-0 z-40 w-full bg-stone-600/90">
        <section className="flex justify-between items-center">
          <Logo className="font-bold px-8 py-8 lg:py-4 font-serif text-white" />
          <Toggler toggleState={toggle} toggleSetter={setToggle} />
          <RouteBar />
        </section>
      </header>
      <Modal toggleState={toggle} toggleSetter={setToggle} />
    </React.Fragment>
  );
};
export default Header;
