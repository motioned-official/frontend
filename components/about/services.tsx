import services from '@/db/services';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const Services: React.FC = () => {
  const router = useRouter();
  const onServiceCardClickRouterPush = (serviceUrl: string) => {
    router.push(serviceUrl);
  };
  return (
    <Motioned.content
      id="about-services"
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
              <strong className="text-dark text-2xl">web-based services</strong>{' '}
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
  );
};
export default Services;
