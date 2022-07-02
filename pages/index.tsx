import Hero from '@/app/index';
import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import Footer from '@/layouts/footer';
import type { NextPage } from 'next';
import React from 'react';

const MotionedHome: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Home" />
      <Hero />
      <Footer />
    </React.Fragment>
  );
};
export default MotionedHome;
