import services from '@/db/services';
import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const Services: React.FC = () => {
  return (
    <Motioned.content id="about-services" className="bg-light">
      <Motioned.wrapper className="px-8 lg:px-16 py-28">
        <>
          <Motioned.content>
            <>
              <GradientText className="font-bold font-pop text-6xl lg:text-7xl flex flex-col mb-4">
                <>
                  <span>Services</span>
                  <span className="inline-block">That Matters</span>
                </>
              </GradientText>
              <p className="font-sand font-bold text-xl text-dark/70">
                We are currently providing various{' '}
                <strong className="text-dark text-2xl">
                  web-based services
                </strong>{' '}
                to help our client&apos; businesses.
              </p>
            </>
          </Motioned.content>
          <Motioned.container className="mt-8 border-t pt-8 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <>
              {services.map((service, index) => (
                <Motioned.content
                  key={index}
                  className="transition-all py-8 rounded-xl cursor-pointer relative transform lg:hover:top-2 top-0"
                >
                  <div>
                    <h4 className="font-semibold font-sand text-2xl lg:text-3xl capitalize mb-3 text-center">
                      {service.title}
                    </h4>
                    <div className="w-full lg:w-10/12 mx-auto">
                      <Link href={service.url}>
                        <a className="w-max mx-auto text-lg py-2 block text-center border-b-4 border-transparent border-dotted transition-all lg:hover:border-light/50 transform lg:hover:scale-110">
                          Learn more about{' '}
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
          </Motioned.container>
        </>
      </Motioned.wrapper>
    </Motioned.content>
  );
};
export default Services;
