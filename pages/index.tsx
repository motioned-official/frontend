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
          'transition-all w-full relative min-h-screen flex flex-col justify-center',
          theme === 'light'
            ? 'bg-light-primary text-light-text'
            : 'bg-dark-primary text-dark-text'
        )}
      >
        <>
          <Wrap className="absolute top-1/2 z-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Content
              displayType="block"
              className="relative grid grid-cols-2 gap-8"
            >
              <>
                <span className="w-20 h-20 lg:w-28 lg:h-28 rounded-full animate-spin bg-light-secondary/30" />
                <span className="w-20 h-20 lg:w-28 lg:h-28 rounded-full animate-bounce bg-light-support/30" />
                <span className="w-20 h-20 lg:w-28 lg:h-28 rounded-full animate-pulse bg-light-support/30" />
                <span className="w-20 h-20 lg:w-28 lg:h-28 rounded-full animate-ping bg-light-secondary/30" />
              </>
            </Content>
          </Wrap>
          <Wrap className="px-4 py-8 relative z-10 max-w-4xl mx-auto">
            <Content displayType="block" className="backdrop-blur-md p-8">
              <>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sand flex flex-col items-center mb-4 ">
                  <span>Put Motion,</span>
                  <span>Let It Grow</span>
                </h2>
                <p className="text-center font-medum text-lg lg:text-xl xl:text-2xl mb-6 md:mb-10 lg:mb-12 xl:mb-16">
                  <span className="inline-block">From satisfiable designs</span>{' '}
                  <span className="inline-block">
                    to fully-manageable applications
                  </span>
                </p>
                <div className="flex flex-col items-center">
                  <button
                    className={classify(
                      'transition-all px-5 py-3 rounded-lg text-lg font-medium font-sand lg:hover:opacity-75',
                      theme === 'light'
                        ? 'bg-light-secondary text-light-primary'
                        : 'bg-light-support'
                    )}
                  >
                    Motioned Services
                  </button>
                </div>
              </>
            </Content>
          </Wrap>
        </>
      </Section>
      <Section
        className={classify(
          'transition-all w-full',
          theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'
        )}
      >
        <Wrap className="max-w-4xl mx-auto">
          <>
            <Content displayType="block" className="relative -mb-4">
              <>
                <div
                  className={classify(
                    'transition-all px-4 pb-16 pt-28',
                    theme === 'light' ? 'text-light-text' : 'text-dark-text'
                  )}
                >
                  <h3 className="font-bold font-sand text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3">
                    We&apos;re{' '}
                    <span
                      className={classify(
                        'transition-all bg-clip-text text-transparent bg-gradient-to-r from-light-secondary to-light-support'
                      )}
                    >
                      Motioned
                    </span>
                  </h3>
                  <p className="text-lg text-center lg:text-xl xl:text-2xl">
                    We provide services that matters to you and your business.
                    <span className="lg:inline-block">
                      To achieve this, we bring various actions of expertise.
                    </span>
                  </p>
                </div>
              </>
            </Content>
            <Content displayType="block" className="px-8 py-16">
              <ul className="grid grid-cols-2 gap-8 lg:gap-16 w-full max-w-xl mx-auto">
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br',
                      theme === 'light'
                        ? 'from-light-secondary to-light-support'
                        : 'from-light-secondary to-light-support'
                    )}
                  >
                    Design
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm lg:text-base xl:text-lg text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-support'
                    )}
                  >
                    User effective UX research & UI implementation
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br',
                      theme === 'light'
                        ? 'from-light-secondary to-light-support'
                        : 'from-light-secondary to-light-support'
                    )}
                  >
                    Develop
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm lg:text-base xl:text-lg text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-support'
                    )}
                  >
                    Fully-manageable website development
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br',
                      theme === 'light'
                        ? 'from-light-secondary to-light-support'
                        : 'from-light-secondary to-light-support'
                    )}
                  >
                    Maintain
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm lg:text-base xl:text-lg text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-support'
                    )}
                  >
                    Sustainable and continuous bug fixes & improvement
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2">
                  <span
                    className={classify(
                      'transition-all font-sand text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-br',
                      theme === 'light'
                        ? 'from-light-secondary to-light-support'
                        : 'from-light-secondary to-light-support'
                    )}
                  >
                    Integrate
                  </span>
                  <span
                    className={classify(
                      'transition-all text-sm lg:text-base xl:text-lg text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
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
