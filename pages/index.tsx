import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import type { NextPage } from 'next';
import React from 'react';

const MotionHome: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
      <View id="home-hero" className="w-full">
        <section className="p-8 h-screen flex flex-col justify-center items-center bg-stone-900">
          <h1 className="font-bold text-xl mb-2">Hello World!</h1>
          <p className="leading-7 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            consectetur rem. Distinctio tempora asperiores perferendis ullam qui
            odit aspernatur ea dolore minus illum non voluptatum, ipsa voluptate
            in repellendus voluptatem?
          </p>
        </section>
      </View>
    </React.Fragment>
  );
};
export default MotionHome;
