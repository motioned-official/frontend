import type { NextPage } from 'next';
import { Content, Section, Wrap } from '@motioned-official/react-components';
import React from 'react';
import SEO from '@/seo/index';
import { classify } from '@motioned-official/react-functions';
import { useTheme } from '../theme';
import Link from 'next/link';

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
          <Wrap className="px-8 py-8 relative z-10 max-w-4xl mx-auto">
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
                    'transition-all px-8 pb-16 pt-28 w-full max-w-4xl mx-auto',
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
                  <p className="text-lg text-center lg:text-xl xl:text-2xl leading-7 lg:leading-8 xl:leading-9">
                    We provide services that matters to you and your business.
                    <span className="lg:inline-block">
                      To achieve this, we bring various actions of expertise.
                    </span>
                  </p>
                </div>
              </>
            </Content>
            <Content displayType="block" className="px-8 pt-16 pb-28">
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16 w-full max-w-7xl mx-auto">
                <span className="flex flex-col items-center space-y-2 lg:space-y-4">
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
                      'transition-all text-sm lg:text-base text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-text/75'
                    )}
                  >
                    User effective UX research & UI implementation
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2 lg:space-y-4">
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
                      'transition-all text-sm lg:text-base text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-text/75'
                    )}
                  >
                    Fully-manageable website development
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2 lg:space-y-4">
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
                      'transition-all text-sm lg:text-base text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-text/75'
                    )}
                  >
                    Sustainable and continuous bug fixes & improvement
                  </span>
                </span>
                <span className="flex flex-col items-center space-y-2 lg:space-y-4">
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
                      'transition-all text-sm lg:text-base text-center',
                      theme === 'light'
                        ? 'text-light-text/50'
                        : 'text-dark-text/75'
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
      <Section
        className={classify(
          'transition-all w-full',
          theme === 'light' ? 'bg-[whitesmoke]' : 'bg-[#222]'
        )}
      >
        <Wrap className="w-full max-w-4xl mx-auto px-8 py-16">
          <>
            <Content displayType="block" className="mb-8">
              <>
                <h4 className="mb-4 text-center font-medium text-2xl font-sand bg-clip-text text-transparent bg-gradient-to-r from-light-secondary to-light-support">
                  Why Work With Motioned?
                </h4>
                <p className="text-center font-bold font-pop text-2xl lg:text-3xl">
                  Efficiency & Collaboration
                </p>
              </>
            </Content>
            <Content displayType="block">
              <>
                <div className="grid grid-cols-1 gap-8">
                  <article className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <span className="absolute z-0 bottom-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br from-light-secondary/10 to-light-support/10 animate-bounce" />
                      <section className="w-full h-full flex flex-col justify-center relative z-10 backdrop-blur-sm">
                        <code className="uppercase font-thin bg-clip-text text-transparent bg-gradient-to-r from-light-secondary to-light-support">
                          Collaborative Design
                        </code>
                        <h5 className="font-bold font-sand text-xl mb-4">
                          One By One, Work Altogether.
                        </h5>
                        <p className="text-sm leading-6 md:text-base md:leading-7">
                          Regardless of the type of project, designing is the
                          first part we focus on. We believe in collaborating
                          for giving impactful feedbacks & understanding
                          user-behaviors.
                        </p>
                      </section>
                    </div>
                    <div className="w-full max-w-xs mx-auto">
                      <img
                        className="w-fit opacity-75"
                        src="content/Web_Design.png"
                        alt="Motioned Web Design Image"
                      />
                    </div>
                  </article>
                  <article className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full max-w-xs mx-auto row-start-2 lg:row-auto">
                      <img
                        className="w-fit opacity-75"
                        src="content/Web_Development.png"
                        alt="Motioned Web Design Image"
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute z-0 bottom-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-light-secondary/10 to-light-support/10 animate-bounce" />
                      <span className="absolute z-0 bottom-0 left-28 w-10 h-10 rounded-full bg-gradient-to-br from-light-secondary/10 to-light-support/10 animate-bounce delay-75" />
                      <span className="absolute z-0 bottom-0 left-44 w-5 h-5 rounded-full bg-gradient-to-br from-light-secondary/10 to-light-support/10 animate-bounce delay-200" />
                      <section className="w-full h-full flex flex-col justify-center relative z-10 backdrop-blur-sm">
                        <code className="uppercase font-thin bg-clip-text text-transparent bg-gradient-to-r from-light-secondary to-light-support">
                          Efficient Development
                        </code>
                        <h5 className="font-bold font-sand text-xl mb-4">
                          Start Organized & Scale Up.
                        </h5>
                        <p className="text-sm leading-6 md:text-base md:leading-7">
                          We strongly understand the benefits of organizing each
                          aspect of a project. We believe that our clients are
                          to grow, thus we are always prepared for scaling up in
                          no time.
                        </p>
                      </section>
                    </div>
                  </article>
                </div>
              </>
            </Content>
          </>
        </Wrap>
      </Section>
      <Section className="w-full flex flex-col justify-center bg-gradient-to-r from-light-secondary to-light-support">
        <Wrap className="px-8 py-28 max-w-7xl mx-auto w-full">
          <>
            <Content
              displayType="block"
              className="w-full max-w-2xl mx-auto text-light-primary"
            >
              <>
                <h5 className="font-thin text-sm lg:text-base xl:text-lg text-center text-light mb-4">
                  &rarr; Deal Breaker &larr;
                </h5>
                <h3 className="text-center font-bold font-sand text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-14">
                  Flexible Prcing Options.
                </h3>
                <div
                  className={classify(
                    'transition-all p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:flex-row rounded-xl shadow-2xl shadow-dark-primary/50 backdrop-blur-sm mb-8',
                    theme === 'light'
                      ? 'bg-light-primary/10'
                      : 'bg-dark-primary/10'
                  )}
                >
                  <article className="flex flex-col items-center space-y-2">
                    <p className="font-bold text-xl">Installation Payment</p>
                    <h4 className="font-light text-lg lg:text-2xl font-sand">
                      Project Submission
                    </h4>
                  </article>
                  <article className="flex flex-col items-center space-y-2">
                    <p className="font-bold text-xl">Monthly Rate</p>
                    <h4 className="font-light text-lg lg:text-2xl font-sand">
                      Project Maintenance
                    </h4>
                  </article>
                </div>
                <div>
                  <Link href="/">
                    <a className="block underline-offset-3 underline w-full text-base lg:text-lg text-center font-medium font-sand">
                      Learn more about flexible pricing options for your future
                      project.
                    </a>
                  </Link>
                </div>
              </>
            </Content>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};
export default MotionedHome;
