import type { NextPage } from 'next';
import React from 'react';
import SEO from '@/seo/index';
import Hero from '@/components/about/hero';
import Team from '@/components/about/team';

const MotionedAbout: NextPage = () => {
  return (
    <React.Fragment>
      <SEO title="About" />
      <Hero />
      <Team />
    </React.Fragment>
  );
};
export default MotionedAbout;
