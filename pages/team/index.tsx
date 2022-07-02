import Hero from '@/app/team';
import PageSEO from '@/components/page-seo';
import Footer from '@/layouts/footer';
import type { NextPage } from 'next';
import React from 'react';

const MotionedTeam: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO title="Team" />
      <Hero />
      <Footer />
    </React.Fragment>
  );
};
export default MotionedTeam;
