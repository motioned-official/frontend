import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const Hero: React.FC = () => {
  return (
    <Motioned.container className="w-full" id="index-hero">
      <Motioned.wrapper className="w-full px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <>
          <Motioned.content className="mb-9">
            <>
              <h2 className="flex flex-col space-y-1 mb-3">
                <span className="font-bold text-6xl lg:text-7xl font-pop">
                  Seek Success
                </span>
                <span className="text-5xl lg:text-6xl font-sand">
                  With <GradientText />
                </span>
              </h2>
              <p className="font-sand font-medium text-2xl leading-9 lg:text-3xl lg:leading-10 max-w-xl">
                Software Service Planning & Development Friend For Your
                Business,
              </p>
              <div></div>
            </>
          </Motioned.content>
          <Motioned.content>
            <Link href="/services">
              <a className="inline-block px-8 py-3 rounded-xl bg-dark text-light shadow-md font-sand font-bold text-lg lg:text-xl transition-all hover lg:hover:bg-dark/70 transform lg:hover:translate-x-2">
                Our Services
              </a>
            </Link>
          </Motioned.content>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Hero;
