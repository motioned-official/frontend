import Hero from '@/app/services';
import PageSEO from '@/components/page-seo';
import type { NextPage } from 'next';
import React from 'react';

const MotionServices: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Services" />
      <Hero />
    </React.Fragment>
  );
};
export default MotionServices;
