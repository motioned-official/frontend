import Hero from '@/app/contact';
import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import type { NextPage } from 'next';
import React from 'react';

const MotionContact: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Contact" />
      <View id="contact-hero" className="w-full">
        <Hero />
      </View>
    </React.Fragment>
  );
};
export default MotionContact;
