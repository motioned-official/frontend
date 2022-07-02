import Hero from '@/app/contact';
import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import Footer from '@/layouts/footer';
import type { NextPage } from 'next';
import React from 'react';

const MotionedContact: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Contact" />
      <Hero />
      <Footer />
    </React.Fragment>
  );
};
export default MotionedContact;
