import type { NextPage } from 'next';
import { Content, Section, Wrap } from '@motioned-official/react-components';
import React from 'react';
import SEO from '@/seo/index';
import { classify } from '@motioned-official/react-functions';
import { useTheme } from '../theme';

const MotionedHome: NextPage = () => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Section
        className={classify(
          'transition-all w-full text-light-primary bg-gradient-to-r from-light-secondary to-light-support rounded-b-2xl'
        )}
      >
        <Wrap className="px-8 py-16">
          <Content displayType="block">
            <>
              <h2 className="text-4xl font-bold font-sand flex flex-col items-center mb-4">
                <span>Put Motion,</span>
                <span>Let It Grow</span>
              </h2>
              <p className="text-center font-medum text-lg mb-6">
                <span className="inline-block">From satisfiable design</span>
                <span className="inline-block">
                  to fullly-manageable applications
                </span>
              </p>
              <div className="flex flex-col items-center">
                <button
                  className={classify(
                    'transition-all px-5 py-3 rounded-lg text-lg font-medium font-sand',
                    theme === 'light' ? 'bg-dark-secondary' : 'bg-dark-primary'
                  )}
                >
                  Motioned Services
                </button>
              </div>
            </>
          </Content>
        </Wrap>
      </Section>
      <Section
        className={classify(
          'transition-all w-full',
          theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
        )}
      >
        <Wrap className="px-8 py-16">
          <>
            <Content displayType="block" className="relative -mb-4">
              <>
                <img
                  src="logo/Motioned_Logo.png"
                  alt="Motioned Logo Image"
                  className={classify(
                    'transition-all relative z-0 border-8 w-full max-w-md mx-auto rounded-xl',
                    theme === 'light'
                      ? 'border-light-secondary'
                      : 'border-dark-secondary'
                  )}
                />
                <div
                  className={classify(
                    'w-10/12 mx-auto max-w-sm transition-all z-10 relative -top-4 -mt-4 px-8 py-4 text-center',
                    theme === 'light'
                      ? 'bg-light-secondary'
                      : 'bg-dark-secondary'
                  )}
                >
                  <span className="inline-block text-light-primary font-sand text-base font-semibold">
                    Welcome To Motioned 👋
                  </span>
                </div>
                <div className="my-12">
                  <h3 className="font-bold font-pop text-4xl text-center mb-3">
                    We&apos;re{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-secondary to-light-support">
                      Motioned
                    </span>
                  </h3>
                  <p className="text-lg text-center">
                    We provie services that matters to you and your business. To
                    achieve this, we bring various actions of expertise.
                  </p>
                </div>
              </>
            </Content>
            <Content displayType="block" className="mt-20">
              <ul className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto">
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl bg-clip-text text-transparent bg-gradient-to-br from-light-secondary to-light-support'
                    )}
                  >
                    Design
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm text-center',
                      theme === 'light'
                        ? 'text-dark-primary'
                        : 'text-dark-support'
                    )}
                  >
                    Mordern UI/UX Designs
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl bg-clip-text text-transparent bg-gradient-to-br from-light-secondary to-light-support'
                    )}
                  >
                    Develop
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm text-center',
                      theme === 'light'
                        ? 'text-dark-primary'
                        : 'text-dark-support'
                    )}
                  >
                    Fully-manageable website development
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl bg-clip-text text-transparent bg-gradient-to-br from-light-secondary to-light-support'
                    )}
                  >
                    Maintain
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm text-center',
                      theme === 'light'
                        ? 'text-dark-primary'
                        : 'text-dark-support'
                    )}
                  >
                    Sustainable and continuous bug fixes & improvement
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl bg-clip-text text-transparent bg-gradient-to-br from-light-secondary to-light-support'
                    )}
                  >
                    Integrate
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm text-center',
                      theme === 'light'
                        ? 'text-dark-primary'
                        : 'text-dark-support'
                    )}
                  >
                    Third-party service integration to scale up-and-down.
                  </span>
                </span>
              </ul>
            </Content>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};
export default MotionedHome;
