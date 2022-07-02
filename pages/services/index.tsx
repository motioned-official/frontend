import Hero from '@/app/services';
import PageSEO from '@/components/page-seo';
import Footer from '@/layouts/footer';
import type { NextPage } from 'next';
import React from 'react';

const MotionedServices: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Services" />
      <Hero />
      <Footer />
    </React.Fragment>
  );
};
export default MotionedServices;
