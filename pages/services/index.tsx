import type { NextPage } from 'next';
import React, { useState } from 'react';
import SEO from '@/seo/index';
import Hero from '@/components/services/hero';
import { reactClassName } from '@/libs/index';
import Motioned from '@/components/motioned';
import services from '@/db/services';
import Link from 'next/link';
import GradientText from '@/components/gradient-text';

const MotionedServices: NextPage = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const onClickModalView = () => {
    setModalView((cur) => !cur);
  };
  const [userSelect, setUserSelect] = useState<string>('');
  const onClickUserSelect = (selectFor: string) => {
    console.log(selectFor);
    setUserSelect(selectFor);
  };
  return (
    <React.Fragment>
      <SEO title="Services" />
      <Hero clickHandler={onClickModalView} />
      <aside
        onClick={onClickModalView}
        className={reactClassName(
          'fixed h-screen bg-dark/50 backdrop-blur-sm w-full top-0 left-0 transition-all',
          modalView ? 'z-10 opacity-100' : '-z-10 opacity-0'
        )}
      ></aside>
      <div
        className={reactClassName(
          'fixed z-20 shadow-2xl w-10/12 max-w-xl mx-auto h-max border-t-4 rounded-xl shadow-black top-1/2 left-1/2 -translate-x-1/2 transform transition-all ease-in-out p-8 bg-dark/90 backdrop-blur-md',
          modalView
            ? ' opacity-100 -translate-y-1/2 scale-100'
            : 'opacity-0 translate-y-full scale-0',
          userSelect ? 'border-melon' : 'border-transparent'
        )}
      >
        <Motioned.content className="text-light w-full h-full flex flex-col justify-between">
          <>
            <ul className="flex flex-col space-y-6 mb-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => onClickUserSelect(service.title)}
                  className="flex justify-between items-center transition-all hover p-4 lg:hover:bg-light/10 rounded-xl"
                >
                  <span
                    className={reactClassName(
                      'w-6 lg:w-10 h-6 lg:h-10 rounded-full border-4 block',
                      userSelect === service.title
                        ? 'border-transparent bg-melon border-melon'
                        : 'bg-transparent border-light'
                    )}
                  />
                  <span className="capitalize font-pop font-medium text-xl">
                    {service.title}
                  </span>
                </button>
              ))}
            </ul>
            {userSelect && (
              <div className="w-full">
                <p className="w-full px-4 text-center font-medium font-sand lg:font-bold lg:text-xl">
                  <Link
                    href={{
                      pathname: `/services/${userSelect}`,
                      query: {
                        title: userSelect,
                      },
                    }}
                    as={`/services/${userSelect
                      .split(' ')
                      .join('')
                      .toLowerCase()}`}
                  >
                    <a className="w-max mx-auto lg:mx-0 text-lg lg:text-xl block transition-all hover:opacity-50 pl-0 border-l-0 border-transparent lg:hover:pl-4 lg:hover:border-l-8 lg:hover:border-light">
                      Explore{' '}
                      <GradientText>
                        <span>{userSelect}</span>
                      </GradientText>{' '}
                      now.
                    </a>
                  </Link>
                </p>
              </div>
            )}
          </>
        </Motioned.content>
      </div>
    </React.Fragment>
  );
};
export default MotionedServices;
