import type { NextPage } from 'next';
import React from 'react';
import SEO from '@/seo/index';
import Hero from '@/components/about/hero';
import Team from '@/components/about/team';
import Services from '@/components/about/services';
import Contact from '@/components/about/contact';

const MotionedAbout: NextPage = () => {
  return (
    <React.Fragment>
      <SEO title="About" />
      <Hero />
      <Team />
      <Services />
      <Contact />
    </React.Fragment>
  );
};
export default MotionedAbout;
