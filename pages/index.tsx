import type { NextPage } from 'next';
import React from 'react';
import SEO from '@/seo/index';
import Hero from '@/components/index/hero';
import Work from '@/components/index/work';
import MainlingList from '@/components/index/mailing-list';

const MotionedHome: NextPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Hero />
      <Work />
      <MainlingList />
    </React.Fragment>
  );
};
export default MotionedHome;
