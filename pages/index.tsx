import Hero from '@/app/index';
import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import type { NextPage } from 'next';
import React from 'react';

const MotionHome: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
      <Hero />
    </React.Fragment>
  );
};
export default MotionHome;
