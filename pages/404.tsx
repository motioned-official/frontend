import PageSEO from '@/components/page-seo';
import View from '@/components/view';
import Footer from '@/layouts/footer';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const MotionedNotFound: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <React.Fragment>
      <View
        id="not-found-hero"
        className="h-screen flex flex-col justify-center items-center"
      >
        <p>
          <strong>404 |</strong>{' '}
          <code className="px-2 py-2 bg-black/80 rounded-xl text-white font-medium">
            {asPath}
          </code>{' '}
          <span className="font-bold text-red-500">not found</span> 😅.
        </p>
      </View>
      <Footer />
    </React.Fragment>
  );
};
export default MotionedNotFound;
