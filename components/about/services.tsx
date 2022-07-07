import services from '@/db/services';
import { reactClassName } from '@/libs/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const Services: React.FC = () => {
  const router = useRouter();
  const onServiceCardClickRouterPush = (serviceUrl: string) => {
    router.push(serviceUrl);
  };
  const [openSourceView, setOpenSourceView] = useState<boolean>(false);
  const onClickOpenSourceView = () => {
    setOpenSourceView((cur) => !cur);
  };
  return (
    <>
      <Motioned.content
        id="about-webservices"
        className="bg-light w-full min-h-screen flex flex-col justify-center"
      >
        <Motioned.wrapper className="px-8 lg:px-16 py-28">
          <>
            <Motioned.content>
              <GradientText className="font-bold font-pop text-6xl lg:text-7xl flex flex-col mb-4 text-center">
                <span>Services That Matters</span>
              </GradientText>
            </Motioned.content>
            <Motioned.content>
              <p className="font-pop font-medium text-xl text-dark/70 text-center">
                We are currently providing various{' '}
                <strong className="text-dark text-2xl">
                  web-based services
                </strong>{' '}
                to help our client&apos; businesses.
              </p>
            </Motioned.content>
            <Motioned.content className="mt-8 border-t pt-8 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <>
                {services.map((service, index) => (
                  <Motioned.content
                    key={index}
                    className="transition-all rounded-xl cursor-pointer relative transform lg:hover:bg-dark/5 bg-light"
                  >
                    <div
                      onClick={() => onServiceCardClickRouterPush(service.url)}
                      className="py-8"
                    >
                      <h4 className="font-semibold font-sand text-2xl lg:text-3xl capitalize mb-3 text-center">
                        {service.title}
                      </h4>
                      <div className="w-full lg:w-10/12 mx-auto">
                        <Link href={service.url}>
                          <a className="w-max mx-auto text-lg py-2 block text-center transition-all transform">
                            Explore{' '}
                            <GradientText className="font-bold capitalize font-pop">
                              <span>{service.title}</span>
                            </GradientText>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Motioned.content>
                ))}
              </>
            </Motioned.content>
          </>
        </Motioned.wrapper>
      </Motioned.content>
      <Motioned.content
        id="about-opensourceprojects"
        className="bg-gradient-to-b from-transparent via-ocean/10 to-melon/30 w-full min-h-screen flex flex-col justify-center"
      >
        <Motioned.wrapper className="px-8 lg:px-16 py-28">
          <Motioned.content className="mb-4 flex flex-col items-center">
            <>
              {' '}
              <GradientText className="font-sand font-semibold text-xl md:text-2xl lg:text-3xl">
                <span>Open Source Software</span>
              </GradientText>
              <GradientText className="font-bold font-pop text-6xl lg:text-7xl flex flex-col text-center mb-6" />
              <GradientText className="flex flex-col items-center font-semibold font-sand text-2xl md:text-3xl lg:text-4xl mb-8">
                <>
                  <span>Develop Together,</span>
                  <span>Grow Together</span>
                </>
              </GradientText>
              <div
                className={reactClassName(
                  'transition-all backdrop-blur-md p-8 max-w-6xl mx-auto rounded-xl shadow-dark/5',
                  openSourceView
                    ? 'bg-light/50 shadow-xl'
                    : 'bg-light/0 shadow-none'
                )}
              >
                <button
                  onClick={onClickOpenSourceView}
                  className="pl-4 border-l-4 border-blue-500 font-semibold text-base md:text-lg xl:text-xl font-sand text-blue-400 transition-all lg:hover:text-blue-300 lg:hover:border-blue-300"
                >
                  Open Source Project?
                </button>
                <p
                  className={reactClassName(
                    'text-base lg:text-lg leading-7 lg:leading-8',
                    openSourceView ? 'mt-4 text-dark/60 block' : 'hidden'
                  )}
                >
                  Open source software means anyone can view the code and use
                  the code to contribute to the original project or create
                  something else entirely.{' '}
                  <a
                    href="https://skillcrush.com/blog/what-is-open-source/#what"
                    className="text-blue-400  font-sand font-medium text-sm transition-all italic lg:hover:text-blue-600"
                  >
                    What They Are And How To Get Started by Neely Kartha
                  </a>
                </p>
              </div>
            </>
          </Motioned.content>
        </Motioned.wrapper>
      </Motioned.content>
    </>
  );
};
export default Services;
